<template>
  <div class ="about">
    <h1>About</h1>
    <h2>THIS PAGE IS ABOUT THE AUTHOR</h2>
    <img id= "me" src = "https://scontent.fcrk1-4.fna.fbcdn.net/v/t1.15752-9/333779609_222947806846239_2469917478504550328_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHRoHWvs75uPARsryas9cGIsJtV0OO6lRuwm1XQ47qVG8sbhcyZ4U1AOKoYYteJJ0O69QZAoQikpL66naIcqANO&_nc_ohc=NlPHzv4tfxYAX8XxUo3&_nc_pt=1&_nc_ht=scontent.fcrk1-4.fna&oh=03_AdT2XbceU7iFhKpNIsIa9J5h_TqcjNiBKLXsSFSsUn3VLw&oe=646B82CD">
    <h5>Hello JDM Lovers! I am Aaron Punzalan also known as Punz, a student who writes blogs about the things that I am interested in. Student at Holy Angel University studying Information Technology Major in Web Development. If you have any queries, you can always hit me up on any of my social media accounts below or directly contact me at my email which is also included below.</h5>
    <p>GMAIL: apunzalan500@gmail.com</p>
    <p>FACEBOOK: https://www.facebook.com/aaron.punzalan05</p>
    <p>INSTAGRAM: https://www.instagram.com/therealaaronpunzalan/</p>
    
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      title: 'about'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    text-align: center;
}
h2{
    text-align: center;
}
#me{
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
h5{
    text-align: center;
}
p{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
}

</style>