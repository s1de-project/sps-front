<template>
	<div>
		workspace list
		<router-link to="/ChannelMain" @click="toggleLogin">클릭</router-link>
	</div>
</template>

<script>
export default {
	methods : {
		toggleLogin() {
			this.$store.state.user = !this.$store.state.user
		}
	}
}
</script>

<style>

</style>