import Vue from 'vue'
import Vuex from 'vuex'
import VueCookie from 'vue-cookies'

const getSearches=function(){
  return window.location.search.substr(1).split("&");
}
const changeSearch=function(gss,s,d){
  var url="?";
  gss.forEach((search)=>{
    url+=search.split("=")[0]+"="+(search.split("=")[0]==s?d:search.split("=")[1])+"&";
  })
  return url.substr(0,url.length-1);
}
Vue.use(Vuex)
Vue.use(VueCookie);
export default new Vuex.Store({
    state:{
      key:Vue.cookies.get('key')
    },
    getters:{
    },
    mutations:{
      logout(state){
        Vue.cookies.remove('key'); 
        window.location='/';
      },
      methodOfButton(state,m){
        window.location=changeSearch(getSearches(),"state",m);
      }
    },
    actions:{
      setting:({ commit })=>{
        commit('setting');
      },
      methodsOfButtons:({commit},method)=>{
        commit('methodOfButton',method);
      }
    }
})

