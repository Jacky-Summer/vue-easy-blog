<template>
  <nav>
    <ul>
        <li>
            <router-link to='/' exact>博客总览</router-link>
        </li>
        <li>
            <router-link to='/addBlog' exact>写博客</router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'blog-header'

}
</script>

<style scoped>
nav{
    background: crimson;
    margin-bottom: 40px;
}
ul{
    list-style: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    padding: 30px;
}
a{
    text-decoration: none;
    color: #333;
    color: #fff;
}
.router-link-active{
    background: #f0f0f0;
    color: #888;
    padding: 15px;
    border-radius: 10px;
}
</style>
