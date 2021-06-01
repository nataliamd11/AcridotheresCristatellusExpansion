import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    records: [],
    years: [],
  },
  getters: {
    getRecordsByYear: (state) => (year) => {
      return state.records.filter((records_year) => records_year.year === year);
    },
    Countries: (state) => {
      return state.countries;
    },
    getYears: (state) => {
      return state.years;
    },
  },
  mutations: {
    saveRecords(state, payload) {
      state.records = payload.records;
    },
    saveYears(state, payload) {
      state.years = payload.years;
    },
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
  },
  modules: {},
});
