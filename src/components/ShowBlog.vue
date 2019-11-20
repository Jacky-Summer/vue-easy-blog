<template>
  <div id="show-blog" v-theme:column="'wide'">
      <h2>博客总览</h2>
      <div class="search">
        <input type="text" placeholder="搜索" v-model="keyword">
      </div>
      <article 
          v-for="(blog, index) in filteredBlogs"
          :key="index"
      >
        <router-link :to="'/blog/' + blog.id">
           <h3 v-rainbow>{{ blog.title | toUpperCase}}</h3>
        </router-link>
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
      blogs: [],
      keyword: ''
    }
  },
  filters: {
    toUpperCase (value) {
      if(!value) return ''
      return value.toUpperCase()
    }
  },
  directives: {
    rainbow: {
      bind (el,binding,vnode) {
        el.style.color = '#' + Math.random().toString(16).slice(2,8)
      }
    }
  },
  computed: {
    filteredBlogs () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.keyword)
      })
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
.search{
  text-align: center;
}
input{
  display: inline-block;
  text-indent: 10px;
  width: 300px;
  height: 30px;
  margin: auto;
  border-radius: 4px;
}
h3{
    font-size: 22px;
}
article{
    background: #f1f1f1;
    padding: 20px;
    margin: 30px;
}
a{
    text-decoration: none;
}
</style>
