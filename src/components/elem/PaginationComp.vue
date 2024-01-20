
<script setup>
    import {useStore} from '../../stores/store';
    // import {useRouter, useRoute } from 'vue-router';
    import {defineProps} from 'vue';
    
    
const store = useStore();
const props = defineProps(['maxPages']);



    function next(){
        store.currentPage < store.maxPages? store.currentPage += 1 : null;
    }
        

    function prev(){
        store.currentPage > 1? store.currentPage -= 1 : null;
    }
    

   
</script>

<template>

    <div class="pagination">
        <span class="pagination__nav" @click="prev()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
        </span>
        <input class="pagination__input" type="number" min="1" :max="props.maxPages" v-model="store.currentPage">
        <span class="pagination__pages"> {{`of ${props.maxPages} pages`}}</span>
        <span class="pagination__nav"  @click="next()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </span>
    </div>
          
</template>
    

<style lang="scss">
    
    .h1 {
        color: white;
    }

    .link {
        display: block;
    }
    .pagination {
        display: flex;
        align-items: center;
        gap: 4px;
        justify-content: center;
        user-select: none;

        &__input {
            height: 32px;
            width: 40px;   
            outline: none;
            border: none; 
            text-align: center;
        }
        &__pages {
            color: white;
        }
        &__nav {
            color: white;
            display: flex;
            border: 1px solid white;
            padding: 8px;
            margin: 0 8px;
            cursor: pointer;
            
        }
    }   
        
</style>