<template>
    <section class="i-people">
        
            <!-- <h2 class="i-people__title">{{ contantJson.influentialPeople.title}}</h2> -->
        <div class="i-people__cont">
            <h2 class="i-people__title">{{ contantJson.influentialPeople.title }}</h2>
                <div class="i-people__items">
                    <div class="i-people__item " v-for="(item,index) in items" :key="index" loading="lazy">
                        <img class="i-people__img" :src="item.imgUrl" alt="item.title">
                        <div class="i-people__textBox">
                            <span class="i-people__textTitle">{{ item.title }}</span>
                            <p class="i-people__text">{{ item.text }}</p>
                        </div>
                    </div>
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
        };
    },
    props: {
        contantJson: "json"
    },
}
</script>

<style lang="scss" scoped>
img {
    display: block;
}
    .i-people{
        padding: calc($index*10) 16px 24px;
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
        gap: 32px;
        background-color: $color2;
        &__title{
            text-transform: uppercase;
        }
        &__cont{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: calc($index*4) 0;
        }

        &__items{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap:16px;
        }
        &__textBox{
            // margin-top: 16px;
            display: flex;
            flex-direction: column;
            gap: 8px;

        }
        &__img{
            width: 100%;
        }

            
        &__item{

            display: flex;
            gap: 16px;
            flex-direction: column;
        }
 
        &__textTitle{
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
    @media (max-width: 768px){
        .i-people{
            &__items{
                grid-template-columns: repeat(2, 1fr);

            }
        }
    }
    @media (max-width: 575px){
        .i-people{
            &__items{
                grid-template-columns: repeat(1, 1fr);

            }
        }
    }
</style>