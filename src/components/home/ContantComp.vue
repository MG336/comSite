<template>
    <section class="content">
            <div class="grid">
                <template v-for="(item, index) in  contentJson.content.items" :key="index">
                    <div class="items">
                        <div class="items__imgBox">
                            <img class="items__img" :src="item.url" :alt="item.title" loading="lazy">
                        </div>

                        <div class="items__textBox">
                            <div class="items__text">
                                <h3 class="items__h2">{{item.title}}</h3>
                                <router-link class="items__link" :to="{name: item.nameComp, params:item.params}">
                                    Learn more
                                </router-link>
                            </div>
                        </div> 
                    </div>
                </template>
            </div>
        </section>
            
</template>

<script>
export default {
    data(){
        return {
            images: [],
            items: [
            {
                title: 'High-tech Corporations Headquarters',
                text: 'The headquarters of the corporations are magnificent structures of steel and glass, showcasing the grandeur of the technological revolution. However, beneath their gleaming exteriors lies a labyrinth of deceit and manipulation, as the corporations use their power to control the lives of the people.',
    
            },
            {
                title: 'First Item2',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit123123123.',
       
            },
            {
                title: 'First Item3',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit123123123.',

            }
        ],
        }
    },
    props: {
        contentJson: 'json'
    },
    methods: {
        // getImageUrl(filename){
        //     return require(`../assets/img/content/${filename}`);
        // }
    },

}
</script>
    
  



<style lang="scss" scoped>
$textBoxColor: #404040;
.grid {
    display: flex;
    // gap: 8px;
    flex-direction: column;
    background-color: $color1;
}
    .items {
        display: flex;
        gap: 8px;

        &__imgBox{
            flex-basis: 60%;
        }
        
        &__img{
            width: 100%;
            display: block;
        }
        &__textBox {
            flex-grow: 1;
            padding: 16px;
            flex-basis: 40%;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: calc($index*8);
        }
        &__text{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: calc($index * .4);
            width: 70%;
            text-align: center;
            
        }
        &__h2{
            font-size: clamp(1rem,3vw,2rem);
            font-weight: 900;
            line-height: 95%;
            white-space: pre-wrap;
        }
            
        &__p{
            display: block;
        }
        &__link{
            font-size: clamp(.5rem, 3vw, 1.4rem);
            text-decoration: underline;
            color: white;
            text-transform: uppercase;
            font-weight: 400;
            opacity: .8;
            &:hover{
                opacity: 1;
            }
        }
    }

    .items:nth-child(even){
        flex-direction: row-reverse;
    }
    
    @media (max-width: 1000px){
        .items {
            flex-direction:column !important;
        }
    }
            
                
        
       
            






        


</style>