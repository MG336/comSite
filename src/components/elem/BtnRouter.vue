<template>
    <a v-if="download" class="btn1" :href="to" :style="style" download>
        <slot></slot>
    </a>

    <router-link v-else :to="to" class="btn1" :style="style">
        <slot></slot>
    </router-link>

    <!-- <a class="btn1 btn--donate" :href="href" :style="style" :download="download">{{text}}</a>   -->
</template>
<!-- <router-link class="items__link" :to="{name: item.nameComp, params:item.params}"></router-link> -->
<script>
export default {
    name: 'BtnComp',
    data(){
        return {
        }
    },


    props:{
        to:{
            type:[String, Object],
            default:'#'
        },
        maxWidth:{
            type: String,
            default: "282"
        },
        color: {
            type: String,
            default: 'white'
        },
        textColor: {
            type: String,
            default: 'white'
        },
        download: {
            type: [String,Boolean],
            default: null
        },
        border: {
            type: Boolean,
            default: true
        }
    },
    computed:{
        style(){
            if(this.border){
                return {
                    backgroundColor: 'transparent',
                    color: this.textColor,
                    border:`1px solid ${this.color}`,
                    maxWidth: this.maxWidth
                    }
            } else {
                return {
                    backgroundColor: this.color,
                    color: this.textColor,
                    border:"none",
                    maxWidth: this.maxWidth
                }
            }
        }
    },          
    methods: {
        
    },
    
}
</script>
                
         

                
<style lang="scss" scoped>

.textBtn {
    display: flex;
    gap: 32px;
    flex-direction: column;
}

.btn1 {
    // border: 1px solid white;

    display: block;
    border: 1px solid;
    font-size: clamp(.5rem, 4vw, 1.4rem);
    text-align: center; 
    font-family: "inter-c";
    text-transform: uppercase; 
    padding: clamp(.5rem, 4vw, 1rem);
    font-weight: 500;
    cursor: pointer;
    width: 100%;
    &:hover{
        opacity: .7;
    }
}           
</style>