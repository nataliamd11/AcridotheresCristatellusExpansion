<template>
<div>
  <div class="container-fluid">
    <div class="row title">
        <p>Expansion of Crested Myna in America</p>
    </div>
    <div class="row">
      <div class="col-sm-3 m-2">
        <Dropdown></Dropdown>
        <PlayMap></PlayMap>
      </div>
      <div class="col-sm-2 m-2">
        <Calendar v-if="showedYear" :showedYear="showedYear"></Calendar>
        <Calendar v-else></Calendar>
      </div>
      <div class="col-sm-5 m-2">
        <Map :latLonRecords="ACRecords"></Map>
      </div>
      <div class="col-sm-1 m-2">
      </div>
  </div>
  
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Map from "@/components/Map";
import Dropdown from "@/components/Dropdown";
import PlayMap from "@/components/PlayMap";
import Calendar from "@/components/Calendar";

export default {
  name: "Home",
  components: {
    Map,
    Dropdown,
    PlayMap,
    Calendar,
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