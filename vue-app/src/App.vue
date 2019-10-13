<template>
  <div id="vue-app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  box-sizing: border-box;
}

#vue-app {
  border: 20px solid green;
  height: 100%;
  text-align: center;
}

img {
  margin: 10px 0;
  width: 100%;
  max-width: 800px;
  height: auto;
}

.navigation > * {
  padding: 5px 10px;
  margin: 5px;
  text-decoration: none;
  border: 1px solid green;
  color: green;
  border-radius: 1000px;
}
</style>
