<template>
    
    <section class="footage_sec" v-if="store.itemData">
       
        <div class="items" >
            <div class="hero">
                <h1 class="hero__title">{{ store.itemData.title }}</h1>
            </div>

            <div class="items__item">
                <template v-if="store.itemData.preview === '.mp4'">
                <video class="items__video"
                        controls
                        loop
                        muted
                        autoplay
                        
                        >
                    <source :src="store.itemData.path" type="video/mp4">
                </video>
                </template>
                <template v-else>
                    <img class="items__img" :src="store.itemData.path" :alt="store.itemData.title">
                </template>
            </div>
                <div class="cards">
                    <FileInfoandDow>
                        
                        <template #text>
                            {{ store.itemData.description }}
                        </template>
                       
                        <template #icon>
                            <a :href="store.itemData.download">
                                

                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.0625 21.0376C1.34429 21.0376 1.61454 21.1495 1.8138 21.3488C2.01306 21.5481 2.125 21.8183 2.125 22.1001V27.4126C2.125 27.9762 2.34888 28.5167 2.7474 28.9152C3.14591 29.3137 3.68641 29.5376 4.25 29.5376H29.75C30.3136 29.5376 30.8541 29.3137 31.2526 28.9152C31.6511 28.5167 31.875 27.9762 31.875 27.4126V22.1001C31.875 21.8183 31.9869 21.5481 32.1862 21.3488C32.3855 21.1495 32.6557 21.0376 32.9375 21.0376C33.2193 21.0376 33.4895 21.1495 33.6888 21.3488C33.8881 21.5481 34 21.8183 34 22.1001V27.4126C34 28.5398 33.5522 29.6208 32.7552 30.4178C31.9582 31.2148 30.8772 31.6626 29.75 31.6626H4.25C3.12283 31.6626 2.04183 31.2148 1.2448 30.4178C0.447767 29.6208 0 28.5398 0 27.4126V22.1001C0 21.8183 0.111942 21.5481 0.311199 21.3488C0.510456 21.1495 0.780707 21.0376 1.0625 21.0376Z" fill="white"/>
                                <path d="M16.2471 25.1898C16.3458 25.2887 16.4631 25.3672 16.5922 25.4208C16.7213 25.4743 16.8596 25.5019 16.9994 25.5019C17.1391 25.5019 17.2775 25.4743 17.4066 25.4208C17.5357 25.3672 17.6529 25.2887 17.7516 25.1898L24.1266 18.8148C24.3261 18.6152 24.4382 18.3446 24.4382 18.0625C24.4382 17.7804 24.3261 17.5098 24.1266 17.3102C23.9271 17.1107 23.6565 16.9987 23.3744 16.9987C23.0922 16.9987 22.8216 17.1107 22.6221 17.3102L18.0619 21.8726V3.1875C18.0619 2.90571 17.9499 2.63546 17.7507 2.4362C17.5514 2.23694 17.2812 2.125 16.9994 2.125C16.7176 2.125 16.4473 2.23694 16.2481 2.4362C16.0488 2.63546 15.9369 2.90571 15.9369 3.1875V21.8726L11.3766 17.3102C11.1771 17.1107 10.9065 16.9987 10.6244 16.9987C10.3422 16.9987 10.0716 17.1107 9.87214 17.3102C9.67263 17.5098 9.56055 17.7804 9.56055 18.0625C9.56055 18.3446 9.67263 18.6152 9.87214 18.8148L16.2471 25.1898Z" fill="white"/>
                                </svg>

                            </a>
                        </template>
                    </FileInfoandDow>
                    <FileInfoandDow>
                        
                        <template #text>
                            DONATE
                        </template>
                       
                        <template #icon>
                            <router-link :to="{name:'donateComp'}">
                                <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_802_430)">
                                <path d="M11 19.022C11.152 20.93 12.66 22.416 15.364 22.592V24H16.564V22.582C19.364 22.386 21 20.89 21 18.718C21 16.744 19.748 15.726 17.51 15.198L16.564 14.974V11.14C17.764 11.276 18.528 11.932 18.712 12.84H20.816C20.664 11.002 19.088 9.564 16.564 9.408V8H15.364V9.438C12.974 9.672 11.344 11.11 11.344 13.144C11.344 14.944 12.556 16.088 14.57 16.558L15.364 16.754V20.822C14.134 20.636 13.32 19.962 13.136 19.022H11ZM15.354 14.69C14.174 14.416 13.534 13.858 13.534 13.018C13.534 12.078 14.224 11.374 15.364 11.168V14.688L15.354 14.69ZM16.738 17.076C18.172 17.408 18.834 17.946 18.834 18.896C18.834 19.98 18.01 20.724 16.564 20.86V17.036L16.738 17.076Z" fill="white"/>
                                <path d="M16 30C12.287 30 8.72601 28.525 6.1005 25.8995C3.475 23.274 2 19.713 2 16C2 12.287 3.475 8.72601 6.1005 6.1005C8.72601 3.475 12.287 2 16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30ZM16 32C20.2435 32 24.3131 30.3143 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16C0 20.2435 1.68571 24.3131 4.68629 27.3137C7.68687 30.3143 11.7565 32 16 32Z" fill="white"/>
                                <path d="M16 27C13.0826 27 10.2847 25.8411 8.22183 23.7782C6.15893 21.7153 5 18.9174 5 16C5 13.0826 6.15893 10.2847 8.22183 8.22183C10.2847 6.15893 13.0826 5 16 5C18.9174 5 21.7153 6.15893 23.7782 8.22183C25.8411 10.2847 27 13.0826 27 16C27 18.9174 25.8411 21.7153 23.7782 23.7782C21.7153 25.8411 18.9174 27 16 27ZM16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C12.8174 4 9.76516 5.26428 7.51472 7.51472C5.26428 9.76516 4 12.8174 4 16C4 19.1826 5.26428 22.2348 7.51472 24.4853C9.76516 26.7357 12.8174 28 16 28Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_802_430">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </router-link>
                        </template>
                            
                    </FileInfoandDow>        
                </div>        
                
            <div class="items__btns">
                <!-- <btn-router
                    to="http://localhost:3000/download/105613.mp4"
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
                </btn-router>  -->
            </div>
                
            <div class="copy">
                <span class="copy__title">{{ store.footageData.license.title}}</span>
                <ul class ="copy__items">
                    <li class ="copy__item" 
                    v-for="item in store.footageData.license.text" 
                    :key="item.id">{{ item }}</li>
                </ul>
            </div>
        </div>
    </section>
    <LoaderComp v-else></LoaderComp>
</template> 
                            
                   
         


               

<script setup>
    import {ref} from 'vue';
    import { useRouter,useRoute } from 'vue-router'; 
    import btnComp from '../elem/BtnComp.vue';
    import BtnRouter from '../elem/BtnRouter.vue';
    import LoaderComp from '../elem/LoaderComp.vue'
    import FileInfoandDow from '../elem/fileInfoandDow.vue';

    //Pinia
    import { useStore } from '../../stores/store';
    
    const store = useStore();
    
    //Router
    const route = useRoute()


    const videoUrl = ref('http://localhost:3000/preview/1814066.mp4');
    
    
    //загрузки данных с сервера если введен url item
    if(!store.itemData) {
       store.fetchItem('bg/',route.params.id);
    }

</script>


                
                
            

                


<style lang="scss" scoped>

    .hero{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: clamp(.5rem, 8vw, 8rem);
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
    .cards{
        width: 100%;
        display: flex;
        gap:8px;
        flex-flow: row wrap;
    }
    .cards svg {
        width: 100%;
        height: 100%;
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