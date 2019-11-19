<template>
  <div id="show-blog" v-theme:column="'wide'">
      <h2>博客总览</h2>
        <article 
            v-for="(blog, index) in blogs"
            :key="index"
        >
          <h3 v-rainbow>{{ blog.title }}</h3>
          <p>{{ blog.body }}</p>
        </article>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'show-blog',
  data () {
    return {
      blogs: []
    }
  },
  created () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            if (res) {
                this.blogs = res.data.slice(0,10)
            }
        })
  }
}
</script>

<style scoped>
#show-blog{
    max-width: 800px;
    margin: auto;
}
#show-blog h2{
    text-align: center;
}
h3{
    font-size: 22px;
}
article{
    background: #f1f1f1;
    padding: 20px;
    margin: 30px;
}
</style>
