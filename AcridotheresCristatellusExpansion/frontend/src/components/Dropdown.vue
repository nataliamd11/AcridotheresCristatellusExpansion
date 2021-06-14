<template>
    <div class="container">
        <select @click="setCountry" v-model="selectedCountry">
            <option>Argentina</option>
            <option>Canada</option>
            <option>Uruguay</option>
        </select>
    </div>
</template>

<script>
// this component sets the country

export default {
    name: "Dropdown",
    data: function() {
        return {
            selectedCountry: 'Argentina'
        }
    },
    methods: {
        setCountry () {
            console.log('in dropdown', this.selectedCountry);
            this.$store.commit('ApiData/saveSelectedCountry', 
                               {'selected_country': this.selectedCountry})
        }
    },
    async mounted() {
        // starts by showing Argentinian records
        await this.setCountry();
    },    
}
</script>

<style scoped>

</style>