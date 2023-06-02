<template>
    <footer class="footer">
        <div class="footer__box">
            <span class="footer__copy">©{{new Date().getFullYear()}} {{ socialDataJson.copy.text }}. All rights reserved.</span>
        </div>
    </footer>
            
</template>
<script>
    export default {
    data() {
        return {
            
        }
    },
    props: {
        socialDataJson:"json"
    },
}
</script>

<style lang="scss" scoped>
    .footer{
        // margin-top: clamp(4rem, 8vw, 10rem);
        border-top: 1px solid rgb(74, 74, 74);
        min-height: clamp(8rem, 12vw, 30rem);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        &__box{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__copy{
            color: $textPrimeColor;
            font-family: inter-c;
            font-size:.8rem;
            text-align: center;
            color: white;
        }
        &__link{
            color: white;
            text-decoration: underline;
        }
    }
</style>