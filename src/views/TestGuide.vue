<template>
  <div class="p-content-area">
    <h2>GUIDE</h2>

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
    </div>

    <h3 class="mt-10">Menu list(메뉴 리스트)</h3>
    <!-- class="on" 추가시 펼쳐짐-->
    <div class="p-info menu-list-wrap" v-bind:class="{ on : isOn }">
      <a href="javascript:void(0)" @click="toggleInfo"><span>클릭</span></a>
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
      <div class="modal-bg" @click="toggleInfo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOn : false,
      projectName: "Side Project(PaaS-TA)",
    }
  },
  methods: {
    toggleInfo() {
      this.isOn = !this.isOn;
    },
  }
  
}
</script>

<style>
</style>
