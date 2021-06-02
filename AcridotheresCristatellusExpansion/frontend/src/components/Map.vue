<template>
  <div class="container">
    <h1>Showing component</h1>
    <div id="mapContainer"></div>
  </div>
</template>

<script>
import { createMap, addTile, createMarker } from "/utils/utils.js";

export default {
  name: "Map",
  data() {
    return {
      center: { lat: 51.505, lon: -0.09 },
    };
  },
  methods: {
    setupLeafletMap: function () {
      var map = createMap("mapContainer", this.center);
      addTile(map);
      createMarker(this.center, map);
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
