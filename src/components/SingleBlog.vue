<template>
  <div id="single-blog">
    <h2>{{ blog.title }}</h2>
    <p>{{ blog.content }}</p>
    <p>作者：{{ blog.author }}</p>
    <ul>
      <li v-for="(category,index) in blog.categories" :key="index">
        {{ category }}
      </li>
    </ul>
    <div class="">
      <router-link :to="'/edit/' + this.id"  >编辑</router-link>
      <button @click="deleteBlog">删除</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'single-blog',
  data(){
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  methods: {
    deleteBlog () {
      axios.delete('/posts/' + this.id + '.json')
        .then(() => {
          this.$router.push({ path: '/' })
        })
    }
  },
  created () {
    axios.get('/posts/' + this.id + '.json')
      .then(res => {
        if(res){
          this.blog = res.data
        }
      })
  }
}
</script>

<style scoped>
#single-blog{
    max-width: 600px;
    margin: auto;
    border: 1px dotted;
    padding: 20px;
    background: #f0f0f0;
}
h2{
    text-align: center;
}
a{
  text-decoration: none;
}
a, button{
  padding: 10px;
  font-size: 14px;
  background: crimson;
  color: #fff;
  margin-right: 20px;
}
</style>
