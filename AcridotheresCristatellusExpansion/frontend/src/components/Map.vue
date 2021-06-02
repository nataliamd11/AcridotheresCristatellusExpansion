<template>
  <div class="container">
    <!-- <div v-for="(record, index) in latLonRecords" :key="index">
      {{ record }}
    </div> -->
    <div id="mapContainer"></div>
  </div>
</template>

<script>
import { createMap, addTile, addRecordsMarkers } from "/utils/utils.js";

export default {
  name: "Map",
  data() {
    return {
      center: { lat: -34.856227, lon: -58.290644 },
      map: null
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
    }
  },
  methods: {
    setupLeafletMap: function () {
      var map = createMap("mapContainer", this.center);
      addTile(map);
      console.log('en map methods', this.latLonRecords);
      this.map = map;
      console.log('sale');
    },
    addMarkers() {
      addRecordsMarkers(this.latLonRecords, this.map);
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
