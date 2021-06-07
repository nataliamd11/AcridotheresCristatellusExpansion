<template>
    <div class="mt-3">
        <button v-if="getPlayMap" @click="playAnimatedMap">Play</button>
        <button v-else @click="stopAnimatedMap">Stop</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "PlayMap",
    computed: {
        ...mapGetters([
            'getPlayMap'
        ])
    },
    methods: {
        ...mapActions([
            'playAnimatedMap',
            'stopAnimatedMap'
        ])
    }
}
</script>

<style scoped>

</style>