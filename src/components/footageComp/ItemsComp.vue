<template>
    <section class="">
        <header-comp class="header-comp" :headerData="footageData.hero"></header-comp>
        <div class="footage">
            <nav class="nav">
                <div class="nav__item" 
                :class="{nav__activeItem: $route.params.media === 'video'}" 
                @click="$router.replace('/footage/video')">video bg</div>
                 
                <div class="nav__item"
                :class="{nav__activeItem: $route.params.media === 'textures'}"
                @click="$router.replace('/footage/textures')">textures</div>
                
                <div class="nav__item"
                :class="{nav__activeItem: $route.params.media === 'assets'}"
                @click="$router.replace('/footage/assets')">assets</div>
            </nav>

            <div class="items">
                <div class="items__item" v-for="(item, index) in selectedType" :key="index">
                    <router-link :to="{name: 'itemComp', params: {id: item.id}}" >
                        <img class="items__img" :src="item.preview_item" :alt="item.title" loading="lazy">
                    </router-link>
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
                selectedType: this.footageData[this.$route.params.media]

            }
        },
        props:{
            footageData:"json"
        },
        components:{
            HeaderComp
        },
        methods: {
            setRouter(){
                this.$router.replace('/new-route')
            },
        },
        beforeRouteUpdate(to, from, next){
            const id = to.params.media;
            this.selectedType = this.footageData[id];
            next();
        }
    }

</script>

<style lang="scss" scoped>
.header-comp{
    margin-bottom: 0;
}
    .hero{
        // border: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: clamp(5rem, 10vw, 20rem);
        &__title{
            color: white;
            // margin-bottom: 32px;
        }
    }
    .footage {
        // border: 1px solid white;
        max-width: 90%;
        margin: 0 auto;
        text-align: center;
        margin-bottom: clamp(4rem, 6vw, 10rem);
        
    }
    .items{
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(3,1fr);
        &__item{
            
        }
        &__img{
            width: 100%;
            cursor: pointer;
        }
    }
    .nav{
        color: white;
        display: flex;
        font-size: clamp(.7rem, 4vw, 1.3rem);

        justify-content: center;
        gap: clamp(1.2rem, 5vw, 3rem);;
        font-family: "inter-c";
        padding: clamp(1.2rem, 5vw, 4rem);
        text-transform: uppercase;
        font-weight: 500;
        &__item{
            cursor: pointer;
        }
        &__activeItem{
            border-bottom: 2px solid white;
        }
    }
    @media (max-width: 756px){
        .footage{
            margin: 0 0;
            max-width: 100%;
        }
        .items{
            grid-template-columns:1fr;
        }
    }
</style>