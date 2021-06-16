import { createStore } from "vuex";
import ApiData from './modules/ApiData'
import Map from './modules/Map'


export default createStore({
  modules: {
      ApiData,
      Map
  },
});