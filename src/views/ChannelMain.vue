<template>
  <div>
		<div class="title-area">
      <div class="c-info">
				<div class="modal-wrap" :class="{ on : isOn }">
					<a href="jacascript:void(0)" class="fs-18 modal-btn" @click="toggleInfo2">#개발</a>
					<div class="modal-basic">
						<div class="modal-header">
							<div class="flex-s">
								<p class="fs-28">#개발</p>
								<a href="jacascript:void(0)" class="tooltip">
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
													<button class="cl-blue">제거</button>
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
													<button class="cl-blue">제거</button>
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
													<button class="cl-blue exile-btn">제거</button>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-bottom flex-e">
							<div>
								<button class="btn-type2-gy">나가기</button>
							</div>
						</div>
					</div>
					<div class="modal-bg" @click="toggleInfo"></div>
				</div>
				<div class="modal-type2">
					<div class="modal-content">
						이 멤버를 제거하시겠습니까?
					</div>
					<div class="modal-bottom">
						<button>제거</button>
						<button>취소</button>
					</div>
				</div>
      </div>
		</div>
		<div class="p-content-area">
			
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
    }
	}
</script>

<style lang="scss" scoped>

</style>