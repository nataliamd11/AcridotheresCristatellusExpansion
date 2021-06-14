<template>
  <div class="container">
    <!-- <div v-for="(record, index) in latLonRecords" :key="index">
      {{ record }}
    </div> -->
    <div id="mapContainer"></div>
  </div>
</template>

<script>
import { createMap, 
         addTile, 
         addRecordsMarkers, 
         createMarkerGroup,
         removeMarkers } from "/utils/utilsMap.js";
import { mapGetters } from 'vuex';

export default {
  name: "Map",
  data() {
    return {
      center: { lat: -34.856227, lon: -58.290644 },
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
    latLonRecords() {
      this.addMarkers();
    },
    getCurrentYear() {
      if (!this.getCurrentYear) {
        removeMarkers(this.marker_group);
      }
    },
    async getSelectedCountry() {
      removeMarkers(this.marker_group);
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
    ])
  },
  methods: {
    setupLeafletMap: function () {
      var map = createMap("mapContainer", this.center);
      var marker_group = createMarkerGroup(map);
      addTile(map);
      console.log('en map methods', this.latLonRecords);
      this.map = map;
      this.marker_group = marker_group;
      console.log('sale');
    },
    addMarkers() {
      addRecordsMarkers(this.latLonRecords, this.map, this.marker_group);
    }
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped>
#mapContainer {
  width: 500px;
  height: 500px;
}
</style>
