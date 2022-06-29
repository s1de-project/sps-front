<template>
	<div class="login-main">
		<div class="txt-box">
			<h1>
				<router-link to="/">
					slack
				</router-link>
			</h1>
			<p>
				Slack은 어디에 있든<br />
				팀을 하나로
			</p>
			<div>
				<router-link to="LoginDetail" class="btn-type2-gr">이메일로 로그인해 보세요.</router-link>
			</div>
		</div>
		<router-view/>
	</div>
</template>

<script>
export default {
	mounted() {
		
		console.log(this.$store.state.user);
		

	}
}
</script>

<style>

</style>