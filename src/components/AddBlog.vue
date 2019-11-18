<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submited">
        <div>
            <label for="">博客标题</label>
            <input type="text" v-model="blog.title">
        </div>
        <div>
            <label for="">博客内容</label>
            <textarea v-model="blog.content"></textarea>
        </div>
        <div class="checkboxes">
            <label for="">Vue</label>
            <input type="checkbox" value="Vue" v-model="blog.categories">
            <label for="">Node.js</label>
            <input type="checkbox" value="Node.js" v-model="blog.categories">
            <label for="">React</label>
            <input type="checkbox" value="React" v-model="blog.categories">
            <label for="">Angular</label>
            <input type="checkbox" value="Angular" v-model="blog.categories">
        </div>
        <div>
            <label for="">作者</label>
            <select v-model="blog.author">
                <option 
                    v-for="(author, index) in authors"
                    :key="index"
                >
                    {{ author }}
                </option>
            </select>
        </div>
        <button @click.prevent="post">添加博客</button>
    </form>

    <div v-if="submited">
        <h3>添加博客成功!</h3>
    </div>

    <div id="preview">
        <h2>博客总览</h2>
        <p> 博客标题: {{ blog.title }}</p>
        <p> 博客内容:{{ blog.content }}</p>
        <p> 博客分类: 
            <ul>
                <li v-for="(category,index) in blog.categories" :key="index">
                    {{ category }}
                </li>
            </ul>
        </p>
        <p> 作者: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'add-blog',
  data () {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ['jacky','monkey','hougelin'],
      submited: false
    }
  },
  methods: {
    post () {
      axios.post('https://jsonplaceholder.typicode.com/posts',{
        "userId": 1,
        "title": this.blog.title,
        "body": this.blog.content
      })
        .then(res=>{
            console.log(res)
            this.submited = true
        })
    }
  }
}
</script>

<style scoped>
#add-blog{
    box-sizing: border-box;
}
#add-blog{
    max-width: 600px;
    margin: auto;
}
#add-blog h2{
    text-align: center;
}
label{
    display: block;
    margin: 10px 0 10px 0;
    font-size: 16px;
}
#add-blog input[type="text"], select, textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
.checkboxes{
    margin-top: 20px;
}
textarea{
    height: 200px;
}
.checkboxes label{
    display: inline-block;
    vertical-align: middle;
}
.checkboxes input{
    margin-right: 30px;
}
button{
    display: block;
    font-size: 20px;
    color: #fff;
    padding: 10px 20px;
    background-color: #f74342;
    border-radius: 10px;
    margin: auto;
    margin-top: 20px;
}
#preview{
    border: 1px dotted;
    margin-top: 20px;
    padding: 20px 10px;
}
</style>
