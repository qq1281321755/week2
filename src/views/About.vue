<template>
  <div class="about">
      <div>
        <h3>用户名</h3>
        <input type="test" v-model="data.val" placeholder="输入用户名" >
      </div>
      <div>
        <h3>年龄</h3>
        <input type="test" v-model="data.age" placeholder="输入年龄" >
      </div>

      <p>
        <button @click="fn(1,2)">添加</button>
        <button @click="fn2">重置</button>
      </p>
  </div>
</template>
<script>

import {mapMutations} from "vuex"


export default {
  props:{

  },
  components:{

  },
  data(){
    return {
      data :{
        val : "",
        age : "",
      }
    }
  },
  computed:{

  },
  methods:{
       ...mapMutations(["fn"]),
       /* fn(i){
         console.log(i)
       }, */

      /* fn(){
        this.vm.$emit("add",this.data)
      }, */

      fn2(){
        this.data.val = "",
        this.data.age = ""
      } 
  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
  .about{
    width:100%;
    height: 50%;

    input{
      width:80%;
      height: 40px;
      font-size: 17px;
    }

    button:nth-child(1){
      display: inline-block;
      padding : 10px 15px;
      border-radius: 4px;
      border : 0;
      color: #fff;
      background: blueviolet;
      
      margin: 10px;
    }

    button:nth-child(2){
      display: inline-block;
      padding : 10px 15px;
      border-radius: 4px;
      border : 0;
      color: #fff;
      background: red;
    }
  }
</style>
