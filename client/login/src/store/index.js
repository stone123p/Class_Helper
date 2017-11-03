import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueCookie from 'vue-cookies'
Vue.use(VueCookie);

const url='http://localhost:3000'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
      enter_state:""
    },
    getters:{
    },
    mutations:{
      enterSystem(state,data){
        if(data.response_data.can_enter){
          Vue.cookies.set("key",data.login_data.key);
          window.location.href =data.response_data.redirect;
        }else{
          this.state.enter_state="----帳密有誤----";
        }
      }
    },
    actions:{
       enterSystem({commit},login_data){
         console.log(login_data);
         axios.post('/login',{"key":login_data}).then(function(response){
           commit('enterSystem',{'response_data':response.data,'login_data':login_data});
         }).catch(function (error) {
            console.log(error);
         });
       }
    }
})

