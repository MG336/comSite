<template>
    <section class="login">
        <form>
            <form class="login-con" @submit.prevent="submitForm">
                <label class="" v-if="errorMessage">{{ errorMessage }}</label>
                <label class="" v-if="successMessage">{{ successMessage }}</label>

                <input type="email" id="email" placeholder="Enter Email" name="email" v-model="email" minlength="4" maxlength="30" required>
                
                <button type="submit">Submit</button>
            </form>
        </form>
    </section>
</template>
<script setup>
    import {ref} from 'vue';
    import settings from '../../../content/json/settings.json';

    const email = ref('');

    let errorMessage = ref('');
    let successMessage = ref('');

    async function submitForm() {
        const user = {email: email.value};
        const url = `${settings.serverUrl}/forgot-password`;
        
        try {

    
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(user)
            });

            successMessage.value = '';
            errorMessage.value = '';

            if(!response.ok){
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error');
            }
    
            const responseData = await response.json();
            successMessage.value = responseData;
    
        } catch(err){
            errorMessage.value = err.message || 'Error';
        }
    }

</script>
<style>
*{
    color: rgb(167, 167, 167);
}
</style>