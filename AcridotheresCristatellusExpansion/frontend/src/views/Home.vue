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
import { mapGetters,  mapActions} from 'vuex';

export default {
  name: "Home",
  data: function() {
      return {
          selectedCountry: 'Argentina',
          question: '',
          answer: 'Questions usually contain a question mark. ;-)'
      }
  },
  watch: {
    selectedCountry() {
        this.showCountry(this.selectedCountry);
        this.getAPIRecords({country: this.selectedCountry, year:'0'});
    }
  },
  async mounted() {
        await this.getAPIRecords({country: this.selectedCountry, year:'0'});
    },
  computed:{
        ...mapGetters([
        'ACRecords',
        'Countries',  
        ]),
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
