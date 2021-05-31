<template>
  <div class="container">
    <select v-model="selectedCountry">
        <option>Argentina</option>
        <option>Canada</option>
        <option>Uruguay</option>
    </select>
    <span>{{ selectedCountry }}</span>
  </div>
  <div v-for="(year, index) in ACYears" :key="index">
    {{ year }}
  </div>
  <div v-for="record in ACRecords" :key="record.id">
    {{ record }}
  </div>
  <div class='mt-3'>
    <button @click="test">Play</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Home",
  data: function() {
      return {
          selectedCountry: 'Argentina',
          year: 1988,
      }
  },
  watch: {
    selectedCountry() {
        this.showCountry(this.selectedCountry);
        this.getAPIRecords({country: this.selectedCountry});
    }
  },
  // async mounted() {
  //       await this.getAPIRecords({country: this.selectedCountry});
  //   },
  computed:{
      ACRecords() {
        return this.$store.getters.getRecordsByYear(this.year)
      },
      ACYears() {
        return this.$store.getters.getYears
      },
    },
  methods: {
        ...mapActions([
        'getAPIRecords'
        ]),
        showCountry(country_in) {
            console.log(country_in)
        },
        test() {
          console.log('clicked');
        }
    },
};
</script>
