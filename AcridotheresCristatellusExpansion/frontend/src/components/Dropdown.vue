<template>
    <div class="country-dropdown">
        <select class="country-select" @click="changeMap" v-model="selectedCountry">
            <option v-for="(country, index) in countries" :key="index">
                {{ country }}
            </option>
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

<style>
    .country-dropdown {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100%;
    }

    .country-select {
        color: rgb(245, 239, 230);
        background-color: rgb(89, 92, 102);
        height: 30px;
        font-family: 'Signika', sans-serif;
        padding-left: 5px;
        border-radius: 5%;
        border-style: solid;
        border-color: rgb(245, 239, 230);
    }

</style>