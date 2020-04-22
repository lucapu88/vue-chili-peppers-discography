<template>
    <div class="card albumContainer mt-4" style="width: 18rem;">
        <img :src="cd.poster" class="card-img-top" alt="">
        <div class="card-body">
            <h4 class="card-title">{{this.cd.album}}</h4>
            <p class="card-text">{{this.cd.anno}}</p>
            <p class="card-text description">{{this.cd.descrizione}}</p>
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
     @import '../../sass/general';
    .albumContainer {
        @include background-rgba;
        .description {
            height: 180px;
            overflow-y: auto;
        }
    }
    //CUSTOM SCROLLBAR
    /* width */
    .description::-webkit-scrollbar {
    width: 11px;
    }
    /* Track */
    .description::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px $tertiary-color;
    border-radius: 10px;
    }
    /* Handle */
    .description::-webkit-scrollbar-thumb {
    background: $primary-color;
    border-radius: 10px;
    }
    /* Handle on hover */
    .description::-webkit-scrollbar-thumb:hover {
    background: $secondary-color;
    }

</style>