<template>
  <div class="container">
    <select v-model="selectedCountry">
      <option>Argentina</option>
      <option>Canada</option>
      <option>Uruguay</option>
    </select>
    <span>{{ selectedCountry }}</span>
  </div>
  <!-- <div v-for="(year, index) in ACYears" :key="index">
    {{ year }}
  </div> -->
  <div class="mt-3">
    <button v-if="playMap" @click="playAnimatedMap">Play</button>
    <button v-else @click="stopAnimatedMap">Stop</button>
  </div>
  <div v-for="record in ACRecords" :key="record.id">
    {{ record }}
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { maxMinYears, sleep } from "/utils/utils.js";

export default {
  name: "Home",
  data: function () {
    return {
      selectedCountry: "Argentina",
      year: null,
      playMap: true,
    };
  },
  watch: {
    selectedCountry() {
      this.year = null;
      this.playMap = true;
      this.getAPIRecords({ country: this.selectedCountry });
    },
  },
  async mounted() {
    await this.getAPIRecords({ country: this.selectedCountry });
  },
  computed: {
    ACRecords() {
      return this.$store.getters.getRecordsByYear(this.year);
    },
    ACYears() {
      return this.$store.getters.getYears;
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
    },
    stopAnimatedMap() {
      this.playMap = true;
    },
  },
};
</script>
