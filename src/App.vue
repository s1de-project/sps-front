<template>
  <div id="app">
    <TopMenu />
    <div class="p-section">
      <SideBar />
      <router-view/>
    </div>
  </div>
</template>

<script>
import TopMenu from '@/components/TopMenu'
import SideBar from '@/components/SideBar'

export default {
  components: {
    SideBar,
    TopMenu
  }
}
</script>

<style>
</style>
