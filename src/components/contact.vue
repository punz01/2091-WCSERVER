<template>
   <div class="container">
  <div class="contact">
    <h1>Contact Us</h1>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="message">Message/Concern</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
</div>
  </template>
  
  <script>
  export default {
    name: 'contact',
    data () {
      return {
        title: 'Contact'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.contact {
  background-image: url("https://i.pinimg.com/originals/c2/53/3c/c2533ce6ac09419a23ecd6ffdc8d8db2.png");
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: whitesmoke;
  font-weight: bold;
  opacity: 0.8;
}

.contact h1 {
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
  color: palevioletred;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
}

.form-group textarea {
  resize: none;
}

button[type="submit"] {
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  
}

button[type="submit"]:hover {
  background-color: red;
}
</style>