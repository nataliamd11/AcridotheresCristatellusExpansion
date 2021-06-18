<template>
    <div class="container">
        <select @click="changeMap" v-model="selectedCountry">
            <option v-for="(country, index) in countries" :key="index">
            {{ country }} </option>
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
        ...mapGetters({
            countries: "getCountries",
        })
    },
    methods: {
        ...mapActions([
            "getAPICountryList",
        ]),
        async setCountry () {
            console.log('in dropdown', this.selectedCountry);
            await this.$store.commit('ApiData/saveSelectedCountry', 
                               {'selected_country': this.selectedCountry})
        },
        async setMapBounds() {
            await this.$store.dispatch('MapData/setupMapBounds');
        },
        changeMap() {
            this.setCountry();
            this.setMapBounds();
        },
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