<template>
    <section class="items-con">
        <header-comp class="header-comp" :headerData="footageData.hero"></header-comp>
        <div class="footage">
            <nav class="nav">
                <div class="nav__item" 
                :class="{nav__activeItem: $route.params.media === 'bg_video'}" 
                @click="selectMedia('/footage/bg_video')">bg video</div>
                
                <div class="nav__item"
                :class="{nav__activeItem: $route.params.media === 'textures'}"
                @click="selectMedia('/footage/textures')">textures</div>

                <div class="nav__item"
                :class="{nav__activeItem: $route.params.media === 'assets'}"
                @click="selectMedia('/footage/assets')">assets</div>
            </nav>
                 
                

            <form class="search" @submit.prevent="searchItems(searchData)">
                <input class="search__input" type="search" maxlength="150" placeholder="text or id number" v-model="searchData"  pattern="[a-zA-Z0-9\s]+"/>
                <!-- pattern="[a-zA-Z0-9\s]+" -->
                <button class="search__button" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                </button>
            </form>
            
            <div class="items" v-if="serverData">
                <div class="items__item" 
                    v-for="(item, index) in serverData" 
                    :key="item.id">

                    <router-link :to="{name: 'itemComp', params: {id: item.id}}" >
                        <img class="items__img" 
                        :src="`${store.serverUrl}/thumbnail/${item.id}${item.thumbnail}`" 
                        :alt="item.title" loading="lazy">
                    </router-link>
                </div>
            </div>
        </div>
        <pagination-comp class="mb" :max-pages="maxPages"></pagination-comp>
    </section>
</template> 


<script setup>
    import {ref, defineProps, watch} from 'vue';
    import HeaderComp from '../elem/HeaderComp.vue';//добавить компонент
    import PaginationComp from '../elem/PaginationComp.vue';

    import { useRoute } from 'vue-router';
    import { useRouter } from 'vue-router';
    import { useStore } from '../../stores/store';
    
    //pinia
    const store = useStore();
    
    //vueRoute
    const route = useRoute();
    const router = useRouter();



    //Данные поиска
    let searchData = ref();

    //Данные с сервера
    let serverData = ref([]);

    //Pages
    
    let maxPages = ref(0);

    const props = defineProps({
        footageData: Object
    })


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
            
            // params.text = params.text.replace(/\s+/gi, '_')
        };
        params.page = 1;
        await router.push({query:params});

        await getServerData(route.fullPath, route.params.media);
}
        
async function selectMedia(path){
    await router.push({path:path,query:{page: 1}}),
    getServerData(route.fullPath, route.params.media)
}


async function getServerData(fullPath, paramsMedia) {

   if(!route.query.search){
        if(route.query.page){
            store.currentPage = Number(route.query.page);

            let newQuery = {
                page: route.query.page
            }
           await router.replace({query:newQuery})
            
        } else{

            store.currentPage = 1;
           await router.replace({query:{page:1}});
        }

    }else {
        let key = 0;

        if(route.query.text){
            key = route.query.text.replace(/[^a-z0-9]/gi, '');
            searchData.value = route.query.text;
        }else {
            key = route.query.id;
            searchData.value = route.query.id;
        }
 
        paramsMedia += '_'+key
        
    }
    
    await store.fetchItemsData(fullPath, paramsMedia);
    serverData.value = store.pagination;
    maxPages.value = store.maxPages;
}




getServerData(route.fullPath, route.params.media);



// Отследить store.currentPage
watch( ()=> store.currentPage,async ()=>{
    await router.push({query:{page:store.currentPage}});
    serverData.value = store.pagination;
})

//Отследить page.
watch(
    ()=> route.query.page,
    ()=> {
        store.currentPage = Number(route.query.page);
    }
)

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
        padding: 4px; 
        margin: 0; 
        background-color: transparent;
        color: $textPrimeColor;
        font-size: clamp(0.7rem, 4vw, 1rem);
        // &:invalid {
        //     border: red 1px solid;
        // }
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
    .mb{
    margin-bottom: 16px;
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