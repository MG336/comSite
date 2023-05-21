<template>
    <a class="btn1 btn--donate" :href="href" :style="style" :download="download">{{text}}</a>  
</template>
<script>
export default {
    data(){
        return {

        }
    },
    props: {
        color:String,
        textColor:String,
        href:String,
        text:String,
        border:Boolean,
        maxWidth:String,
        download:Boolean,
        maxWidth:String
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
            } else{
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