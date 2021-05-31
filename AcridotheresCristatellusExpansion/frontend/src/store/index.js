import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    records: [],
    countries: ['Argentina', 'Canada', 'Mexico'],
  },
  getters: {
    ACRecords:state => {
      return state.records
    },
    Countries:state => {
      return state.countries
    }
  },
  mutations: {
    saveRecords(state, payload) {
      console.log('en mutation1', payload.records);
      state.records = payload.records;
      console.log('en mutation2', state.records);
    }
  },
  actions: {
    getAPIRecords(context, siteParams) {
      console.log('siteParams', siteParams);
      console.log(siteParams.country);
      let endpoint = ['api', 'records', siteParams.country, siteParams.year, ''].join('/');
      console.log(endpoint);
      // let endpoint = "/api/records/Argentina/1988/"
      axios({
          method: 'get',
          url: endpoint,
      })
      .then(res => {
              console.log('en action', res.data);
              context.commit('saveRecords', {records: res.data});
          })
      .catch(err => console.log(err));
    },
  },
  modules: {},
});
