<template>
    <!-- <loader-comp></loader-comp> -->
    <hero-comp :contentJson="contentJson"/>
    <contant-comp :contentJson="contentJson"/>
    <social-comp :socialDataJson="socialDataJson"/>
</template>

<script>
    import HeroComp from './home/HeroComp.vue';
    import ContantComp from './home/ContantComp.vue';
    import SocialComp from './home/SocialComp.vue';

    export default {   
        name: 'App',
        components: {
            HeroComp,
            ContantComp,
            SocialComp,
        },
        data(){
            return {

            }
        },
        props:{
            contentJson:"json",
            socialDataJson:"json"
        },
        created() {
            console.log(this.contantJson)
        },

    }

</script>