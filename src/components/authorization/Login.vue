<template>

<section class="login">
<form class="form" @submit.prevent="submitForm">
    <label class="" v-if="errorMessage">{{ errorMessage }}</label>
    
    <input type="email" id="email" placeholder="Enter Email" name="email" v-model="email" minlength="4" maxlength="30" required>
    
    <input type="password" placeholder="Enter Password" name="password"
        :pattern = settings.passwordRegex
        title="Password can only contain Latin letters, numbers, symbols"
    v-model="password" minlength="8" maxlength="30" required>


    <span><router-link to="/forgot-password">Forgot password?</router-link></span>
    <span><router-link to="/sign-up">Don't have an account?</router-link></span>
    <button type="submit">Login</button>
</form>

</section>
</template>
<script setup>
// import settings from '../../../content/json/settings.json';
import settings from '../../../content/json/settings.json';

import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from '../../stores/store';
//pinia

const router = useRouter();
const store = useStore();
const serverUrl = settings.serverUrl;
const email = ref('');
const password = ref('');
let errorMessage = ref('');

const submitForm = async() => {
    try{
        const user = {email: email.value, password: password.value};
        const url = `${serverUrl}/log-in`;


        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });



        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.error || 'Error');
        }

        const responseData = await response.json();
        
        errorMessage.value = '';

        // localStorage.setItem('accessToken', responseData.token);
        
        store.login(responseData.token);
        router.push('/');

    } catch(err){
        errorMessage.value = err.message || 'Error';
    }
}

</script>
<style lang="scss" scoped>
.form{
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 8px;
}


*{
    color: rgb(139, 139, 139);
}
</style>



        




// <!-- Remember me for 30 days -->
// <!-- Don't have an account? -->
// <!-- Create account -->

