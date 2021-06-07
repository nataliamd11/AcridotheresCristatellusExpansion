<template>
  <div class="container">
    <Dropdown></Dropdown>
    <PlayMap></PlayMap>
    <span>{{ selectedCountry }}</span>
    <span>{{ this.year }}</span>
  </div>
  <div class="mt-3">
    <button v-if="playMap" @click="playAnimatedMap">Play</button>
    <button v-else @click="stopAnimatedMap">Stop</button>
  </div>
  <Map :latLonRecords="ACRecords"></Map>
</template>

<script>
import { mapActions } from "vuex";
import { maxMinYears, sleep } from "/utils/utils.js";
import Map from "@/components/Map";
import Dropdown from "@/components/Dropdown";
import PlayMap from "@/components/PlayMap";

export default {
  name: "Home",
  data: function () {
    return {
      year: null,
      playMap: true,
    };
  },
  components: {
    Map,
    Dropdown,
    PlayMap
  },
  watch: {
    selectedCountry() {
      console.log('en watch home', this.selectedCountry);
      this.year = null;
      this.playMap = true;
      this.getAPIRecords({ country: this.selectedCountry });
    },
  },
  async mounted() {
    // starts by showing Argentinian records
    await this.getAPIRecords({ country: 'Argentina' });
  },
  computed: {
    ACRecords() {
      console.log('en home computed getter', this.$store.getters.getRecordsByYear(this.year));
      return this.$store.getters.getRecordsByYear(this.year)
    },
    ACYears() {
      return this.$store.getters.getYears;
    },
    selectedCountry() {
      return this.$store.getters.selectedCountry;
    },
  },
  methods: {
    ...mapActions(["getAPIRecords"]),
    async playAnimatedMap() {
      let [minYear, maxYear] = maxMinYears(this.ACYears);
      this.playMap = false;
      let counter = minYear;
      while (counter <= maxYear && this.playMap === false) {
        this.year = counter;
        await sleep(500);
        counter++;
      }
      this.playMap = true;
    },
    stopAnimatedMap() {
      this.playMap = true;
    },
  },
};
</script>
