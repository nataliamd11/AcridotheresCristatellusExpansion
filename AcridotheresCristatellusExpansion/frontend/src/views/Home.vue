<template>
  <div class="container">
    <Dropdown></Dropdown>
    <PlayMap></PlayMap>
    <span>{{ selectedCountry }}</span>
    <span>{{ this.year }}</span>
  </div>
  <Map :latLonRecords="ACRecords"></Map>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import { maxMinYears, sleep } from "/utils/utils.js";
import Map from "@/components/Map";
import Dropdown from "@/components/Dropdown";
import PlayMap from "@/components/PlayMap";

export default {
  name: "Home",
  data: function () {
    return {
      year: null,
    };
  },
  components: {
    Map,
    Dropdown,
    PlayMap,
  },
  watch: {
    selectedCountry() {
      console.log('en watch home', this.selectedCountry);
      this.year = this.getCurrentYear;
      this.getAPIRecords({ country: this.selectedCountry });
    },
    getCurrentYear() {
      console.log('en watch home', this.getCurrentYear);
      this.year = this.getCurrentYear;
    }
  },
  async mounted() {
    // starts by showing Argentinian records
    await this.getAPIRecords({ country: 'Argentina' });
  },
  computed: {
    ...mapGetters('ApiData', [
      'getRecordsByYear',
      'selectedCountry',
      'getCurrentYear',
    ]),
      ACRecords() {
        return this.getRecordsByYear(this.year)
      }
  },
  methods: {
    ...mapActions('ApiData/', [
      "getAPIRecords",
    ]),
  },
};
</script>
