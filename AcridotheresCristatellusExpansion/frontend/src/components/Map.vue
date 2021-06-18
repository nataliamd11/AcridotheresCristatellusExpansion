<template>
  <div class="container">
    <div id="mapContainer"></div>
    <div>
      <!-- {{ mapParams }} -->
    </div>
  </div>
</template>

<script>
// import { 
  // createMap, 
  //        addTile, 
  //        addRecordsMarkers, 
  //        createMarkerGroup,
        //  removeMarkers } from "/utils/utilsMap.js";
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Map",
  data() {
    return {
      // center: { lat: -34.856227, lon: -58.290644 },
      map: null,
      marker_group: null,
    };
  },
  props: {
    latLonRecords: {
      type: Array,
      required: true
    }
  },
  watch: {
    // latLonRecords() {
    //   this.addMarkers();
    // },
    // getCurrentYear() {
    //   if (!this.getCurrentYear) {
    //     removeMarkers(this.marker_group);
    //   }
    // },
    // async getSelectedCountry() {
    //   removeMarkers(this.marker_group);
    //   await this.$store.commit('ApiData/saveCurrentYear', 
    //                           {'current_year': null}),
    //   await this.$store.commit('ApiData/savePlayMap',
    //                           {'play_map': true})
    // }
  },  
  computed: {
    ...mapGetters('ApiData', [
      'getCurrentYear',
      'getSelectedCountry',
    ]),
    // ...mapGetters('MapData', {
    //   mapParams: 'getMapParametersByCountry',
    // })
  },
  methods: {
    ...mapActions('MapData', [
      // 'getAPIMapParameters',
      'setupLeafletMap',
      'setupMapBounds',
    ]),
    // setupLeafletMap: function () {
    //   var map = createMap("mapContainer", { lat: this.mapParams.lat_center, lon: this.mapParams.lon_center});
    //   var marker_group = createMarkerGroup(map);
    //   addTile(map);
    //   console.log('en map methods', this.latLonRecords);
    //   this.map = map;
    //   this.marker_group = marker_group;
    //   console.log('sale');
    // },
    // async addMarkers() {
    //   await addRecordsMarkers(this.latLonRecords, this.map, this.marker_group);
    // }
  },
  beforeMount() {
    console.log('carga centro');
    // this.getAPIMapParameters();
  },
  mounted() {
    console.log('carga mapa');
    this.setupLeafletMap();
    // this.setupMapBounds();
  },
};
</script>

<style scoped>
#mapContainer {
  width: 800px;
  height: 800px;
}
</style>
