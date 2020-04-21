<template>
  <div class="music-container">
    <music-header></music-header>
  </div>
</template>

<script>
 import MusicHeader from '../components/MusicHeader';
 export default {
   components: {
     MusicHeader
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