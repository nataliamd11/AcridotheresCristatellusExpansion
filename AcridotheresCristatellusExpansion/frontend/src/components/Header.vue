<template>
<div>
    <section class="dark-background-gradient header-margin">
        <h1 class="display-4 font-title">Expansion of Crested Myna in America</h1>
        <p class="lead">Mapping observations over time</p>
        <hr class="my-4">
    </section>
    <Navbar></Navbar>
</div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
    name: "Header",
    components: {
        Navbar,
    },
}
</script>

<style scoped>
    .header-margin {
        margin: 0px;
        margin-bottom: 0px;
        padding: 2rem;
    }
</style>