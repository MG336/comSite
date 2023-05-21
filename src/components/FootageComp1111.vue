<template>
    <!-- <router-view></router-view> -->
    <!-- <items-comp :footageData="footageData"/> -->
    <!-- <item-comp :footageData="footageData" :itemId="1"/> -->
</template> 

<script>
import footageData from "../../cyberiSityCont/footageData.json";

import ItemsComp from "./footageComp/ItemsComp.vue";
import ItemComp from "./footageComp/ItemComp.vue"
    export default {
        data(){
            return {
                footageData: footageData
            }
        },
        props:{
            // footageData:"json"
        },
        components:{
            ItemsComp,
            ItemComp
        }
    }
</script>

<style lang="scss" scoped>

</style>