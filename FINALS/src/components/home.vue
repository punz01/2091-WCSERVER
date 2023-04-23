<template>
  <div class ="home">
    <h1>Home</h1>
    <h2>WELCOME TO JDM GALLERY</h2>
    <p>A website that showcase the different jdm cars</p>
    <img id= "car" src = "https://images8.alphacoders.com/107/1079397.png">
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: black;
  text-align: center;
}
h2{
  text-align: center;
}
#car{  
  width: 1400px;
  border: 1px solid black;
}
p{
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

</style>
