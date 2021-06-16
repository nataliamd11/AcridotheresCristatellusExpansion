import { createStore } from "vuex";
import ApiData from './modules/ApiData'


export default createStore({
  modules: {
      ApiData,
  },
});