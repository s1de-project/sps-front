<template>
  <div>
		<div class="title-area">
      <div class="c-info">
				<div class="modal-wrap" :class="{ on : isOn }">
					<a href="javascript:void(0)" class="fs-18 modal-btn" @click="toggleInfo2">#개발</a>
					<div class="modal-basic">
						<div class="modal-header">
							<div class="flex-s">
								<p class="fs-28">#개발</p>
								<a href="javascript:void(0)" class="tooltip">
									<div class="ico-message">
										<img src="../assets/images/icon/ico-message.svg" alt="">
									</div>
									<div class="tooltip-msg">채널명 변경</div>
								</a>
							</div>
							<a href="javascript:;" @click="toggleInfo2">
								<div class="ico-close">
									<img src="../assets/images/icon/ico-close.png" alt="닫기">
								</div>
							</a>
						</div>
						<div class="modal-content content-wide bg-graybox">
							<div class="tab-cont-wrap">
								<ul class="tab-btn mb-20 p-30">
									<li v-for="(tab, index) in tabs" :key="index" :class="{active:currentTab === index}">
										<a href="javascript:;" @click="currentTab = index">{{ tab }}</a>
									</li>
								</ul>
								<div class="tab-content">
									<div v-show="currentTab == 0" class="p-30">
										<div class="card-list-box">
											<div class="list-item">
												<dl>
													<dt>채널이름</dt>
													<dd>
														<div>
															<input type="text" value="#개발" readonly>
														</div>
													</dd>
												</dl>
												<div class="fs-13">
													<button class="cl-blue">편집</button>
												</div>
											</div>
										</div>
										<div class="card-list-box">
											<div class="list-item">
												<dl>
													<dt>주제</dt>
													<dd>
														<div>
															<input type="text" value="주제추가" readonly>
														</div>
													</dd>
												</dl>
												<div class="fs-13">
													<button class="cl-blue">편집</button>
												</div>
											</div>
											<div class="list-item">
												<div>
													<button class="cl-pink">이 채널 삭제</button>
												</div>
											</div>
										</div>
									</div>
									<div v-show="currentTab == 1">
										<div class="search-box m-30">
											<label for="" class="blind">채널 검색</label>
											<input type="text" placeholder="채널 이름이나 설명으로 검색">
										</div>
										<div class="search-list">
											<a href="javascript:void(0)" class="list-item">
												<div class="user">
													<div class="ico-user">
														<img src="../assets/images/icon/ico-user.png" alt="사용자프로필">
													</div>
													<div>홍길동</div>
												</div>
												<div class="fs-13">
													<button class="cl-blue" @click="toggleInfo3">제거</button>
												</div>
											</a>
										</div>
										<div class="search-list">
											<a href="javascript:void(0)" class="list-item">
												<div class="user">
													<div class="ico-user">
														<img src="../assets/images/icon/ico-user.png" alt="사용자프로필">
													</div>
													<div>홍길동</div>
												</div>
												<div class="fs-13">
													<button class="cl-blue" @click="toggleInfo3">제거</button>
												</div>
											</a>
										</div>
										<div class="search-list">
											<a href="javascript:void(0)" class="list-item" @click="toggleInfo4">
												+ 사용자 초대하기
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-bottom flex-e">
							<div>
								<button class="btn-type2-gy" @click="toggleInfo2">나가기</button>
							</div>
						</div>
					</div>
					<div class="modal-bg" @click="toggleInfo"></div>
				</div>
				<div class="modal-type2" :class="{ on : isOn2 }">
					<div class="modal-content">
						이 멤버를 제거하시겠습니까?
					</div>
					<div class="modal-bottom">
						<button @click="toggleInfo3">제거</button>
						<button @click="toggleInfo3">취소</button>
					</div>
				</div>
				<div class="modal-type3" :class="{ on : isOn3 }">
					<div class="modal-header flex-sb">
						<p>Side Project(PaaS-TA)(으)로 사용자 초대</p>
						<a href="javascript:;" @click="toggleInfo4">
							<div class="ico-close">
								<img src="../assets/images/icon/ico-close.png" alt="닫기">
							</div>
						</a>
					</div>
					<div class="modal-content">
						<dl class="input-box-wrap">
							<dt>받는 사람</dt>
							<dd class="input-box">
								<input v-model="channelName" type="text" placeholder="# 예: 플랜 예산">
							</dd>
						</dl>
					</div>
					<div class="modal-bottom flex-c">
						<button @click="toggleInfo4">보내기</button>
					</div>
				</div>
      </div>
		</div>
		<div class="p-content-area chat">
			<div class="chat-wrap">
				<div class="chat-con">
					<div class="chat-first">
						<div class="ico-user">
							<img src="../assets/images/icon/ico-user.png" alt="">
						</div>
						<div>
							<div>
								<strong><span class="cl-blue">#프론트</span>채널의 맨 첫 부분입니다.</strong>
							</div>
							<p>날짜: 5월 26일에 이 채널을 생성했습니다.</p>
						</div>
					</div>
					<div class="chat-day">
						<div class="select-box-wrap">
							<button class="select-btn" @click="toggleInfo($event)">5월 26일 목요일</button>
							<div class="select-option">
								<div class="division">
									<p class="fs-13-gy">다음으로 이동</p>
									<div class="menu-item">
										<a href="#">
											<p>최근</p>
										</a>
									</div>
									<div class="menu-item">
										<a href="#">
											<p>지난달</p>
										</a>
									</div>
								</div>
								<div class="menu-item">
									<a href="#">
										<p>특정 날짜로 이동</p>
									</a>
								</div>
							</div>
							<div class="modal-bg" @click="toggleInfo($event)">
							</div>
						</div>
					</div>
					<div class="chat-detail">
						<div class="ico-user">
							<img src="../assets/images/icon/ico-user.png" alt="">
						</div>
						<div>
							<div>
								<strong>강민지</strong>
								<span>오후 1:07</span>
							</div>
							<p>#프론트에 4명의 다른 사용자와 함께 다시 참여했습니다.</p>
						</div>
					</div>
					<div class="chat-detail">
						<div class="ico-user">
							<img src="../assets/images/icon/ico-user.png" alt="">
						</div>
						<div>
							<div>
								<strong>강민지</strong>
								<span>오후 1:07</span>
							</div>
							<div>
								프론트도 채널 만들어보았어요
							</div>
						</div>
					</div>
					<div class="chat-text">
						<textarea placeholder="#개발에 메시지 보내기"></textarea>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
    data() {
      return {
				currentTab: 0,
				tabs: ['정보', '멤버1'],
        isOn : false,
        isOn2 : false,
        isOn3 : false,
        showModal: false,
      }
    },
    methods : {
			toggleInfo(event) {
				event.target.parentNode.classList.toggle("on")
			},
      toggleInfo2() {
        this.isOn = !this.isOn;
      },
      toggleInfo3() {
        this.isOn2 = !this.isOn2;
      },
      toggleInfo4() {
        this.isOn3 = !this.isOn3;
      },
    }
	}
</script>

<style lang="scss" scoped>

</style>