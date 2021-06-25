<template>
    <div>
        <div class="container-fluid m-2 ms-lg-5">
        <div class="row" style="margin: 1rem;">
            <div class="col-sm-4 mt-3">
                <img v-bind:src="imageAC" style="width: 90%;">
            </div>
            <div class="col-sm-6 mt-3">
                <p>àposidjfosjdfoij</p>
            </div>
            <div class="col-sm-1 mt-3">
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Species',
    data: function() {
        return {
            imageAC: '/static/ACExpansion/img/crested_myna.jpg/',
        }
    },
}
</script>
