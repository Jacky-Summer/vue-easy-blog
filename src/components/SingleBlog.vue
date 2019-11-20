<template>
  <div id="single-blog">
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.body }}</p>
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
  created () {
      console.log(this.$route.params.id)
    axios.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
        .then(res => {
            console.log(res)
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
</style>
