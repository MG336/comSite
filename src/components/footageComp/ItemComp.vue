<template>
    <section class="footage_sec">
       
        <div class="items">
            <div class="hero">
                <h1 class="hero__title">{{ target.title }}</h1>
            </div>
            <div class="items__item">
                <template v-if="isImg()">
                    <img class="items__img" :src="target.preview_item_h">
                </template>
                <template v-else>
                    <video class="items__video" 
                    controls 
                    controlsList="nodownload">
                        <source :src="target.preview_item_h" type="video/mp4">
                    </video>
                </template>
            </div>
            <!-- <router-link class="items__link" :to="{name: item.nameComp, params:item.params}"></router-link> -->
            <div class="items__btns">
                <btn-router
                    :to="target.item"
                    class="items__btn" 
                    color = "white" 
                    text-color="white" 
                    :download="true"
                    :border="true"
                    max-width="282px">
                    DOWNLOAD
                </btn-router>

                <btn-router
                    :to="{name:'donateComp'}"
                    class="items__btn" 
                    color = "red" 
                    text-color="red" 
                    :download="null"
                    :border="true"
                    max-width="282px">
                    donate
                </btn-router>
            </div>
                
            <div class="copy">
                <span class="copy__title">{{ footageData.license.title}}</span>
                <ul class ="copy__items">
                    <li class ="copy__item" v-for="item in copyText" :key="item">{{ item }}</li>
                </ul>
            </div>
        </div>
    </section>
</template> 

<script>
    import btnComp from '../elem/BtnComp.vue';
    import BtnRouter from '../elem/BtnRouter.vue';
    export default {
        data(){
            return {
                target: this.footageData[this.$route.params.media][this.$route.params.id],
                copyText: this.footageData.license.text,
                
            }
        },
        components:{
            btnComp,
            BtnRouter
        },
        props:{
            footageData: "json",
            // itemId: String,
            id: String
        },
        methods: {
            // findId(items,itemId){
            //     this.target = items.find((item) => item.id === itemId)
            // },
            isImg(){
                return this.target.preview_item_h.endsWith('.jpg') 
                || this.target.preview_item_h.endsWith('.png') 
                || this.target.preview_item_h.endsWith('.webp');
            }
        },
        computed:{
            // isPath(){
            //     return this.$route.path === "/footage/"
            // }
        },
        created() {
            console.log(this.target.item)
        },

    }
</script>

                
                
            

                


<style lang="scss" scoped>
    .hero{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: clamp(.5rem, 4vw, 3rem);
        padding: 0 16px;
        width: 100%;
        &__title{
            color: $textPrimeColor;
            font-weight: 500;
            font-size: clamp(1rem, 5vw, 1.4rem);
        }
    }
    .footage_sec {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: clamp(.5rem, 4vw, 3rem);
        
        &__title{
            color: white;
            
            margin-bottom: 32px;
        }
    }
    .items{
        width: 100%;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        gap: clamp(.5rem, 4vw, 3rem);
        align-items: center;
        &__item{
            min-width: 100%;

        }
        &__title{
            
        }
        &__img{
            width: 100%;
        }
        &__video{
            width: 100%;


        }
        &__btns{
            display: flex;
            gap: 16px;
            justify-content: center;
            padding: 0 16px;
            flex-grow: 1;
            flex-shrink: 1;
            width: 100%;
        

        }
    }
    .copy {
        max-width: 700px;
        display: flex;
        flex-direction: column;
        gap: clamp(1rem, 5vw, 1.3rem);
        list-style-position: inside;
        margin: clamp(2rem, 8vw, 4rem) 16px clamp(6rem, 16vw, 10rem);
        font-family: inter-c;
        &__title{
            font-size: clamp(1rem, 5vw, 1.3rem);
            color: $textPrimeColor;
            text-transform: uppercase;
            text-align: center;
            font-weight: 100;
        }
            
        &__items{
            font-size: clamp(1rem, 5vw, 1rem);
            color: $textPrimeColor;
            font-weight: 100;
            line-height: clamp(1.3rem, 5vw, 1.6rem);

        }

    }
    @media (max-width: 756px){
        .items{
            grid-template-columns:1fr;
        }
    }
</style>