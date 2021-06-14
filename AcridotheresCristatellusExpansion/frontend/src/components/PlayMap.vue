<template>
    <div class="mt-3">
        <button v-if="getPlayMap" @click="playAnimatedMap">Play</button>
        <button v-else @click="stopAnimatedMap">Stop</button>
    </div>
</template>

<script>
// This component manages the play function, by calling
// play and stop actions.

import { mapActions, mapGetters } from 'vuex';

export default {
    name: "PlayMap",
    computed: {
        ...mapGetters('ApiData/', [
            'getPlayMap'
        ])
    },
    methods: {
        ...mapActions('ApiData/', [
            'playAnimatedMap',
            'stopAnimatedMap'
        ])
    }
}
</script>

<style scoped>

</style>