<template>
        <header class="header">
            <div class="header__bg" >
                <h1 class="header__title">{{ headerData.title}}</h1>
            </div>
        </header>
          
</template>
<script>
// :style="{backgroundImage: 'url(' + headerData.bgImg + ')'}" 
    export default {
    data(){
        return {

        }
    },
    props: {
        headerData:"json",
    },
    created() {
        console.log(this.headerData)
    },
}
</script>
<style lang="scss" scoped>
     .header{
        color: $textPrimeColor;
        // border: 1px solid rgb(247, 0, 0);
        height: clamp(10rem, 20vw, 20rem);
        &__title{
            font-size: clamp(1.5rem, 5vw, 2.5rem);
            text-align: center;
            text-transform: uppercase;
        }
        &__bg {
            // display: flex;

        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        min-height: 100%;
        justify-content: center;
        background-position: center;
        background-color: rgb(45, 45, 45);
        
        }
    }
</style>