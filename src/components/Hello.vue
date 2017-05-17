<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="newItem" >
    <button v-on:click="addNew">添加</button>
    <ul>
      <li v-for="item in items" v-bind:class="{ active: item.isFinished }" v-on:click="toggleFinish(item)">{{item.lable}}</li>
    </ul>
  </div>
</template>

<script>
import Store from '../store'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:Store.fetch(),
      newItem:'',
    }
  },
  watch:{
      items:{
        handler:function(items){
          Store.save(items)
        },
          deep:true
       }
  },
  methods: {
    toggleFinish(item){
      item.isFinished=!item.isFinished
    },
    addNew(){
      this.items.push({
              lable:this.newItem,
              isFinished:false
      });
      this.newItem='';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
.active {
    text-decoration: underline;
}

a {
  color: #42b983;
}
</style>
