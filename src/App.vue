<template>

  <div class="wrapper">
    <nav-bar :contentJson="contentJson"/>
    <main class="contant">
         <router-view/>
         <!-- <test-pinia></test-pinia> -->
    </main>

    <footer-comp :socialDataJson="socialDataJson"/>
  </div>

</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';
// import TestPinia from './components/TestPinia.vue';
import socialDataJson from '../socialData/socialData.json';
import contentJson from '../content/json/contentJson.json';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp,
    // TestPinia
},
  data(){
    return {
      socialDataJson: socialDataJson,
      contentJson: contentJson,
    }
  },

}
</script>

<style lang="scss">
.wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  
}
.contant {
    flex-grow: 1;
    background-color: black;
    display: flex;
    flex-direction: column;
    
}

</style>
