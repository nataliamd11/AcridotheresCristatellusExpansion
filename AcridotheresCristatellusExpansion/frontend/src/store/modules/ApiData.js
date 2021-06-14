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
    getRecordsByYear: (state) => (year) => {
        let recordsYear = state.records.filter((records_year) => records_year.year === year);
        let latLonYears = [];
        for (var i=0; i<recordsYear.length; i++) {
          latLonYears[i] = {'lat': recordsYear[i].latitude, 
                            'lon': recordsYear[i].longitude}
        }
        return latLonYears
    },
    selectedCountry: (state) => {
      return state.selected_country;
    },
    getYears: (state) => {
      return state.years;
    },
    getPlayMap: (state) => {
      return state.play_map;
    },
    getCurrentYear: (state) => {
      console.log('getter: ', state.current_year);
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
      console.log('mutation', state.current_year);
      state.current_year = payload.current_year;
    }
  }

  const actions = {
    async getAPIRecords(context, siteParams) {
      let endpoint = ["api", "records", siteParams.country, ""].join("/");
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
      let [minYear, maxYear] = maxMinYears(context.getters.getYears);
      context.commit("savePlayMap", { play_map: false });

      let counter = startCounter(context.state.current_year, minYear);
      
      while (counter <= maxYear && context.state.play_map === false) {
        context.commit("saveCurrentYear", { current_year: counter });
        await sleep(500);
        counter++;
      }
      
      context.commit("savePlayMap", { play_map: true });
      if (context.state.current_year === maxYear) {
        context.commit("saveCurrentYear", { current_year: null });
      }
    },
    stopAnimatedMap(contex) {
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