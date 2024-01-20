<template>
<div class="fileInfo">
    <div class="fileInfo__text">
        <p class="fileInfo__text">
            <slot name="text"></slot>
        </p>
    </div>
    <div class="fileInfo__icon">
        <slot name="icon"></slot>
    </div>
    
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.fileInfo {
    color: $textPrimeColor;

    width: 100%;
    display: flex;
    justify-content: space-between;
    // height: 100%;
    // height: 72px;
    align-items: center;
    padding: 4px 16px ;
    background-color: $color2;
    // display: grid;
    // grid-template-columns: 1fr .1fr;
    gap: 16px;
    text-transform: uppercase;
    &__text{
        // font-size: ;

        
    }
    &__icon{
        // border: 1px solid white;
        padding: 4px;
        cursor: pointer;
        width: clamp(35px,5vw,40px);
        flex-shrink: 0;

        // border: 1px solid white;

    }
    
}
</style>