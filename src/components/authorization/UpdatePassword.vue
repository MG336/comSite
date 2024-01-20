<template>
    <section class="login">
        
    <form class="form" @submit.prevent="submitForm">
        <label class="" v-if="errorMessage">{{ errorMessage }}</label>
        <label class="" v-if="successMessage">{{ successMessage }}</label>

        <input type="password" id="password" placeholder="New Password" name="password"
        :pattern = settings.passwordRegex
        v-model="password" minlength="8" maxlength="30" required>

        <input type="password" id="confirmPassword" placeholder="Confirm Password"
        :pattern = settings.passwordRegex
        name="password" v-model="confirmPassword" minlength="8" maxlength="30" required>

        <button type="submit">Password Recovery</button>
    </form>
    
    </section>
    </template>
    <script setup>
    import settings from '../../../content/json/settings.json';
    import {ref} from 'vue';
    import {useRoute} from 'vue-router'; 
    //pinia
    const route = useRoute();

    const password = ref('');
    const confirmPassword = ref('');
    
    let errorMessage = ref('');
    let successMessage = ref('');
    
    const token = route.query.token || localStorage.getItem('accessToken');

    const submitForm = async() => {

        if(password.value !== confirmPassword.value){
            return errorMessage.value = "Error Passwords don't match";
        }else if(!token){
            return errorMessage.value = "Error Token not found";
        }else if(token.length < 100 || token.length > 500){
            return errorMessage.value = "Error Token";
        }
                 
        
        try{
            const user = {token:token, password: password.value};
            const url = `${settings.serverUrl}/password-recovery`;
    
         
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            });

            errorMessage.value = '';
            successMessage.value = '';


            if(!response.ok){
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error');
            }
            const message = await response.json();
            successMessage.value = message.message;
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
    
    