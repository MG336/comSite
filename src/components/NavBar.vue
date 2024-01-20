<template>
      <!-- Привезать панель навагации 
      Добавить карзину
      Добавить список покупок
      Переместить пункты в лево 
      После перезагрузки снова баг с Log out
    -->
    <div class="navbar">
    <router-link to="/">
      <img class="navbar__logo" :src="contentJson.navBar.logo">
    </router-link>
      <div class="navbar__menu" @click="toggleMenu">
            <div class="navbar__icon"></div>
            <div class="navbar__icon"></div>
            <div class="navbar__icon"></div>
      </div>
        
      <div class="navbar__links" :class="{'navbar__links--active': showMenu}">
        <!-- <a href="#" v-for="(item, index) in contantJson.navBar.links" key="index">{{ item }}</a> -->
        <router-link
            @click="showMenu? showMenu = false : undefined"
            v-for="(item, index) in contentJson.navBar.comps" :key="index"
            :to="{name: item.compName, params: item.params}"
            >{{ item.name }}
        </router-link>
        <router-link v-if="!isAuth"
            @click="showMenu? showMenu = false : undefined"
            v-for="(item, index) in contentJson.navBar.noAuth" :key="index"
            :to="{name: item.compName, params: item.params}"
            >{{ item.name }}
        </router-link>    
        <!-- <router-link v-if="!isAuth"
            @click="showMenu? showMenu = false : undefined"
            v-for="(item, index) in contentJson.navBar.auth" :key="index"
            :to="{name: item.compName, params: item.params}"
            >{{ item.name }}
        </router-link> -->
        <router-link 
            v-if="isAuth"
            @click="[
              () => showMenu? showMenu = false : undefined,
              store.logOut()
            ]"
            to="/"
            >Log Out
          </router-link>
      </div>
    </div>
  </template>
  <script setup>
    import {defineProps, ref, watch } from 'vue';
    import {useStore} from '../stores/store';
    import setting from '../../content/json/settings.json'
    const token = localStorage.getItem('accessToken');
    const store = useStore();

    let showMenu = ref(false);
    let isAuth = ref(store.isAuth());

    function toggleMenu() {
        showMenu.value = !showMenu.value;
    }

    const {contentJson} = defineProps(['contentJson']);
    console.log('navBar')
    //Отслеживаем токен
    watch (
      () => store.authToken,
      () => {
        isAuth.value = store.isAuth();
      }
    )
    // const response = await store.checkToken(setting.serverUrl+'/check-token');
    // console.log(response);

  </script>

  
  <style lang="scss" scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #000000;
    color: #fff;
    height: 52px;
    position: relative;
    z-index: 4;
    &__logo{
        width: 100%;
        max-width: 36px;
        font-size: 24px;
        display: block;
    }
    &__menu{
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    &__icon{
        width: 20px;
        height: 2px;
        background-color: #fff;
    }
    &__links{
        display: none;
        &--active {
            display: flex;
            flex-direction: column;
            background-color: #222;
            position: absolute;
            top: 50px;
            right: 0;
            left: 0;
            z-index: 3;
        }
    }

  }
  

  .navbar__links a {
    color: #fff;
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #666;
  }
  
  @media (min-width: 768px) {
    .navbar__menu {
      display: none;
    }
  
    .navbar__links {
      display: flex;
      align-items: center;
    }
  
    .navbar__links a {
      border-bottom: none;
      margin-right: 20px;
    }
  }
  </style>