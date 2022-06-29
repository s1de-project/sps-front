<template>
	<div class="new-workspace">
		<div>
			<h1>
				<router-link to="/">slack</router-link>
			</h1>
			<div>
				<h3>Slack에서 시작하기</h3>
				<p>Slack은 여러분의 팀과 소통할 새로운 방법입니다. 이메일보다 빠르고, 더 조직적이며, 훨씬 안전합니다. 그리고 무료로 사용해 볼 수 있습니다.</p>
				<div>
					<router-link to="/WorkspaceList">워크스페이스 생성</router-link>
				</div>
				<p>계속 진행하면 Slack의 고객 서비스 약관, 사용자 서비스 약관, 개인정보 보호 정책, 및 쿠키 정책에 동의하는 것으로 간주됩니다.</p>
			</div>
		</div>
		<div>
			<p>고객님의 팀이 이미 Slack에 있나요?</p>
			<p>
				이메일 주소 
				<span>jinew1027@gmail.com</span>에 대한 기존 워크스페이스를 찾을 수 없습니다.
			</p>
			<div>
				<router-link to="/LoginDetail" class="btn-type-gy">다른 이메일 시도</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>