<template>
    <header-comp :headerData="aboutData"> </header-comp>
    <section class="about section-margin">
        <div class="about__box">
            <div class="grid">
                <div class="grid__box">
                    <img class="grid__img" :src="aboutData.img" alt="">
                </div>
                <div class="grid__text">
                    <p class="grid__p" v-for="(item, index) in aboutData.text" :key="index">{{ item }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import HeaderComp from './elem/HeaderComp.vue';

export default {
    data(){
        return {

        }
    },
    components:{
        HeaderComp
    },
    props:{
        aboutData:"json"
    },
    
}
</script>

<style lang="scss" scoped>
    .about{
        
    }
    .grid {
        display: grid;
        grid-template-columns: 1fr 1.6fr;
        max-width: 800px;
        margin: 0 auto;
        gap: clamp(1rem,3vw,2rem) 0;
        &__p{
            margin-bottom: 1em;
        }
        &__img{
            width: 100%;
        }
        &__text{
            padding: 0 clamp(1rem,3vw,2rem);
        }
    }

    @media (max-width: 512px){
        .grid{
            grid-template-columns: 1fr;
        }
   
    }
</style>