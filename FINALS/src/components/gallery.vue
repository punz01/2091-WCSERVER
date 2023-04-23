<template>
  <div class ="gallery">
    <h1>Gallery</h1>
    <h2>DIFFERENT IMAGES OF JDM CARS</h2>
    <div class="row">
        <div class="column">
    <img id= "car" src = "https://motoristprod.s3.amazonaws.com/uploads/redactor_rails/picture/data/5266/JDMs-All-Car-Enthusiasts-Should-Know-Nissan-skyline.jpg" style="width:100%">
        </div>
        <div class="column">
    <img id= "car" src = "https://m.atcdn.co.uk/ect/media/%7Bresize%7D/81647090036d44218026d27fd242c405.jpg" style="width:100%">
        </div>
        <div class="column">
    <img id= "car" src = "https://www.motortrend.com/uploads/sites/5/2019/07/The-Purple-Monster-R32-Skyline-GTR-2.jpg?fit=around%7C875:492" style="width:100%">
        </div>
        <div class="column">
    <img id= "car" src = "https://preview.redd.it/1lamo3gu67171.jpg?auto=webp&s=74455bdef4c3c7741201994d019b3271f6297116" style="width:100%">
        </div>
        <div class="column">
    <img id= "car" src = "https://carfromjapan.com/wp-content/uploads/2020/07/Red-RE-FD-RX7-Single-Turbo.jpg" style="width:100%">
        </div>
        <div class="column">
    <img id= "car" src = "https://cfx-wp-images.imgix.net/2021/05/Nissan-R32-GT-R-scaled.jpg?auto=compress%2Cformat&fit=crop&h=620&ixlib=php-3.3.0&w=930&wpsize=neve-blog&s=30c4c34ca760e19093a508067ae98399" style="width:100%">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
      title: 'gallery'
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
.column{
    float: left;
    width: 33.33%;
    padding: 5px;
    border: 1px solid black;
}

.row::after{
    content: "";
    clear:both;
    display: table;

}

    
</style>