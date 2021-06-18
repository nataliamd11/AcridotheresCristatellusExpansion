<template>
<div>
  <div class="container">
    <Dropdown></Dropdown>
    <PlayMap></PlayMap>
    <span>{{ selectedCountry }}</span>
  </div>
  <Map :latLonRecords="ACRecords"></Map>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Map from "@/components/Map";
import Dropdown from "@/components/Dropdown";
import PlayMap from "@/components/PlayMap";

export default {
  name: "Home",
  components: {
    Map,
    Dropdown,
    PlayMap,
  },
  watch: {
    selectedCountry() {
      this.getAPIRecords();
    },
  },
  async mounted() {
    // starts by showing Argentinian records
    await this.getAPIRecords();
  },
  computed: {
    ...mapGetters('ApiData', {
      ACRecords: 'getRecordsByYear',
      selectedCountry: 'getSelectedCountry',
    }),
  },
  methods: {
    ...mapActions('ApiData/', [
      "getAPIRecords",
    ]),
  },
};
</script>
