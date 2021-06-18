import { createStore } from "vuex";
import axios from "axios";
import ApiData from './modules/ApiData';
import MapData from './modules/MapData';


export default createStore({
  
  modules: {
      ApiData,
      MapData,
  },

  state: {
    countries: [],
  },

  getters: {
    getCountries: (state) => {
      return state.countries;
    },
  },

  mutations: {
    saveCountries(state, payload) {
      state.countries = payload.countries;
    },
  },

  actions: {

    async getAPICountryList(context) {
      // Gets data from django api and saves it in state.
      let endpoint = ["api", "records", "countries", ""].join("/");
      try {
        let countries = await axios.get(endpoint);
        context.commit("saveCountries", { countries: countries.data });
      } catch(err) {
        if (err.response) {
          console.log('error: ', err.response.status);
        }
      }
    },

  }

});