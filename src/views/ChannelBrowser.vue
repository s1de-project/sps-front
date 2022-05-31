<template>
  <div>
		<div class="title-area">
			<h3 class="fs-18">채널 브라우저</h3>
			<div class="modal-wrap" :class="{ on : isOn }">
				<button class="btn-type1 modal-btn" @click="toggleInfo">채널 생성</button>
				<div class="modal-basic">
					<div class="modal-header">
						<!-- 비공개 체크시 "비공개 채널 생성" -->
						<p class="fs-28">채널 생성</p>
						<a href="javascript:;" @click="toggleInfo">
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
									<input type="text" placeholder="# 예: 플랜 예산">
								</dd>
							</dl>
							<dl class="input-box-wrap">
								<dt>설명<span class="cl-gray">(옵션)</span></dt>
								<dd class="input-box">
									<input type="text" placeholder="# 예: 플랜 예산">
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
							<button class="btn-type2-gy">생성</button>
						</div>
					</div>
				</div>
				<div class="modal-bg" @click="toggleInfo"></div>
			</div>
		</div>
		<div class="p-content-area">
			<div class="search-box">
				<label for="" class="blind">채널 검색</label>
				<input type="text" placeholder="채널 이름이나 설명으로 검색">
			</div>
			<div class="c-list-wrap">
				<div class="t-tit">
					<p>6개의 채널</p>
					<div>
						<div>
							<a href="javascript:;">정렬: A-Z</a>
						</div>
						<div>
							<a href="javascript:;">필터</a>
						</div>
					</div>
				</div>
				<ul class="c-list">
					<li>
						<a href="#">
							<p class="tit">#개발</p>
							<div>
								<span class="present">참여함</span>
								<span>5명의 멤버</span>
								<span>이 'channel'은(는) 프로젝트에서 작업하기 위한 것입니다. 미팅을 열고, 문서를 공유하고, 고객님의 팀과 함께 결정하세요.</span>
							</div>
						</a>
						<div class="c-btn">
							<button class="btn-type2">나가기</button>
						</div>
					</li>
					<li>
						<a href="">
							<p class="tit">#개발-회의</p>
							<div>
								<span class="present">참여함</span>
								<span>5명의 멤버</span>
								<span>개발 전 회의 내용 기록</span>
							</div>
						</a>
						<div class="c-btn">
							<button class="btn-type2">나가기</button>
						</div>
					</li>
					<li>
						<a href="">
							<p class="tit">#랜덤</p>
							<div>
								<span>3명의 멤버</span>
								<span>이것은 나머지 모든 것을 위한 채널입니다. 팀원들이 농담하거나 순간적인 아이디어나 재미있는 GIF를 공유하는 곳이죠! 마음껏 즐기세요!</span>
							</div>
						</a>
						<div class="c-btn">
							<button class="btn-type2">나가기</button>
						</div>
					</li>
					<li>
						<a href="">
							<p class="tit">#산출물</p>
							<div>
								<span class="present">참여함</span>
								<span>5명의 멤버</span>
							</div>
						</a>
						<div class="c-btn">
							<button class="btn-type2">보기</button>
							<button class="btn-type2-gr">참여</button>
						</div>
					</li>
					<li>
						<a href="">
							<div class="tit">
								#정보
								<div class="tooltip ml-10">
									필수
									<div class="tooltip-msg-top">조직의 요구에 따라 모든 멤버가<br />이 채널에 있어야 됩니다.</div>
								</div>
							</div>
							<div>
								<span class="present">참여함</span>
								<span>5명의 멤버</span>
								<span>이것은 언제나 모두를 포함하게 될 단 하나의 채널로 공지를 올리고 팀 전체의 대화를 나누기에 적합한 공간입니다.</span>
							</div>
						</a>
					</li>
					<li>
						<a href="">
							<p class="tit">#프론트</p>
							<div>
								<span class="present">참여함</span>
								<span>5명의 멤버</span>
							</div>
						</a>
						<div class="c-btn">
							<button class="btn-type2">나가기</button>
						</div>
					</li>
				</ul>
			</div>
			<div class="flex-c">
				<button class="btn-type2-gr">채널 생성</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
    data() {
      return {
        isOn : false,
      }
    },
    methods : {
      toggleInfo() {
        this.isOn = !this.isOn;
      },
    }
	}
</script>

<style lang="scss" scoped>

</style>