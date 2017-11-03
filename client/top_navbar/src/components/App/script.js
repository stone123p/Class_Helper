import {mapState,mapGetters,mapMuations} from 'vuex'
import VueCookies from 'vue-cookies'

export default{
  name: 'App',
  data(){
    return {
      buttons:[
      {'name':'設定','method':'setting'},
      {'name':'投票','method':'vote'},
      {'name':'公告','method':'bbs'}]
    }
  },
  components:{
  },
  computed:{
  },
  methods:{
    logout(){
      this.$store.dispatch('logout');
    },
    methodsOfButtons(method){
      this.$store.dispatch('methodsOfButtons',method);
    }
  },
  beforeMount(){
    if(this.$store.state.key==null){
      window.location='/';
    }
  }
}
