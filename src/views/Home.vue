<template>
  <div class="home">
    <table >
        <tr>
          <th>序号</th><th>名字</th><th>年龄</th><th>操作</th>
        </tr>
        <tr v-for="(item,index) in data" :key="index">
          <td>{{item.id}}</td><td>{{item.name}}</td><td>{{item.age}}</td><td>删除</td>
        </tr>
    </table>
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
      data : [
        {
          id : 0,
          name : "name",
          age : "age",
        }
      ]
    }
  },
  computed:{
  
  },
  methods:{
     
  },
  created(){

  },
  mounted(){
    /* vm.$on("add",function(i){
      console.log(i)
    }.bind(this)) */
  }
}
</script>
<style scoped lang="scss">
  .home{
    width:100%;
    height: 100%;

    table{
      width: 100%;
      height: auto;

      tr{
        width: 100%;
        height: 30px;

        th{
          flex : 1;
        }

        td{
          text-align: center;
        }
      }
    }
  }
</style>
