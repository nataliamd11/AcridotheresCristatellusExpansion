<template>
  <div class="container">
    <h1>Showing component</h1>
    <div id="mapContainer"></div>
  </div>
</template>

<script>
import { createMap, addTile, addRecordsMarkers } from "/utils/utils.js";

export default {
  name: "Map",
  data() {
    return {
      center: { lat: 51.505, lon: -0.09 },
    };
  },
  props: {
    latLonRecords: {
      type: Array,
      required: true
    }
  },
  methods: {
    setupLeafletMap: function () {
      var map = createMap("mapContainer", this.center);
      addTile(map);
      console.log(this.latLonRecords);
      addRecordsMarkers(this.latLonRecords, map);
      console.log('sale');
    },
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
