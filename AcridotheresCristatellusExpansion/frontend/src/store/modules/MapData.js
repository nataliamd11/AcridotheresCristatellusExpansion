import axios from "axios";
import { addTile, createMap, createMarkerGroup } from "/utils/utilsMap.js";


const state = () => ({
    map_parameters: [],
    map: null,
    marker_group: null,
  })
  
const getters = {
    getMapBoundsByCountry: (state, getters, rootState) => {
        let country = rootState.ApiData.selected_country;
        let mapParams = state.map_parameters.find(
            map_params => map_params.country === rootState.ApiData.selected_country);
        if (country !== "Uruguay") {
          return [[mapParams["lat_max"], mapParams["lon_max"]], 
                  [mapParams["lat_min"], mapParams["lon_min"]]]
        } else {
          return [mapParams["lat_center"], mapParams["lon_center"]]
        }
    },
  }

const mutations = {
    saveMapParameters(state, payload) {
        state.map_parameters = payload.map_parameters; 
    },
    saveMap(state, payload) {
      state.map = payload.map;
    },
    saveMarkerGroup(state, payload) {
      state.marker_group = payload.marker_group;
    }
  }

const actions = {

    async getAPIMapParameters(context) {
      // Gets data from django api and saves it in state.
      let endpoint = ["api", "map-parameters", ""].join("/");
      try {
        let map_parameters = await axios.get(endpoint);
        context.commit("saveMapParameters", { 
            map_parameters: map_parameters.data });
      } catch(err) {
        if (err.response) {
          console.log('error: ', err.response.status);
        }
      }
    },

    async setupLeafletMap(context) {
      await context.dispatch('getAPIMapParameters');
      var map = createMap("mapContainer", { lat: -34.856227, lon: -58.290644 }, 2);
      context.commit("saveMap", { map: map });
      await context.dispatch('setupMapBounds');
      addTile(map);
      var marker_group = createMarkerGroup(map);
      context.commit("saveMarkerGroup", { marker_group: marker_group });
    },

    async setupMapBounds(context) {
        let map_bounds = await context.getters.getMapBoundsByCountry;
        let map = context.state.map;
        let selected_country = context.rootState.ApiData.selected_country;
        if (selected_country != "Uruguay") {
          map.flyToBounds(map_bounds);
        } else {
          map.flyTo(map_bounds, 8);
        }
    },  

  }


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}