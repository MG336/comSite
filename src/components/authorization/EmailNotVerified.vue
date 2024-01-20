//Надпись с просьбой подтвердить email
//Кнопка отправить email повторно
<template>
    <section class="emailNotVerified">
        <div class="env-box">
            <p>Please confirm your email</p>
            <button @click="submitForm">Resend Email</button>
            <p>{{ errorMessage }}</p>
            <p>{{ successMessage }}</p>
        </div>
    </section>
</template>

<script setup>
import settings  from '../../../content/json/settings.json'
import { useStore } from '../../stores/store';
import {ref} from 'vue';    
    const store = useStore();
    
    let errorMessage = ref('');
    let successMessage = ref('');

   async function submitForm(){

        errorMessage.value = '';
        successMessage.value = '';

        const token = localStorage.getItem('accessToken');
         console.log(token);
        if(!token || token.length > 500){
            throw new Error('Token Error');
        }
        const url = `${settings.serverUrl}/resend-email`;
        const user = {
            token: token
        }
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                    // 'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(user)
            });
        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.error || 'Error')
        }

        const responseData = await response.json();
        successMessage.value = responseData;
        }catch(err){
            errorMessage.value = err.message || 'Error';
        }
    }
</script>

<style lang="scss" scoped>

</style>