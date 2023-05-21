<template>
    <section class="not-found">
        <div class="cont-box">
            <h1 class="cont-box__title">404</h1>
            <p class="cont-box__text">Sorry, the requested page could not be found.</p>
            <router-link class="cont-box__link" to="/">Go to Home Page</router-link>
        </div>
    </section>
</template>
<script>

</script>
<style lang="scss" scoped>
    .not-found{
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        flex-direction: column;
        min-height: 100%;
        flex-grow: 1;
        width: 100%;
        max-height: 100%;

    }
    .cont-box{

        display: flex;
        flex-direction: column;
        align-items: center;
        // line-height: 1.2rem;
        gap: clamp(1rem, 2vw, 4rem);
        padding: clamp(8px, 2vw, 16px);
        
        &__title{
            font-size: clamp(5rem, 20vw, 10rem);
        }
        &__link{
            color: $link;
        }
        &__text{
            text-align: center;

        }
    }
</style>
            

     
        
        
            