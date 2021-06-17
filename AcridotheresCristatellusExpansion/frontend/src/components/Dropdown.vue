<template>
    <div class="container">
        <select @click="setCountry" v-model="selectedCountry">
            <option v-for="(country, index) in countries" :key="index">
            {{ country }} </option>
            <!-- <option>Argentina</option>
            <option>Canada</option>
            <option>Uruguay</option> -->
        </select>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// this component sets the country

export default {
    name: "Dropdown",
    data: function() {
        return {
            selectedCountry: 'Argentina'
        }
    },
    computed: {
        ...mapGetters('ApiData/', {
            countries: "getCountries",
        })
    },
    methods: {
        ...mapActions('ApiData/', [
            "getAPICountryList",
        ]),
        setCountry () {
            console.log('in dropdown', this.selectedCountry);
            this.$store.commit('ApiData/saveSelectedCountry', 
                               {'selected_country': this.selectedCountry})
        }
    },
    async beforeMount() {
        await this.getAPICountryList();
    },
    async mounted() {
        // starts by showing Argentinian records
        await this.setCountry();

    },    
}
</script>

<style scoped>

</style>