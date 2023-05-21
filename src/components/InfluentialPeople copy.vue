<template>
    <section class="i-people">
        <div class="i-people__cont">
            <h2 class="">{{ contantJson.influentialPeople.title }}</h2>

            <div class="i-people__items" @touchstart="onTauchStart" touchMove="onTouchMove" @touchend="onTouchEnd">
                <div class="i-people__item " v-for="(item,index) in items" :key="index" v-show="index === currentIndex">
                    <img class="i-people__img" :src="item.imgUrl" alt="item.title">
                    <div class="i-people__textBox">
                        <span class="i-people__title">{{ item.title }}</span>
                        <p class="i-people__text">{{ item.text }}</p>
                    </div>
                </div>
            </div>
            <div class="controls">
                <div class="controls__prev " @click="prevCard" ></div>
                <div class="controls__next" @click="nextCard" ></div>
            </div>
        </div>
    </section>
</template>

     
        


<script>
    export default {
    name: "InfluentialPeople",
    data() {
        return {
            items: this.contantJson.influentialPeople.items,
            currentIndex: 0,
            touchStartX: null,
            touchEndX: null
        };
    },
    methods: {
        prevCard() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
            else {
                this.currentIndex = this.items.length - 1;
            }
        },
        nextCard() {
            if (this.currentIndex < this.items.length - 1) {
                this.currentIndex++;
            }
            else {
                this.currentIndex = 0;
            }
        },
        onTouchStart(event) {
            this.touchStartX = event.touches[0].clientX;
        },
        onTouchMove(event) {
            this.touchEndX = event.touches[0].clientX;
        },
        onTouchEnd() {
            if (this.touchEndX - this.touchStartX > 50) {
                this.previousCard();
            }
            else if (this.touchStartX - this.touchEndX > 50) {
                this.nextCard();
            }
            this.touchStartX = null;
            this.touchEndX = null;
        }
    },
    props: {
        contantJson: "json"
    },
    created() {
        console.log(this.items);
    },
}
</script>

<style lang="scss" scoped>
img {
    display: block;
}
    .i-people{
        padding: 80px 0;
        width: 100vw;
        display: flex;
        align-items: center;
        border: 1px solid white;
        position: relative;
        border: 1px solid white;
        justify-content: center;
        gap: 32px;


        &__items{
        display: flex;
        flex-direction: row;
        gap: 8px;
        top: 90px;
        left: 0;


        border: 1px solid white;
        align-items: center;
        justify-content: center;
        }   
      
        &__cont{
            display: flex;
            border: 1px solid white;
            flex-direction: column;
            align-items: center;
            gap:24px;
        }
        &__textBox{
            // margin-top: 16px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            border: 1px solid white;
        }
        &__img{
            width: 100%;
        }

            
        &__item{
            border: 1px solid white;
            display: flex;
            max-width: 800px;
            gap: 16px;
        }
 
        &__title{
            font-size: clamp(1rem, 4vw, 1.2rem);
            color: $textPrimeColor;
            text-transform: uppercase;
            font-weight: 900;
        }
        
    }
    .controls{
        // position: absolute;
        border: 1px solid white;
        max-width: 120px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: white;
        
        &__prev{
            // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M3 3h18v18H3z'/%3E%3C/svg%3E");
            background-image: url("../assets/img/icon/chevron-left.svg");
            
        }
        &__next{
            // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M3 3h18v18H3z'/%3E%3C/svg%3E");
            background-image: url("../assets/img/icon/chevron-right.svg");
        }
    }
    .controls div{
        background-size: cover;
        width: 32px;
        height: 32px;
        fill: white;
        cursor: pointer;

    }
    @media (max-width: 800px){
        .i-people{
            &__item{
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>