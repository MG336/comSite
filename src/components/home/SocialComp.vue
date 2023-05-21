<template>
    <section class="social">
        <div class="socialBox">
            <div class="socialBox__text">
                <!-- <a class="socialBox__site" :href="socialDataJson.site.url" target="_blank">{{ socialDataJson.site.name }}</a> -->
                <div class="socialBox__emailBox">
                    <a class="socialBox__email" :href="'mailto:' + socialDataJson.email.text">{{socialDataJson.email.text}}</a>
                </div>
                
                
            </div>
            <div class="socialBox__items">
                <a class="socialBox__item" v-for="item in socialDataJson.socialNetwork" :style="{backgroundImage:`url(${item.url})`}" :href="item.link"></a>
            </div>
        </div>
    </section>
</template>

        
                
          
       

<script>
export default {
    name: 'SocialComp',
    data(){
        return {
        }
    },
    props:{
        socialDataJson: "json"
    },
    methods: {
        copyEmailAddress(){
            navigator.clipboard.writeText(this.socialDataJson.email.text);
        }
    },
}



</script>

<style lang="scss" scoped>
    .social {
        background-color: rgb(34, 34, 34);
        padding: 0 16px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        // min-height: 480px;
        height: clamp(156px, 20vw, 356px);

    }
    .socialBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // gap: 32px;
        gap: clamp(4px,4vw,16px);
        &__text{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
        }
        &__items {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: clamp(.5rem, 3vw, 1rem);
            justify-content: center;

        }

        &__item {
            width: clamp(30px, 5vw, 40px);
            height: clamp(30px, 5vw, 40px);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            opacity: 0.5;
            fill: rgb(255, 247, 0);
            &:hover{
                opacity: .8;
            }
        }
        &__site {
            font-size: clamp(1rem, 5vw, 2rem);
            font-family: "inter-c";
            font-weight: 400;
            text-transform: uppercase;
            color: rgb(255, 255, 255);
            opacity: .8;
            text-decoration: underline;
        }

        &__email {
            font-size: clamp(1rem, 5vw, 2rem);
            font-family: "inter-c";
            font-weight: 400;
            text-transform: uppercase;
            color: rgb(255, 255, 255);
            opacity: .8;
        }
        &__emailBox{
            display: flex;
            gap: clamp(0.5rem, 3vw, 1rem);
            align-items: center;
        }
        &__emailIcon {
            width: clamp(1.4rem, 5vw, 2rem);
            height: clamp(1.4rem, 5vw, 2rem);
            background-image: url("../assets/img/icon/copy.svg");
            background-size: cover;
            background-position: center;
            cursor: pointer;
            opacity: .6;
            &:active{
                opacity: .3;
            }

        }
    }   
</style>
