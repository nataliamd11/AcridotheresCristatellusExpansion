<template>
    <div>
        <div class="card text-center" style="margin: 0 auto;">
            <div class="card-header dark-background font-subtitle">
                Select Country
            </div>
            <div class="card-body box-background" style="padding: 0%;">
                    <Dropdown></Dropdown>
                    <PlayMap></PlayMap>
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from "@/components/Dropdown";
import PlayMap from "@/components/PlayMap";


export default {
    name: "CountrySelector",
    components: {
        Dropdown,
        PlayMap,
    }
}
</script>

<style>
    .box-background {
        background-color: #faebd7;
    }

    .country-box-border {
        border-style: solid;
        border-color: #2a2420;
    }
</style>