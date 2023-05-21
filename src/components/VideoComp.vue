<template>
    <section class="video-sec">
        <div class="video-sec__con">
            <div class="video-sec__box">
                
                <video class="video-sec__video" :src="contantJson.videoComp.videoUrl" 
                    controls 
                    :poster="contantJson.videoComp.poster"
                    >
                </video>
            
                <h2 class="video-sec__h2">
                    {{ contantJson.videoComp.title }}
                </h2>
                    
                <p class="video-sec__p">
                    {{ contantJson.videoComp.text }}
                </p>
            </div>
        </div>
        <div class="video-sec__bg" 
        :style="{
                backgroundImage: 'url(' + contantJson.videoComp.bgUrl + ')',
                opacity: contantJson.videoComp.opacityBg
            }"
        
        ></div>
    </section>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    props:{
        contantJson:"json"
    },
}
</script>
<style lang="scss" scoped>
    
    .video-sec {
        display: flex;
        justify-content: center;

        padding: calc($index*10) 0;
        position: relative;
        background-color: black;
        
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
        &__con {
            max-width: $containerWidth;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 0 16px;
            position: relative;
            z-index: 2;
        }
        &__box {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: clamp(1.3rem, 5vh, 1.5rem)  0;
        }
        &__p {
            max-width: calc($index * 30);
        }

        &__video {
            width: 100%;
            height: 100%;
            margin-bottom: 8px;
        } 
    }
       
    
</style>