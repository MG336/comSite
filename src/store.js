
import { defineStore } from "vuex";

export const useStore = defineStore({
    id:'counter',
    state: {
        count:10,
        count2:1
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    
})


