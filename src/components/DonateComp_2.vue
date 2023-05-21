<template>
    <section class="donate">
        <div class="gridItems">
            <div class="gridItems__item gridItems__item--title">
                <h2>{{ socialDataJson.donate.title }}</h2>
            </div>
            <div class="gridItems__item gridItems__item--img">
                <img class="gridItems__img" :src="contantJson.donate.avatar" alt="Author">
            </div>
            <div class="gridItems__item">
                <div class="gridItems__textBtn">
                    <p class="gridItems__p">{{ socialDataJson.donate.text }}</p>
                    <a class="btn btn--donate" :href="socialDataJson.donate.link ">donate</a>    
                </div>
            </div>
        </div>
                        
        
        <div class="donate__bg" 
            :style="{
                    backgroundImage: 'url(' + contantJson.donate.bgUrl + ')',
                    opacity: contantJson.donate.opacityBg
                }"
        ></div>
        
    </section>

                    


</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        contantJson:"json",
        socialDataJson: "json"
    }
}
</script>

<style lang="scss" scoped>
    .donate {
        display: flex;
        justify-content: center;
        padding: calc($index*10) 16px;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        z-index: 0;

        &__bg {
            top: 0;
            left: 0;
            position: absolute;
            height: 100%;
            width: 100%;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            z-index: 0;
        }
    }

    .gridItems{
        max-width: 800px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: calc($index*4) 32px;
        position: relative;
        z-index: 3;
        opacity: 1;
        &__img{
            width: 100%;
        }
        &__item{

            &--title {
                grid-column: 1/3;
                text-align: center;
            }
            &--img {
                display: flex;
                justify-content: center;
            }
        }
        &__textBtn{
            display: flex;
            gap: 32px;
            flex-direction: column;
        }
    }


    @media (max-width: 800px){
        .gridItems{
            grid-template-columns:1fr;
            &__item{
            &--title {
                grid-column: 1;
            }
        }
        }
    }
</style>