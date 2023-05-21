<template>

    <section class="donate">
        <header-comp class="header-comp" :headerData="contentJson.donate"></header-comp>
        <div class="content section-margin" ref="cont">
            <div class="items">
                <div class="items__item" v-for="(item, index) in contentJson.donate.items" :key="index">
                    <span class="items__title">{{ item.title }}</span>
                    <div class="items__idBox">
                        <span class="items__id">{{item.id}}</span>
                        <img class="items__icon"
                        @click="copy" 
                        src="../assets/img/icon/copy.svg" 
                        alt="copy">
                    </div>
                    <div class="items__imgBox">
                        <img class="items__img" :src="item.qr" alt="qr code">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
        
        

                            
                        


<script>
import HeaderComp from './elem/HeaderComp.vue';

    export default {
        data(){
            return{
                showCopy: false,
                messageOffsetWidth:1
            }
        },
        components: {
            HeaderComp

        },
        methods: {
            copy(e){
                // console.log(e.target.previousSibling.innerHTML)
                navigator.clipboard.writeText(e.target.previousSibling.innerHTML);
            },
                
            moveElem(elem){
                // this.showCopy = true;
                // const copyElement = this.$refs.copyElement;
                // const sourceRect = elem.getBoundingClientRect();

                // const sourceX = elem.offsetLeft;
                // const sourceY = elem.offsetTop;
                // console.log(this.messageOffsetWidth)
                // console.log(copyElement.getBoundingClientRect());
                // copyElement.style.left = sourceX - this.messageOffsetWidth + 'px';
                // copyElement.style.left = sourceX - (copyElement.offsetWidth / 2) + (elem.offsetWidth / 2) + 'px';
                // copyElement.style.top = sourceY + elem.offsetHeight + 4 + 'px';
                
                // setTimeout(()=>{this.showCopy = false},400)
            },
            appendElem(e){
                // console.log(11111)
                // const target = this.$refs.cont;
                // this.showMessage(target)
            },
            showMessage(elem){
                // const message = document.createElement('span');
                // message.innerHTML = '123456789';
                // message.classList.add('copyText');
                
                // elem.append(message);
                // setTimeout(() => {
                //     message.remove();
                // }, 500);

            }
        },
        mounted() {
            // this.messageOffsetWidth = this.$refs.copyElement.offsetWidth / 2;
            // const copyElement = this.$refs.copyElement;

            // const resize = new ResizeObserver(entries => {
            //     for(const entry of entries) {
            //         console.log(entry)
            //     }
            // })
            // resize.observe(copyElement);
        },

        props: {
            contentJson:'json'
        }
    }
</script>

<style lang="scss" scoped>
.donate{

}
.copyText{
    position: absolute;
    color: white;
    border: 1px solid white;
}

.content{
    display: flex;
    justify-content: center;
    position: relative;
}

    .items{
        color: $textPrimeColor;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: clamp(3rem, 5vw, 5rem);
        &__icon{
            &:hover{
                opacity: .7;
            }
        }
        &__title{
            font-size: clamp(1rem, 5vw, 2rem);
            text-transform: uppercase;
            font-weight: 500;
            
        }
        &__idBox {
            background-color: black;
            padding: clamp(.2rem, 4vw, 1rem);
            border-radius: 16px;
            display: flex;
            align-items: center;
            flex-direction: row;
            gap: clamp(.5rem, 4vw, 1rem);
        }
        &__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid white;
            padding: clamp(1rem, 5vw, 2rem);
            border-radius: 30px;
            gap: clamp(1rem, 5vw, 2rem);
        }

        &__imgBox {
            max-width: 200px;
            padding: 8px;
            background: white;
            border-radius: 16px;
        }
            
        &__img {
            display: block;
            width: 100%;
        }

        &__icon {
            max-width: clamp(1rem, 5vw, 2rem);
            cursor: pointer;
        }

        &__id {
            font-size: clamp(.3rem, 2.5vw, 1rem);
        }
    }
            


</style>