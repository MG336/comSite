<template>
    <section class="motionGraphics">
        <header-comp class="header-comp" :headerData="motionGraphic.header"></header-comp>
        
            <div class="contant section-margin">
                <div class="items">
                    <div class="items__item" v-for="(item, index) in motionGraphic.items">
                       
                        <video class="items__video" controls :poster="item.poster" loading="lazy">
                        <source :src="item.src" type="video/mp4">
                        </video>
                        <div class="items__textBox">
                            <h2 class="items__title">{{ item.title }}</h2>
                            <a 
                            v-if="item.link" 
                            class="items__link" 
                            :href="item.link"
                            target="_blank"
                            >
                            Learn more
                            </a>
                            
                        </div>
       
                    </div>
                </div>
            </div>
    </section>
</template>

                    

            
<script>
    import HeaderComp from '../elem/HeaderComp.vue';
    export default {
        data(){
            return {

            }
        },
        components:{
            HeaderComp
        },
        props: {
            motionGraphic:"json",
        },
        created() {
            console.log(this.motionGraphic)
        },
    }
</script>

<style lang="scss" scoped>

    .header{
        color: $textPrimeColor;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: clamp(10rem, 20vw, 30rem);
        &__title{
            font-size: clamp(1.5rem, 5vw, 2.5rem);
        }
    }
    .items{
        display: flex;
        flex-direction: column;
        max-width: 960px;
        margin: 0 auto;
        gap: clamp(2rem, 10vw, 16rem);
        &__video {
            width: 100%;
            display: block;
        }
        &__title {
            text-transform:none;
            font-size: clamp(1rem, 5vw, 1.4rem);
            font-weight: 500;
            padding:0 
        }
        &__textBox{
            // border: 1px solid rgb(74, 74, 74);
            background-color: black;
            padding:clamp(.5rem, 3vw, 1.4rem) clamp(.8rem, 4vw, 1.4rem);
        }
        &__link{
            color: $textPrimeColor;
            text-decoration: underline;
            margin-top: clamp(.5rem, 4vw, 1rem);
            display: block;
            font-size: clamp(.5rem, 4vw, 1.2rem);
            font-weight: 100;
        }
            
    }
</style>
