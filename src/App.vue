<template>
  <div id="app">
    <About />
    <Home />
  </div>
</template>


<script>
import About from "./views/About"
import Home from "./views/Home"

export default {
  props:{

  },
  components:{
    About,
    Home
  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{
   
  },
  created(){

  },
  mounted(){

  }
}
</script>


<style scoped lang="scss">
  #app{
    width:100%;
    height: 100%;
    background: #eee;
  }
</style>
