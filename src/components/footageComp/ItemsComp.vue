<template>
    <section class="">
        <header-comp class="header-comp" :headerData="footageData.hero"></header-comp>
        <div class="footage">
            <nav class="nav">
                <div class="nav__item" 
                :class="{nav__activeItem: $route.params.media === 'bg_video'}" 
                @click="$router.replace('/footage/bg_video'), 
                $route.query.search = false,
                table = 'bg_video',
                console.log('$route.query.table',$route.query.table)
                ">bg video</div>
                 
                <div class="nav__item"
                :class="{nav__activeItem: $route.params.media === 'textures'}"
                @click="$router.replace('/footage/textures')">textures</div>
                
                <div class="nav__item"
                :class="{nav__activeItem: $route.params.media === 'assets'}"
                @click="$router.replace('/footage/assets')">assets</div>
            </nav>

            <div class="search">
                <input class="search__input" type="text" maxlength="150" placeholder="Search.." v-model="searchData">
                    <button class="search__button" type="submit" @click="searchItems(searchData)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
            </div>

            <div class="items" v-if="serverData">
                <div class="items__item" 
                    v-for="(item, index) in serverData" 
                    :key="item.id" 
                    @click="store.setItemData(item)">
                    <router-link :to="{name: 'itemComp', params: {id: item.id}}" >
                        <img class="items__img" 
                        :src="`${serverUrl}/thumbnail/${item.id}${item.thumbnail}`" 
                        :alt="item.title" loading="lazy">
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template> 


<script setup>
    import {ref, defineProps, onMounted, watch} from 'vue';
    import HeaderComp from '../elem/HeaderComp.vue';//добавить компонент
    
    import { useRoute } from 'vue-router';
    import { useRouter } from 'vue-router';
    import { useStore } from '../../stores/store';
    
    //Для выделения таблиц
    let table = ref();

    //Данные поиска
    let searchData = ref();

    //Данные с сервера
    let serverData = ref();
    
    const store = useStore();//pinia
    const route = useRoute();//vue rout
    const router = useRouter();


    const serverUrl = 'http://localhost:3000';

    const props = defineProps({
        footageData: Object
    })

    console.log('route.path',route.path)
    console.log('route.params',route.params.media)




   async function setData() {

            if(store.itemsData === 0){

                
                //асинх запрос на серв
                await store.fetchBGData();
                serverData.value = store.itemsData;
                return
            }
            serverData.value = store.itemsData;
   }
//    setData()



   async function searchItems(searchData) {
        if(searchData.length < 3){
            return
        }
        const params = {
            search: true,
            table: route.params.media
        }
        
        if(!isNaN(searchData)){
            params.id = searchData
        } else {
            params.text = searchData
        }

        router.push({query: params})

        // if(route.params.media !== 'search'){

        //     router.replace({path:'search', query: params})
        
        // } else {
        //     await router.replace({path:'search', query: params})
        
        // }
    }
            
        

    watch (
            ()=> route.params.media, 
            async (newMedia, oldMedia) => {
                console.log("route.query.table", route.query.table)

                await store.fetchBGData(route.fullPath);
                serverData.value = store.itemsData;

                if(route.params.media !== 'search'){
                    table = route.params.media
                }
                
            }, {immediate: true}
        )

    watch (
        //Когда будет менятся не понятно
        ()=> route.query,
        async (newQuery,oldQuery) => {
            console.log('WATCH')
            await store.fetchBGData(route.fullPath);
            serverData.value = store.itemsData;
        }
    )




    // onMounted(()=>{
    //     // getData();
    //     if(store.data.length === 0){
    //         console.log(1010)
    //         store.fetchBGData();
    //         responseData.value = store.data;
    //     }
        
    //     console.log('responseData',responseData.value)
    // })
    // function setRouter(){
    //             this.$router.replace('/new-route')
    // }
    // watch(
    //     ()=> store.data,
    //     (newValue) => {
    //         console.log('newValue',newValue)
    //         responseData.value = store.data
    //         // sessionStorage.setItem('bg', JSON.stringify(newValue));

    //     },{deep:true}
    // );




</script>




<style lang="scss" scoped>
.search{
    height: 48px;
    // border: 1px solid white;
    margin-bottom: 16px;
    display: flex;
    
    justify-content: center;
    align-items: center;
    margin: 0 0 clamp(1.2rem, 5vw, 4rem);
    &__input{
        height: 40px;
        box-shadow: none;
        border: 1px solid $color4;
        padding: 0;
        width: 100%;
        max-width: 800px;
        outline: none;
        padding: 4px; /* Убирает внутренний отступ */
        margin: 0; /* Убирает внешний отступ */
        background-color: transparent;
        color: $textPrimeColor;
        font-size: clamp(0.7rem, 4vw, 1rem);
    }
    &__button{
        width: 80px;
        height: 40px;
        border: none;
        cursor: pointer;
        box-shadow: none;
        outline: none;
        background-color: $color4;
        &:hover{
            background: rgb(255, 255, 255, 0.4);
        }
    }
}
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