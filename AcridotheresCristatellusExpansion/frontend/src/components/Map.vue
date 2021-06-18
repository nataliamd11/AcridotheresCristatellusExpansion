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
  width: 800px;
  height: 500px;
}
</style>
