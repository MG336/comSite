import { createRouter, createWebHistory } from "vue-router";

//comps
// import FootageComp from './components/FootageComp.vue';
import ItemsComp from './components/footageComp/ItemsComp.vue';
import ItemComp from './components/footageComp/ItemComp.vue';
import HomeComp from './components/HomeComp.vue';
import MotionGraphics from './components/motionGraphics/MotionGraphics.vue';
import DonateComp from './components/DonateComp.vue';
import AboutComp from './components/AboutComp.vue';
import NotFound from './components/NotFound.vue'

//data json
import footageDataJson from "../cyberiSityCont/footageData.json";
import contentJson from "../cyberiSityCont/contentJson.json";
import socialDataJson from "../socialData/socialData.json";
import motionGraphicJson from "../cyberiSityCont/motionGraphics.json";
// contantJson:"json",
// socialDataJson:"json"

const routes = [
    {
        path:'/donate',
        name:'donateComp',
        component: DonateComp,
        props: {
            contentJson:contentJson,
        }
    },
    {
        path:'/',
        name:'homeComp',
        component:HomeComp,
        props: {
            contentJson:contentJson,
            socialDataJson:socialDataJson
        }
    },
    {
        path: '/footage/:media', 
        component: ItemsComp,
        name:'itemsComp',
        props:{
            footageData: footageDataJson
        },
    },
    {
        path: '/footage/:media/:id', 
        name:'itemComp',
        component: ItemComp,
        props:{
            footageData: footageDataJson,
        },
    },
    {
        path:'/motion-graphics',
        name:'motionGraphics',
        component: MotionGraphics,
        props: {
            motionGraphic: motionGraphicJson
        }
    },
    {
        path:'/about',
        name:'aboutComp',
        component: AboutComp,
        props:{
            aboutData:contentJson.about
        }
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound
    },
    {
        path: '/404',
        component: NotFound
    },
    
     // redirect
     {
        path: '/footage/:media', 
        redirect: to => {
            if(!['video','textures','assets'].find(item => item === to.params.media)){
                console.log(to.params.media)
                return '/404'
            }else {
                return {
                    name: 'itemsComp'
                }
            }
        },
    },

    {
        path: '/footage/:media/:id', 
        redirect: to => {
            if(!['video','textures','assets'].find(item => item === to.params.media)){
                console.log(to.params.media)
                return '/404'
            }else {
                return {
                    name: 'itemComp'
                }
            }
        },
    },
    {
        path:'/footage',
        redirect: '/footage/video'
    },
]


const router = createRouter(
    {
    history: createWebHistory(),
    routes,
    }
)

export default router