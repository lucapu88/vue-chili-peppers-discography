<template>
    <div class="container">
        <div class="row">
            <div class="col-12 music-cds-container">
                <music-cd></music-cd>
                <music-cd></music-cd>
                <music-cd></music-cd>
                <music-cd></music-cd>
                <music-cd></music-cd>
                <music-cd></music-cd>
                <music-cd></music-cd>
            </div>
        </div>
    </div>
</template>
<script>
    import MusicCd from './MusicCd';
    export default {
        components: {
            MusicCd
        }  
    }
</script>

<style lang="scss" scoped>
    .music-cds-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

</style>
    