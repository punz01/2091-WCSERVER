<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>MY RESUME</h2>
    <Profile></Profile>
    <Skills></Skills>
    <Education></Education>
    
  </div>
</template>

<script>
import Profile from './Profile.vue'
import Skills from './Skills.vue'
import Education from './Education.vue'
export default {
  name: 'app',
  components: {
    Profile,
    Education,
    Skills
  },
  data () {
  
     return {
      msg: 'Welcome to My Resume'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: khaki;
  
}
h1{color: red;}
h2{color:purple;}


</style>
