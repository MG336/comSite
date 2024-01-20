<!-- <template></template>
<script setup>
    import {ref, computed, onMounted, watch, onCreated} from 'vue'
    import {useStore} from '../stores/store.js';

    const store = useStore()
    store.increment
    store.doubleCount
    store.count++
    console.log(store.count)
    store.fetchData

    onMounted(()=>{
        store.fetchData()
    })

    watch(
        ()=> store.data,
        (newValue) => {
            console.log('newValue',newValue)
            sessionStorage.setItem('bg', JSON.stringify(newValue));
        }
    );
            


</script>
<style lang="scss">

</style> -->