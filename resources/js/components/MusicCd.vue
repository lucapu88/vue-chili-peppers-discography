<template>
    <div class="card albumContainer mt-4" style="width: 18rem;">
        <img :src="cd.poster" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{this.cd.album}}</h5>
            <p class="card-text">{{this.cd.anno}}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>
</template>

<script>
    export default {
        props: ['cd'], //per passare elementi da un componente all'altro (in questo caso mi passo il singolo cd che è all'interno dell'array 'cds' ciclato)
    };
</script>

<style lang="scss" scoped>
     @import '../../sass/variables';
    .albumContainer {
        @include background-rgba;
    }

</style>