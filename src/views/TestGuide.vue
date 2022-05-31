<template>
  <div class="p-content-area">
    <h2>GUIDE</h2>
		
    <h3 class="mt-10">폰트</h3>
		<div class="flex-s">
			<p class="fs-28">제목1</p>
			<p class="fs-18">제목2</p>
			<p class="fs-18-wh">제목2</p>
			<p class="fs-13">제목3</p>
			<p class="fs-13-gy">제목3</p>
			<p class="fs-13-wh">제목3</p>
			<p class="font-b">볼드</p>
			<p>텍스트</p>
			<p class="cl-gray">그레이</p>
			<p class="cl-blue">블루</p>
			<a href="#none" class="link">링크</a>
		</div>

    <h3 class="mt-10">Tooltip(툴팁)</h3>
    <div class="flex-s">
      왼쪽
      <a href="javascript:void(0)" class="tooltip ml-10">
        <div class="ico-clock">
          <img src="@/assets/images/icon/ico-clock.png" alt="">
        </div>
        <div class="tooltip-msg-left">내역</div>
      </a>
      중앙
      <a href="javascript:void(0)" class="tooltip ml-10">
        <div class="ico-clock">
          <img src="@/assets/images/icon/ico-clock.png" alt="">
        </div>
        <div class="tooltip-msg">내역</div>
      </a>
      오른쪽
      <a href="javascript:void(0)" class="tooltip ml-10">
        <div class="ico-clock">
          <img src="@/assets/images/icon/ico-clock.png" alt="">
        </div>
        <div class="tooltip-msg-right">내역</div>
      </a>
      위
      <a href="javascript:void(0)" class="tooltip ml-10">
        <div class="ico-clock">
          <img src="@/assets/images/icon/ico-clock.png" alt="">
        </div>
        <div class="tooltip-msg-top">내역</div>
      </a>
    </div>

    <h3 class="mt-10">Menu list(메뉴 리스트)</h3>
    <!-- class="on" 추가시 펼쳐짐-->
    <div class="p-info menu-list-wrap">
      <a href="javascript:void(0)" @click="toggleInfo($event)"><span>클릭</span></a>
      <div class="menu-list">
        <div class="menu-item">
          <a href="#">
            <div class="user-pic">
              <!--사용자 이미지 불러올 위치-->
              <span class="blind">사용자 프로필 사진</span>
            </div>
            <div>
              <p class="font-b">{{ projectName }}</p>
              <p class="fs-13-gy">personal-hfc1099.slack.com</p>
            </div>
          </a>
        </div>
        <div class="menu-item">
          <a href="#">
            <p class="fs-13">
              고객님의 워크스페이스에서는 현재 Slack 무료 버전을 사용하고 있습니다.
              <strong class="cl-blue">플랜 보기</strong>
            </p>
          </a>
        </div>
        <div class="menu-item">
          <a href="#">
            <p>personal에 사용자 초대</p>
          </a>
          <a href="#">
            <p>채널 생성</p>
          </a>
        </div>
        <div class="menu-item">
          <a href="#">
            <p>환경설정</p>
          </a>
          <div class="depth">
            <p>설정 및 관리</p>
            <div class="two-depth">
              <div>
                <p class="fs-13-gy">설정</p>
                <a href="#">워크스페이스 설정</a>
                <a href="#">personal 사용자 지정</a>
                <a href="#">워크스페이스 세부정보 편집</a>
              </div>
              <div>
                <p class="fs-13-gy">관리</p>
                <a href="#">멤버 관리</a>
                <a href="#">앱 관리</a>
              </div>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <div class="depth">
            <p>도구</p>
            <div class="two-depth">
              <a href="#">워크플로 빌더</a>
              <a href="#" target="_blank">분석</a>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <div class="depth">
            <p>워크스페이스 추가</p>
            <div class="two-depth">
              <a href="#">다른 워크스페이스에 로그인</a>
              <a href="#">새 워크스페이스 개설</a>
              <a href="#">워크스페이스 찾기</a>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <a href="#">
            <p>데스크톱 앱 열기</p>
          </a>
          <a href="#">
            <p>모바일에서 로그인하기</p>
          </a>
        </div>
        <div class="menu-item">
          <a href="#">
            <p>personal에서 로그아웃</p>
          </a>
        </div>
      </div>
      <div class="modal-bg" @click="toggleInfo($event)">
      </div>
    </div>

		<h3 class="mt-10">버튼</h3>
		<button class="btn-type1">채널 생성</button>
		<button class="btn-type2">채널 생성</button>
		<button class="btn-type2-gr">채널 생성</button>

		<h3 class="mt-10">타이틀</h3>
		<div class="title-area">
			<h3 class="fs-18">채널 브라우저</h3>
		</div>

		<h3 class="mt-10">모달창</h3>
		<div class="modal-wrap" :class="{ on : isOn2 }">
			<button class="btn-type1 modal-btn" @click="toggleInfo2">채널 생성</button>
			<div class="modal-basic">
				<div class="modal-header">
					<!-- 비공개 체크시 "비공개 채널 생성" -->
					<p class="fs-28">채널 생성</p>
					<a href="javascript:;" @click="toggleInfo2">
						<div class="ico-close">
							<img src="../assets/images/icon/ico-close.png" alt="">
							<span class="blind">닫기</span>
						</div>
					</a>
				</div>
				<div class="modal-content">
					content
				</div>
				<div class="modal-bottom flex-sb">
					<div>
						<button class="btn-type2-gy">생성</button>
					</div>
				</div>
			</div>
			<div class="modal-bg" @click="toggleInfo2"></div>
		</div>
		
		<h3 class="mt-10">탭메뉴</h3>
		<div class="tab-cont-wrap">
			<ul class="tab-btn">
				<li v-for="(tab, index) in tabs" :key="index" :class="{active:currentTab === index}">
					<a href="javascript:;" @click="currentTab = index">{{ tab }}</a>
				</li>
			</ul>
			<div class="tab-content">
				<div v-show="currentTab == 0">
					content1
				</div>
				<div v-show="currentTab == 1">
					content2
				</div>
			</div>
		</div>
		
		<h3 class="mt-10">서치</h3>
		<div class="search-box">
			<label for="" class="blind">채널 검색</label>
			<input type="text" placeholder="채널 이름이나 설명으로 검색">
		</div>

		<h3 class="mt-10">셀렉트 박스</h3>
		<div class="flex-s">
			<div class="select-box-wrap">
				<button class="select-btn" @click="toggleInfo($event)">From</button>
				<div class="select-option">
					<div class="division">
						<div class="search-box">
							<label for="" class="blind">채널 검색</label>
							<input type="text" placeholder="예: 김화윤">
						</div>
						<div class="select-item-check">
							<div>
								<input type="checkbox" checked>
								<label for="" class="blind">사용자 선택 체크 박스</label>
							</div>
							<div class="ico-user">
								<img src="../assets/images/icon/ico-user.png" alt="사용자프로필">
							</div>
							<div>홍길동<span>(나)</span></div>
						</div>
					</div>
					<div class="check-list">
						<p class="fs-13-gy">제안</p>
						<div class="select-item-check">
							<div>
								<input type="checkbox">
								<label for="" class="blind">사용자 선택 체크 박스</label>
							</div>
							<div class="ico-user">
								<img src="../assets/images/icon/ico-user.png" alt="사용자프로필">
							</div>
							<div>홍길동</div>
						</div>
						<div class="select-item-check">
							<div>
								<input type="checkbox">
								<label for="" class="blind">사용자 선택 체크 박스</label>
							</div>
							<div class="ico-user">
								<img src="../assets/images/icon/ico-user.png" alt="사용자프로필">
							</div>
							<div>홍길동</div>
						</div>
						<div class="select-item-check">
							<div>
								<input type="checkbox">
								<label for="" class="blind">사용자 선택 체크 박스</label>
							</div>
							<div class="ico-user">
								<img src="../assets/images/icon/ico-user.png" alt="사용자프로필">
							</div>
							<div>홍길동</div>
						</div>
					</div>
				</div>
				<div class="modal-bg" @click="toggleInfo($event)">
				</div>
			</div>
			<div class="select-box-wrap">
				<button class="select-btn font-b" @click="toggleInfo($event)">날짜</button>
				<div class="select-option mb-10">
					<ul class="division">
						<li class="select-item checked">
							<a href="#">모든 기간</a>
						</li>
						<li class="select-item">
							<a href="#">Today</a>
						</li>
						<li class="select-item">
							<a href="#">Yesterday</a>
						</li>
						<li class="select-item">
							<a href="#">지난 7일</a>
						</li>
						<li class="select-item">
							<a href="#">지난 30일</a>
						</li>
						<li class="select-item">
							<a href="#">마지막 3개월</a>
						</li>
						<li class="select-item">
							<a href="#">마지막 12개월</a>
						</li>
					</ul>
					<div class="select-item">
						<a href="#">날짜</a>
					</div>
					<div class="select-item">
						<a href="#">이전...</a>
					</div>
					<div class="select-item">
						<a href="#">이후...</a>
					</div>
					<div class="select-item">
						<a href="#">기간...</a>
					</div>
				</div>
				<div class="modal-bg" @click="toggleInfo($event)">
				</div>
			</div>
		</div>

		<h3 class="mt-10">info</h3>
		<div class="notice-info">
			<div class="ico-clock">
				<img src="../assets/images/icon/ico-clock.png" alt="닫기">
			</div>
			<p>
				무료 평가판 기능 중 하나로, <strong>팀의 전체 메시지 아카이브를 검색</strong>하여 특정 메시지나 파일을 찾을 수 있는 기능이 제공되며, 공유된 지 아무리 오래되어도 이 기능으로 검색이 가능합니다.
				<a href="#" class="link font-b">자세히 알아보기</a>
			</p>
		</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOn2 : false,
      projectName: "Side Project(PaaS-TA)",
			currentTab: 0,
			tabs: ['tab1', 'tab2']
    }
  },
  methods: {
		toggleInfo(event) {
			event.target.parentNode.classList.toggle("on")
		},
    toggleInfo2() {
      this.isOn2 = !this.isOn2;
    },
  }
  
}
</script>

<style>
</style>
