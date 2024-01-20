<template>
    <section class="login">
        
    <form class="form" @submit.prevent="submitForm" v-if="!successMessage">
        <label class="" v-if="errorMessage">{{ errorMessage }}</label>
        <label class="" v-if="successMessage">{{ successMessage }}</label>

        <input type="email" id="email" placeholder="Enter Email" name="email" v-model="email" minlength="4" maxlength="30" required>

        <input type="password" placeholder="Enter Password" name="password"
        :pattern = settings.passwordRegex
        title="Password can only contain Latin letters, numbers, symbols"
        v-model="password" minlength="8" maxlength="30" required>

        <input type="password" placeholder="Confirm password" name="confirmPassword" 
        :pattern = settings.passwordRegex
        v-model="confirmPassword" minlength="8" maxlength="30" required>

        <button type="submit">Sign Up</button>
    </form>

        <div class="" v-if="successMessage">
            <p>{{ successMessage }}</p>
            <router-link to="/log-in">OK</router-link>
        </div>
    </section>

    </template>
    <script setup>
    import settings from '../../../content/json/settings.json';
    import {ref} from 'vue';
    
    
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');

    let errorMessage = ref('');
    let successMessage = ref('');

    const submitForm = async() => {
        if(password.value !== confirmPassword.value){
            return errorMessage.value = "Passwords don't match";
        }
        try {
            const user = {email: email.value, password: password.value};
            const url = `${settings.serverUrl}/sign-up`;
    
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
            successMessage.value = responseData.message;
    
        } catch(err){
            successMessage.value = '';
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
    