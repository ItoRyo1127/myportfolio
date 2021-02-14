<template>
  <header>
    <div class="container">
      <router-link to="/">TOP</router-link>
      <router-link to="/profile">Profile</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name:'myheader',
}
</script>

<style scoped>
  header {
    background: linear-gradient(180deg, #11d3ec 0%, #0754c7 100%);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.07);
    height: 70px;
    color:white;
    font-size: 20pt;
    padding-top: 23px;
    text-align: right;
    position: sticky;
    top: 0;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    vertical-align: middle;
  }
</style>