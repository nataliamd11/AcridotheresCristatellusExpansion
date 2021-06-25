<template>
<div>
  <div class="padding-container container-fluid margin-container">
    <Header></Header>
    <div class="row" style="margin: 1rem;">
      <div class="col-sm-3 mt-3">
        <CountrySelector></CountrySelector>
      </div>
      <div class="col-sm-2 mt-3">
        <Calendar v-if="showedYear" :showedYear="showedYear"></Calendar>
        <Calendar v-else></Calendar>
      </div>
      <div class="col-sm-5 mt-3">
        <Map :latLonRecords="ACRecords"></Map>
      </div>
      <div class="col-sm-1 mt-3">
      </div>
  </div>
  
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Map from "@/components/Map";
import Calendar from "@/components/Calendar";
import Header from "@/components/Header";
import CountrySelector from "@/components/CountrySelector";

export default {
  name: "Home",
  components: {
    Map,
    Calendar,
    Header,
    CountrySelector,
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
      showedYear: 'getCurrentYear',
    }),
  },
  methods: {
    ...mapActions('ApiData/', [
      "getAPIRecords",
    ]),
  },
};
</script>

<style scoped>
  .padding-container {
    padding-right: 0rem;
    padding-left: 0rem;
  }
</style>