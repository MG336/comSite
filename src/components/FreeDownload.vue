<template>
    <section class="f-dow">
        <div class="gridItems">
            <div class="gridItems__item gridItems__item--title">
                <h2>{{ contantJson.freeDownload.title }}</h2>
                <h3 class="gridItems__p">{{ contantJson.freeDownload.subtitle }}</h3>
            </div>
            <div class="gridItems__item gridItems__item--video">
                <video class="gridItems__video" 
                    :src="contantJson.freeDownload.video" 
                    alt="free download"
                    controls
                    :poster="contantJson.freeDownload.poster"
                    >
                </video>
                <a class="btn btn--dow" :href="contantJson.freeDownload.download" download>Download</a>
            </div>
            
        </div>
                        
        
        <div class="f-dow__bg" 
            :style="{
                    backgroundImage: 'url(' + contantJson.freeDownload.bgUrl + ')',
                    opacity: contantJson.freeDownload.opacityBg
                }"
        ></div>
        
    </section>

                    


</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        contantJson:"json",
    }
}
</script>

<style lang="scss" scoped>
    .f-dow {
        display: flex;
        justify-content: center;
        padding: calc($index*10) 16px;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        z-index: 0;

        &__bg {
            top: 0;
            left: 0;
            position: absolute;
            height: 100%;
            width: 100%;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            z-index: 0;
        }
    }

    .gridItems{
        max-width: $containerWidth;
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: calc($index*4) 32px;
        position: relative;
        z-index: 3;
        opacity: 1;
        padding: 0 16px;

        &__video{
            width: 100%;
        }

        &__item{
            align-items: flex-end;
            
            gap: 16px;
            display: flex;
            flex-direction: column;

            &--title {
                align-items: center;
                text-align: center;
                gap: 16px;
            }
        }


        &__textBtn{
            display: flex;
            gap: 32px;
            flex-direction: column;
        }
    }
    .btn {
        &--dow{
            background-color: rgb(104, 104, 104,0);
            border: 1px solid white;
            color: white;
            font-weight: 400;
        }
        
    }
    @media (max-width: 800px){
        .gridItems{
            grid-template-columns:1fr;
            &__item{
            &--title {
                grid-column: 1;
            }
        }
        }
    }
</style>