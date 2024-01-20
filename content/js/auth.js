export default {
    logIn(token){
        localStorage.setItem('accessToken',token);
    },
    logOut(){
        localStorage.setItem('accessToken', null);
    },
    isAuth(){
        return localStorage.getItem('accessToken') !== null;
    }
}


