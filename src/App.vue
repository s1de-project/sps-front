<template>
  <div id="app">
		<div v-if=!user>
			<router-view />
		</div>
		<div v-else>
			<channel-modal v-bind:propsdata="showModal" v-on:closeModal="toggleCreateChannel"></channel-modal>
			<TopMenu />
			<div class="p-section">
				<SideBar v-on:showCreateChannel="toggleCreateChannel"
									v-on:createChannel="createChannel"/>
				<router-view/>
			</div>
		</div>
  </div>
</template>

<script>
import TopMenu from '@/components/TopMenu'
import SideBar from '@/components/SideBar'
import ChannelModal from '@/components/ChannelModal.vue'

export default {
  data: function(){
    return {
      showModal: false,
    }
  },
  components: {
    SideBar,
    TopMenu,
    ChannelModal
  },
  methods: {
    toggleCreateChannel: function(){
      this.showModal = !this.showModal
    },
    createChannel: function(channelName,channelTopic){
      var obj = {name: channelName, channelTopic}
      console.log(obj);
    }
  }
}
</script>

<style>
</style>
