<template>
    <div class="container">
        <div id="calendar">
            <div class="page">
                <div class="title">Year</div>
                <div class="yearNumber">{{ showedYear }}</div>
            </div>
        </div>
    </div>
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
    .title {
        height: 25px;
        width: 100%;
        color: beige;
        font-size: large;
        background-color: rgb(211, 67, 23);
        padding: 0%;
        margin: 0%;
    }
    .page {
        height: 100px;
        width: 100px;
        background-color: antiquewhite;
        border-style: solid;
        border-color: rgb(179, 175, 175);
        box-shadow: 10px 10px 5px rgb(173, 168, 168);
    }
    .yearNumber {
        color: brown;
        font-size: large;
        padding-top: 20%;
    }
</style>