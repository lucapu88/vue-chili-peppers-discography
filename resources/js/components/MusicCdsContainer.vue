<template>
    <div class="container">
        <div class="row">
            <div class="col-12 music-cds-container">
                <music-cd v-for="(cd, index) in cds" :key='index' :cd='cd'></music-cd>
            </div>
        </div>
    </div>
</template>
<script>
    import MusicCd from './MusicCd';
    export default {
        components: {
            MusicCd
        },
        data () {
            return {
                cds: []
            }
        },
        mounted() {
            let self = this;
            axios.get('https://prova1api.herokuapp.com/RedHotCHiliPeppersDiscography').then(function(response){
                self.cds = response.data.response;             
            });
        }
    };
</script>

<style lang="scss" scoped>
    .music-cds-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

</style>
    