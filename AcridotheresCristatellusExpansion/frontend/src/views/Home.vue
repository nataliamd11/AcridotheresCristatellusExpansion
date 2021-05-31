<template>
  <div class="container">
    <select v-model="selectedCountry">
        <option>Argentina</option>
        <option>Canada</option>
        <option>Uruguay</option>
    </select>
    <span>{{ selectedCountry }}</span>
  </div>
  <div v-for="record in ACRecords" :key="record.id">
    {{ record }}
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Home",
  data: function() {
      return {
          selectedCountry: 'Argentina',
          year: 1991,
      }
  },
  watch: {
    selectedCountry() {
        this.showCountry(this.selectedCountry);
        this.getAPIRecords({country: this.selectedCountry});
    }
  },
  async mounted() {
        await this.getAPIRecords({country: this.selectedCountry});
    },
  computed:{
      ACRecords() {
        console.log('in computed', this.year);
        console.log('in computed', this.$store.getters.getRecordsByYear(this.year));
        return this.$store.getters.getRecordsByYear(this.year)
      },
      Countries() {
        return this.$store.getters.Countries
      },
    },
  methods: {
        ...mapActions([
        'getAPIRecords'
        ]),
        showCountry(country_in) {
            console.log(country_in)
        }
    },
};
</script>
