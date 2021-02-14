<template>
  <myheader />
</template>

<script>
import myheader from './components/header.vue'

export default {
  name: 'App',
  components: {
    myheader,
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
