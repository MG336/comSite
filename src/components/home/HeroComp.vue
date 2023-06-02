<template>
    <section class="parallax-sec">

        <div class="con-box">
            <div class="text">
                <h1 class="text__h1">{{contentJson.hero.title[num]}}</h1>
            </div>
            <video
                class="con-box__video"   
                :src="contentJson.hero.video" 
                alt = "free download"
                controls
                :poster="contentJson.hero.poster"
                loading="lazy"
                >
            </video>
        </div>

        
        <div class="parallax-sec__bg" 
        :style="{
                backgroundImage: 'url(' + contentJson.hero.img + ')',
                opacity: contentJson.hero.opacityBg
            }"
        
        ></div>
    </section>
</template>

<script>
 export default{
    data(){
        return {
            num: 0,
            title: this.contentJson.hero.title
        }
    },
    props: {
        contentJson: "json"
    },
methods: {
    changeText() {
      setInterval(() => {
        if (this.num < this.title.length - 1) {
          this.num += 1;
        } else {
          this.num = 0;
        }
      }, 1500);
    },
},

created() {
    this.changeText();
}

 }
</script>

<style lang="scss" scoped>

.parallax-sec {

    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: no-repeat center / cover ;
    background-color: black; 
    background-size: cover;
    background-attachment: fixed;
    position: relative;

    &__box{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid white;
    }
        
        
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
    
    
.con-box {
    max-width: clamp(16px, 90vw, 95vw);
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 0.7fr 1fr;
    // gap: clamp(.4rem, 2vw, 1rem);
    justify-content: flex-start;
    // padding: 0 16px;
    position: relative;
    z-index: 2;
    // border: 1px solid white;
    padding-bottom: clamp(16px,10vw,32px);
    &__video{
        width: 100%;

    }
}

.text{
    // border: 1px solid rgb(255, 255, 255,.3);
    // gap: $index 0;
    // align-items: flex-end;
    display: flex;
    height: 100%;
    color: $textPrimeColor;
    // background-color: rgb(0, 0, 0,.4);
    border: 1.4px solid rgb(0, 0, 0);
    border-right: none;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    &__h1{
        font-family: inter-c;
        font-weight: 900;
        font-size: clamp(1.4rem, 4vw, 8rem);
        text-transform: uppercase;
        word-wrap: break-word;
        // border: 1px solid red;
        text-align: center;
        line-height: 90%;
        color: rgb(255, 255, 255);
    }
        
    &__h2 {
        font-family: inter-c;
        font-weight: 900;
        text-transform: uppercase;
        font-size: calc($index * 2.2);
        line-height: 90.02%;
    }
}

@media (max-width: 768px){
    .parallax-sec{
        height: 90vh;
        align-items:center;

    }
        .con-box{
            // grid-template-columns: 1fr 1fr;
            grid-template-columns: 1fr;
            grid-template-rows: 0.7fr 1fr;
            max-width: 100%;
            // margin-bottom: calc($index*20);
            align-items: stretch;
            justify-items: stretch;
            // gap: 16px;
        }
        .text {
            // &__h1{
            //     font-size: calc($index * 4) ;
            // }
            
             
            // height: calc($index*8);
            border: none;
        }
    }


</style>