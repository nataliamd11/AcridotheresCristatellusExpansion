import axios from "axios";
import { maxMinYears, 
         sleep, 
         startCounter } from "/utils/utilsApiData.js";


const state = () => ({
    records: [],
    years: [],
    selected_country: '',
    play_map: true,
    current_year: null
  })
  
const getters = {
    getRecordsByYear: (state) => {
        let recordsYear = state.records.filter((records_year) => records_year.year === state.current_year);
        let latLonYears = [];
        for (var i=0; i<recordsYear.length; i++) {
          latLonYears[i] = {'lat': recordsYear[i].latitude, 
                            'lon': recordsYear[i].longitude}
        }
        return latLonYears
    },
    getSelectedCountry: (state) => {
      return state.selected_country;
    },
    getYears: (state) => {
      return state.years;
    },
    getPlayMap: (state) => {
      return state.play_map;
    },
    getCurrentYear: (state) => {
      return state.current_year
    },
  }

  const mutations = {
    saveRecords(state, payload) {
      state.records = payload.records;
    },
    saveYears(state, payload) {
      state.years = payload.years;
    },
    saveSelectedCountry(state, payload) {
      state.selected_country = payload.selected_country;
    },
    savePlayMap(state, payload) {
      state.play_map = payload.play_map;
    },
    saveCurrentYear(state, payload) {
      state.current_year = payload.current_year;
    }
  }

  const actions = {

    async getAPIRecords(context) {
      // Gets data from django api and saves it in state.
      let endpoint = ["api", "records", context.state.selected_country, ""].join("/");
      try {
        let [records, years] = await axios.all(
          [axios.get(endpoint), axios.get(endpoint + "years/")])
        context.commit("saveRecords", { records: records.data }),
        context.commit("saveYears", { years: years.data });
      } catch(err) {
        if (err.response) {
          console.log('error: ', err.response.status);
        }
      }
    },

    async playAnimatedMap(context) {
      // Starts the animation by setting state.current_year and state.play map.
      // Runs animation by incrementing state.current_year by 1 every 500ms.
      
      let [minYear, maxYear] = maxMinYears(context.getters.getYears);
      context.commit("savePlayMap", { play_map: false });

      if (context.state.current_year === maxYear) {
        await context.commit("saveCurrentYear", { current_year: null });
      } 
      let counter = startCounter(context.state.current_year, minYear);
    
      while (counter <= maxYear && context.state.play_map === false) {
        context.commit("saveCurrentYear", { current_year: counter });
        await sleep(500);
        counter++;
      }
      context.commit("savePlayMap", { play_map: true });
    },

    stopAnimatedMap(contex) {
      // Stops the animation by changing state.play_map to true. 
      contex.commit("savePlayMap", { play_map: true });
    }
  }


  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }