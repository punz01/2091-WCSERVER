<template>
  <div class ="blog">
    <h1>Blog</h1>
    <h2>BEST JDM CAR FOR ME</h2>
    <img id= "car" src = "https://images.summitmedia-digital.com/topgear/images/2022/08/22/skyline-10-1661139795.jpeg">
    <h5>The Nissan Skyline (Japanese: 日産・スカイライン, Hepburn: Nissan Sukairain) is a brand of automobile originally produced by the Prince Motor Company starting in 1957, and then by Nissan after the two companies merged in 1967. After the merger, the Skyline and its larger counterpart, the Nissan Gloria, were sold in Japan at dealership sales channels called Nissan Prince Shop.

The Skyline was largely designed and engineered by Shinichiro Sakurai from inception, and he remained a chief influence of the car until his death in 2011.

Skylines are available in either coupé, or sedan body styles, plus station wagon, crossover, convertible and pickup/sedan delivery body styles. The later models are most commonly known by their trademark round brake and tail lights. While not distributed in the United States until its importation as the Infiniti G, the Skyline's prominence (particularly for the GT-R variant) in video games, movies and magazines resulted in many such cars being imported there, and makes up a large amount of second-hand Japanese car imports to Europe and North America. The majority of Skyline models are rear-wheel drive, with all-wheel drive being available since the eighth-generation's debut.</h5>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      title: 'Blog'
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
#car {
  width: 1400px;
  text-align: center;
  border: 1px solid black;
  height: 500px;
}
h5{
    text-align: center;
}

</style>