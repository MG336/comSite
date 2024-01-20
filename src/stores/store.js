
import {defineStore} from "pinia";
import footageData from "../../content/json/footageData.json"


// const route = useRoute();
// const router = useRouter();



async function getSessionStorage(key, path, serverData, serverUrl) {
  //получить данные из sessionStorage
  const storedValue = sessionStorage.getItem(key);

  let data = 0;
  if(!storedValue){
    data = await serverData(serverUrl, path);
    sessionStorage.setItem(key, JSON.stringify(data));
  }
  //проверить есть ли данные в storedValue
  return storedValue ? JSON.parse(storedValue) : data
}

let getServerData = async (serverUrl, patch) => {
  let data = await fetch(serverUrl + patch);
  return data.json(data)
}

export const useStore = defineStore('counter',{
    state:() => {
      return {    
        count: 1,
        itemData: [],
        itemsData:[],
        
        paginatеData:[],

        serverUrl: footageData.serverUrl,
        serverUrl2: footageData.serverUrl2,

        footageData: footageData,

        //pagination
        currentPage:1,
        itemsPerPage:3,

         //Authorization
          authToken: localStorage.getItem('accessToken') || null,

        }},



    getters: {

      maxPages(state){
        return Math.ceil(state.itemsData.length / state.itemsPerPage);
      },

      pagination(state) {
        const startIndex = (state.currentPage - 1) * state.itemsPerPage;
        const endIndex = startIndex + state.itemsPerPage;
        return state.itemsData.slice(startIndex, endIndex);
      }
  },


  actions: {

  async fetchItemsData(path, routeParam) {
      try{
         //вызов функции которая сохраняет результат в Storage или загружает с сервера
        this.itemsData = await getSessionStorage(routeParam, path, getServerData, this.serverUrl);
      }catch(err){
          console.error('Ошибка при получении данных с сервера',err);
      }
  },
  
  

  async searchItemsData(patch){
    try {
      this.itemsData = await getServerData(this.serverUrl, patch);

    }catch(err){
      console.error('Ошибка в поиске',err)
    }
  },

  async fetchItem(path, routeParam){
    try{
      //вызов функции которая сохраняет результат в Storage или загружает с сервера
      let item = await getSessionStorage(routeParam, path, getServerData, this.serverUrl)
      
      item.path = `${this.serverUrl}/preview/${item.id}${item.preview}`;
      item.download = `${this.serverUrl}/download/${item.id}${item.preview}`;
      this.itemData = item;
     
    }catch(err){
        console.error('Ошибка при получении данных с сервера',err);
    }
  },

  //Авторизация
  
  login(token){
    this.authToken = token;
    localStorage.setItem('accessToken',token);
  },
  logOut(){
    this.authToken = null;
    localStorage.removeItem('accessToken');
  },
  isAuth(){
    return this.authToken !== null;
  },

  //Проверка токена
  async checkToken(url){
    const token = localStorage.getItem('accessToken');
    if(!token || token.length < 100 || token.length > 500){
      return 'Token Error'
    }
    try{
      const response = await fetch(url,{
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        }
      })
      return response
    }catch(err){
        return err.message || 'Error';
    }
  }
}})
   




