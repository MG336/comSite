import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
const pinia = createPinia();

import LoaderComp from './components/elem/LoaderComp.vue';

const app = createApp(App);
app.use(router);
app.use(pinia);
app.component('loader-comp',LoaderComp);//Добавить компонент для всех
app.mount('#app')

// const routes = [
//     {
//       path: '/',
//       component: HomeComp,
//       props: {
//         socialDataJson: socialDataJson,
//         contantJson: contantJson
//       }
//     },
//     {
//       path: '/about',
//       component: AboutComp
//     }
//   ]