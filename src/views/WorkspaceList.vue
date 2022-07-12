<template>
	<div>
		workspace list
		<router-link to="/ChannelMain" @click="toggleLogin">클릭</router-link>
		{{ provideData }}
	</div>
</template>

<script>
export default {
	//App.vue에서 데이터를 넘겨받음
	inject: ["provideData"],
	methods : {
		toggleLogin() {
			this.$store.state.user = !this.$store.state.user
		}
	}
}
</script>

<style>

</style>