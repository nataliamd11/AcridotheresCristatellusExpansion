import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    records: [],
  },
  getters: {
    getRecordsByYear: (state) => (year) => {
      console.log('In getter', state.records);
      return state.records.filter(records_year => records_year.year === year)
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
      let endpoint = ['api', 'records', siteParams.country, ''].join('/');
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
