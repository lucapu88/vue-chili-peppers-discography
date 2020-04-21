<template>
    <div class="music-header">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <img src="https://www.pngkey.com/png/full/602-6023578_vinilo-decorativo-red-hot-chili-peppers.png" alt="">
                </div>
                <div class="col-sm-6 text-right mt-3">
                    <h1>RHCP Discography</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../sass/variables';
    $headerHeight: 80px;
    .music-header {
        @include background-rgba;
        height: $headerHeight;
        line-height: $headerHeight;
        font-family: 'Kaushan Script', cursive;
        img {
            height: 60px;
        }
    }
</style>