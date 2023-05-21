import { createApp } from 'vue'
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);

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