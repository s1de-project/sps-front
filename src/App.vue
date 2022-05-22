<template>
  <div id="app">
    <top-manu class="top"></top-manu>
    <div class="horizon">
      <side-manu class="sideBar"></side-manu>
      <router-view/>
    </div>
  </div>
</template>

<script>
import SideManu from './components/SideManu.vue'
import TopManu from './components/TopManu.vue'


export default {
  name: 'App',
  components: {
    TopManu,
    SideManu
  }
}
</script>

<style>
html, body{
  margin: 0px;
  height: 100%;
  width: 100%;
}
div{
  height: 100%;
  width: 100%;
}
.horizon{
  display: flex;
  height: 95%;
}
.top{
  height: 5%;
  background-color: #350d36;
  border-bottom : 1px solid rgb(82,38,83);
}
.sideBar{
    background-color: #3F0E40;
    width: 16%;
}

</style>
