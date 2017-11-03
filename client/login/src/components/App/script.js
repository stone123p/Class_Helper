import {mapActions,mapState,mapGetters,mapMuations} from 'vuex'
import VueCookies from 'vue-cookies'

export default{
  name: 'App',
  data(){
    return {
      student_number:'*',
      password:'*'
    }
  },
  components:{
  },
  computed:{
    enter_state(){
      return this.$store.state.enter_state
    }
  },
  methods:{
    enterSystem(){
      this.$store.dispatch('enterSystem',this.student_number+"&"+this.password);
    },
  }
}
