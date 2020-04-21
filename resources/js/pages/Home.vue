<template>
  <div class="music-container">
    <music-header></music-header>
    <music-cds-container></music-cds-container>
  </div>
</template>

<script>
 import MusicHeader from '../components/MusicHeader';
 import MusicCdsContainer from '../components/MusicCdsContainer';
 export default {
   components: {
     MusicHeader,
     MusicCdsContainer
   },
   data() {
     return{};
   }
 };
</script>

<style scoped lang="scss" >
  @import '../../sass/variables';
  .music-container {
    height: 100vh;
    @include  colorGradient( #DB1E29, black);
  }
</style>