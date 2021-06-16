import { createStore } from "vuex";
import axios from "axios";
import { maxMinYears, sleep } from "/utils/utils.js";

export default createStore({
  state: {
    records: [],
    years: [],
    selected_country: '',
    play_map: true,
    current_year: null,
  },
  getters: {
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
    }
  },
  mutations: {
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
  },
  actions: {
    getAPIRecords(context, siteParams) {
      let endpoint = ["api", "records", siteParams.country, ""].join("/");
      axios
        .all([axios.get(endpoint), axios.get(endpoint + "years/")])
        .then(
          axios.spread((records, years) => {
            context.commit("saveRecords", { records: records.data }),
              context.commit("saveYears", { years: years.data });
          })
        )
        .catch((err) => console.log(err));
    },
    async playAnimatedMap(context) {
      console.log('is called from actions');
      let [minYear, maxYear] = maxMinYears(context.getters.getYears);
      context.commit("savePlayMap", { play_map: false });
      let counter = minYear;
      while (counter <= maxYear && context.state.play_map === false) {
        context.commit("saveCurrentYear", { 'current_year': counter });
        await sleep(500);
        console.log(counter);
        counter++;
      }
      context.commit("savePlayMap", { play_map: true });
    },
    stopAnimatedMap(contex) {
      console.log('is called from actions');
      contex.commit("savePlayMap", { play_map: true });
    },
    
  },
  modules: {},
});
