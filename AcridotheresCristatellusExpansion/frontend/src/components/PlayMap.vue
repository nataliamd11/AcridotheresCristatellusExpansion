<template>
    <div class="mt-3">
        <button type="button" class="btn btn-danger dark-background" v-if="getPlayMap" @click="playAnimatedMap">Play</button>
        <button type="button" class="btn btn-danger dark-background" v-else @click="stopAnimatedMap">Pause</button>
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

    button {
        height: 35px;
        width: 80px;
        border-radius: 20%;
        margin-bottom: 20px;
        border-color: None;
        box-shadow: 0px 0px;
        font-family: 'Signika', sans-serif;
        /* border-style: solid;
        border-color: #af2929; */
    }

</style>