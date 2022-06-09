<template>
    <div>
		<div class="modal-wrap" :class="{ on : propsdata }">
			<div class="modal-basic">
				<div class="modal-header">
					<!-- 비공개 체크시 "비공개 채널 생성" -->
					<p class="fs-28">채널 생성</p>
					<a href="javascript:;" @click="closeModal(propsdata)">
						<div class="ico-close">
							<img src="../assets/images/icon/ico-close.png" alt="닫기">
						</div>
					</a>
				</div>
				<div class="modal-content">
					<p class="cl-gray">채널은 팀이 소통하는 공간입니다. 채널은 주제(예: 마케팅)를 중심으로 구성하는 것이 가장 좋습니다.</p>
					<div>
						<dl class="input-box-wrap">
							<dt>이름</dt>
							<dd class="input-box">
								<input v-model="channelName" type="text" placeholder="# 예: 플랜 예산">
							</dd>
						</dl>
						<dl class="input-box-wrap">
							<dt>설명<span class="cl-gray">(옵션)</span></dt>
							<dd class="input-box">
								<input v-model="channelTopic" type="text" placeholder="# 예: 플랜 예산">
							</dd>
						</dl>
						<p class="fs-13-gy mt-10">무엇에 대한 채널인가요?</p>
					</div>
					<div class="switch-area">
						<dl>
							<dt class="font-b">비공개로 만들기</dt>
							<dd class="flex-sb">
								<!-- 기본 미체크시 class="on" -->
								<p class="on">채널이 비공개로 설정된 경우 초대를 통해서만 조회 또는 참여할 수 있습니다.</p>
								<!-- 비공개 체크시 class="on" -->
								<p><strong>이 작업은 실행 취소할 수 없습니다.</strong>비공개 채널은 나중에 공개로 설정할 수 있습니다.</p>
								<div class="switch-btn-wrap">
									<input type="checkbox" id="switchPrivate" class="switch">
									<label for="switchPrivate" class="switch-label">
										<span class="onf-btn"></span>
									</label>
								</div>
							</dd>
						</dl>
					</div>
				</div>
				<div class="modal-bottom flex-sb">
					<div>
						<input type="checkbox" id="sharePermit">
						<label for="sharePermit" class="ml-10">Side Project(PaaS-TA) 외부 공유</label>
					</div>
					<div>
						<button class="btn-type2-gy" v-on:click="createChannel">생성</button>
					</div>
				</div>
			</div>
			<div class="modal-bg" @click="closeModal(propsdata)"></div>
		</div>
    </div>
</template>

<script>
    export default {
        props: ["propsdata"],
		data: function(){
			return {
				channelName: '',
				channelTopic: '',
			}
		},
		methods:{
			closeModal: function(propsdata){
				console.log(propsdata);
				this.$emit('closeModal',!propsdata)
			},
			createChannel: function(){
				console.log(this.channelName, this.channelTopic);
				this.$emit('createChannel',this.channelName, this.channelTopic);
			}
		}
    }
</script>

<style lang="scss" scoped>

</style>