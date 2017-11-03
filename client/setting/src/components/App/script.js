import {mapState,mapGetters,mapMuations} from 'vuex'

export default{
  name: 'App',
  data(){
    return {
      window_data:this.$store.state.window_data,
      labels:[
        {'title':'姓名','content':'黃震宇'},
        {'title':'email','content':'123@email.com.tw'},
        {'title':'密碼','content':'cek106125'},
        {'title':'幹部','content':'副主席'}
      ]
    }
  },
  components:{
  },
  computed:{
  },
  methods:{
  }
}
