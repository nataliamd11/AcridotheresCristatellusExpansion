<template>
    <div>
        <div class="card text-center calendar" style="margin: 0 auto;">
            <div class="card-header dark-background font-subtitle dark-border year-border">
                Year
            </div>
            <div class="card-body box-background" style="padding: 0%;">
                    <div class="yearNumber">{{ showedYear }}</div>
            </div>
        </div>
    </div>
    <!-- <div class="container">
        <div id="calendar">
            <div class="page">
                
            </div>
        </div>
    </div> -->
</template>

<script>

export default {
    name: 'Calendar',
    props: {
        showedYear: {
            type: Number,
            required: false,
    }},    
}
</script>

<style scoped>
    .calendar {
        width: 100px;
        height: 150px;
        border-style: solid;
        box-shadow: 3px 3px 3px rgb(173, 168, 168);
    }
    .page {
        height: 100px;
        width: 100px;
    }

    .year-border {
        border-width: 3px;
    }
    .yearNumber {
        color: brown;
        font-size: large;
        padding-top: 20%;
    }
</style>