<template>
    <hero-comp :contentJson="contentJson"/>
    <contant-comp :contentJson="contentJson"/>
    <social-comp :socialDataJson="socialDataJson"/>
</template>

<script>
    import HeroComp from './home/HeroComp.vue';
    import ContantComp from './home/ContantComp.vue';
    import SocialComp from './home/SocialComp.vue';

    // import socialDataJson from '../../socialData/socialData.json';
    // import contantJson from '../../CyberiSityCont/cyberSity.json';


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