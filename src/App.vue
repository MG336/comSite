<template>
  <div class="wrapper">
    <nav-bar :contentJson="contentJson"/>
    <main class="contant">
      <!-- <footage-comp/> -->
         <router-view/>
    </main>
    <footer-comp :socialDataJson="socialDataJson"/>
  </div>
 
  <!-- <home-comp :socialDataJson="socialDataJson" :contantJson="contantJson"></home-comp>
   -->
  

</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';

import socialDataJson from '../socialData/socialData.json';
import contentJson from '../cyberiSityCont/contentJson.json';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp,
    // HomeComp,
    // FootageComp
  },
  data(){
    return {
      socialDataJson: socialDataJson,
      contentJson: contentJson,
    }
  },

  // async created(){
  //   console.log('sd',dataJson)
  //       const response = await fetch('https://mg1010.com/socialData/socialData.json');
  //       const data = await response.json();
  //       this.data = data

  //       console.log(data);

  // }

//   fetch("https://mg1010.com/socialData/socialData.json")
//   .then(response => response.json())
//   .then(data => {
//   })
//   .catch(error => console.error(error));

//     export default {
//     data() {
//         return {
            
//         }
//     },
//     props: {
//         socialDataJson:"json"
//     },
// }

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


// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }


</style>
