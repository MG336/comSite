<template>
    <section class="email-verified">
        <p class="" v-if="errorMessage">{{ errorMessage }}</p>
        <p class="" v-if="successMessage">{{ successMessage }}</p>
        <router-link to="/">OK</router-link>
    </section>

</template>

<script setup>
    import settings from '../../../content/json/settings.json';
    import {ref} from 'vue';
    import {useRoute} from 'vue-router'; 
    import {useStore} from '../../stores/store';

    const route = useRoute();
    const store = useStore();
    const emailToken = route.query.token;
    // const accessToken = localStorage.getItem('accessToken');
    
    let errorMessage = ref('');
    let successMessage = ref('');

    const submitForm = async () => {
        if(!emailToken){
            return errorMessage.value = "Token not found";
        }
        
        try{
            const user = {emailToken:emailToken};
            const url = `${settings.serverUrl}/email-verified`;
    
            
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(user)
            });

            errorMessage.value = '';
            successMessage.value = '';


            if(!response.ok){
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error');
            }

            const responseData = await response.json();
            successMessage.value = responseData.message;
            store.login(response.token);

        } catch(err){
            errorMessage.value = err.message || 'Error';
        }
    }

    submitForm();

</script>
<style lang="scss" scoped>

</style>
    
    
