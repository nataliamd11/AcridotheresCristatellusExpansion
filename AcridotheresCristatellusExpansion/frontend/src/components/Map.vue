<template>
  <div class="container">
    <div id="mapContainer"></div>
  </div>
</template>

<script>
import { addRecordsMarkers, removeMarkers } from "/utils/utilsMap.js";
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: "Map",
  props: {
    latLonRecords: {
      type: Array,
      required: true
    }
  },
  watch: {
    latLonRecords() {
      this.addMarkers();
    },
    getCurrentYear() {
      if (!this.getCurrentYear) {
        removeMarkers(this.marker_group);
      }
    },
    async getSelectedCountry() {
      if (this.marker_group) {
        removeMarkers(this.marker_group);
      }
      await this.$store.commit('ApiData/saveCurrentYear', 
                              {'current_year': null}),
      await this.$store.commit('ApiData/savePlayMap',
                              {'play_map': true})
    }
  },  
  computed: {
    ...mapGetters('ApiData', [
      'getCurrentYear',
      'getSelectedCountry',
    ]),
    ...mapState('MapData', [
      'map',
      'marker_group',
    ])
  },
  methods: {
    ...mapActions('MapData', [
      'setupLeafletMap',
    ]),
    async addMarkers() {
      await addRecordsMarkers(this.latLonRecords, this.map, this.marker_group);
    }
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped>
#mapContainer {
  width: 200px;
  height: 200px;
}

/* Small devices (tablets, 768px and up) */
@media (min-width: 400px) { 
      #mapContainer {
      width: 300px;
      height: 200px;
    }
 }


/* Small devices (tablets, 768px and up) */
@media (min-width: 576px) { 
      #mapContainer {
      width: 300px;
      height: 300px;
    }
 }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px){
  #mapContainer {
      width: 400px;
      height: 300px;
    }
 }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  #mapContainer {
      width: 500px;
      height: 400px;
    }
  }


/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
   #mapContainer {
      width: 600px;
      height: 500px;
    }
  }

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) { 
  #mapContainer {
      width: 700px;
      height: 500px;
    }
  }
</style>
