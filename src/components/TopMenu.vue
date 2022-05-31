<template>
  <div class="header-menu">
    <div class="p-history">
      <div class="menu-list-wrap" v-bind:class="{ on : isOn }">
        <a href="javascript:void(0)" class="tooltip" @click="toggleInfo">
          <div class="ico-clock">
            <img src="../assets/images/icon/ico-clock.png" alt="">
          </div>
          <div class="tooltip-msg-left">내역</div>
        </a>
        <div class="menu-list">
          <div class="menu-item">
            <p class="fs-13-gy">최근</p>
            <a href="#">
              <div class="ico-company">
                <img src="../assets/images/icon/ico-company.png" alt="">
              </div>
              <p>Slack Connect</p>
            </a>
            <a href="#">
              <div class="ico-hash">
                <img src="../assets/images/icon/ico-hash.png" alt="">
              </div>
              <p>일반</p>
            </a>
            <a href="#">
              <div class="ico-hash">
                <img src="../assets/images/icon/ico-hash.png" alt="">
              </div>
              <p>일반</p>
            </a>
            <a href="#">
              <div class="ico-hash">
                <img src="../assets/images/icon/ico-hash.png" alt="">
              </div>
              <p>일반</p>
            </a>
            <a href="#">
              <div class="ico-hash">
                <img src="../assets/images/icon/ico-hash.png" alt="">
              </div>
              <p>일반</p>
            </a>
            <a href="#" class="user-display">
              <div class="ico-user">
                <img src="../assets/images/icon/ico-user.png" alt="">
              </div>
              <p>
                강민지 <span>(나)</span>
                
              </p>
            </a>
          </div>
        </div>
        <div class="modal-bg" @click="toggleInfo">
        </div>
      </div>
    </div>
    <div class="p-search">
      <a href="javascript:void(0)" class="tooltip" @click="toggleInfo2">
        <p>{{ textContents }}</p>
        <div class="ico-search">
          <img src="../assets/images/icon/ico-search.png" alt="">
        </div>
        <div class="tooltip-msg">
          {{ textContents }}<br />
          Ctrl + G
        </div>
      </a>
			<div class="modal-wrap modal-bg-trans" :class="{ on : isOn2}">
				<div class="search-modal">
					<div class="search-box-type2">
						<input type="text" placeholder="스크롤하는 것보다 빠를 테니 검색하세요.">
						<a href="javascript:;" class="tooltip">
							<div class="ico-filter">
								<img src="../assets/images/icon/ico-filter.png" alt="">
							</div>
							<div class="tooltip-msg">
								필터
							</div>
						</a>
					</div>
					<div class="search-content">
						<div class="f-category">
							<p class="fs-13-gy">찾고 있는 것은...</p>
							<ul>
								<li>
									<a href="#">
										<span class="ico-filter">
											<img src="../assets/images/icon/ico-filter.png" alt="">
										</span>
										메시지
									</a>
								</li>
								<li>
									<a href="#">
										<span class="ico-filter">
											<img src="../assets/images/icon/ico-filter.png" alt="">
										</span>
										파일
									</a>
								</li>
								<li>
									<a href="#">
										<span class="ico-filter">
											<img src="../assets/images/icon/ico-filter.png" alt="">
										</span>
										채널
									</a>
								</li>
								<li>
									<a href="#">
										<span class="ico-filter">
											<img src="../assets/images/icon/ico-filter.png" alt="">
										</span>
										사람
									</a>
								</li>
							</ul>
						</div>
						<div class="last-search">
							<p class="fs-13-gy">최근 검색</p>
							<ul>
								<li>
									<a href="#">
										화면설계서
										<span>ㅡ 메시지, 파일 등 검색</span>
									</a>
									<button>
										<div class="ico-close">
											<img src="../assets/images/icon/ico-close.png" alt="">
											<span class="blind">닫기</span>
										</div>
									</button>
								</li>
								<li>
									<a href="#">
										채널브라우저
										<span>ㅡ 메시지, 파일 등 검색</span>
									</a>
									<button>
										<div class="ico-close">
											<img src="../assets/images/icon/ico-close.png" alt="">
											<span class="blind">닫기</span>
										</div>
									</button>
								</li>
							</ul>
						</div>
						<div class="search-bottom">
							<p>예상한 결과가 아니었나요?</p>
							<a href="#">자세히 알아보기</a>
						</div>
					</div>
					<a href="javascript:;" class="tooltip close-btn" @click="toggleInfo2">
						<div class="ico-close">
							<img src="../assets/images/icon/ico-close.png" alt="">
						</div>
						<div class="tooltip-msg">
							검색 닫기
						</div>
					</a>
				</div>
				<div class="modal-bg" @click="toggleInfo2"></div>
			</div>
    </div>
    <div class="p-user-info">
      <a href="javascript:void(0)" class="tooltip">
        <div class="ico-question">
          <img src="../assets/images/icon/ico-question.png" alt="">
        </div>
        <div class="tooltip-msg">도움말</div>
      </a>
      <a href="javascript:void(0)" class="tooltip">
        <div class="ico-user">
          <img src="../assets/images/icon/ico-user.png" alt="">
        </div>
        <div class="tooltip-msg-right">강민지</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOn : false,
        isOn2 : false,
        textContents: 'Side Project(PaaS-TA) 검색'
      }
    },
    methods : {
      toggleInfo() {
        this.isOn = !this.isOn;
      },
      toggleInfo2() {
        this.isOn2 = !this.isOn2;
      },
    }
    
  }
</script>

<style lang="scss" scoped>

</style>