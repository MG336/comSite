import { createRouter, createWebHistory } from "vue-router";

//comps
// import FootageComp from './components/FootageComp.vue';
import ItemsComp from './components/footageComp/ItemsComp.vue';
import ItemComp from './components/footageComp/ItemComp.vue';
import HomeComp from './components/HomeComp.vue';
import MotionGraphics from './components/motionGraphics/MotionGraphics.vue';
import DonateComp from './components/DonateComp.vue';
import AboutComp from './components/AboutComp.vue';
import NotFound from './components/NotFound.vue';

//authorization
import Login from './components/authorization/Login.vue';
import ForgotPassword from './components/authorization/ForgotPassword.vue';
import PasswordRecovery from './components/authorization/UpdatePassword.vue';
import SignUp from './components/authorization/SignUp.vue';
import EmailVerified from './components/authorization/EmailVerified.vue'
import EmailNotVerified from './components/authorization/EmailNotVerified.vue'

//data json
import footageDataJson from "../content/json/footageData.json";
import contentJson from "../content/json/contentJson.json";
import socialDataJson from "../socialData/socialData.json";
import motionGraphicJson from "../content/json/motionGraphics.json";


// contantJson:"json",
// socialDataJson:"json"

//DB


const routes = [
    {
        path:'/donate',
        name:'donateComp',
        component: DonateComp,
        props: {
            socialData:socialDataJson,
        }
    },
    {
        path:'/',
        name:'homeComp',
        component:HomeComp,
        props: {
            contentJson: contentJson,
            socialDataJson: socialDataJson
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

    //Authorization
    {
        path:'/log-in',
        name:'login',
        component: Login
    },
    {
        path:'/forgot-password',
        name:'forgotPassword',
        component: ForgotPassword
    },
    {
        path:'/password-recovery',
        name:'passwordRecovery',
        component: PasswordRecovery
    },
    {
        path:'/sign-up',
        name:'signUp',
        component: SignUp
    },
    {
        path:'/email-verified',
        name:'emailVerified',
        component: EmailVerified
    },
    {
        path:'/email-not-verified',
        name:'emailNotVerified',
        component: EmailNotVerified
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