<template>
  <div class="side-bar">
    <div class="p-head">
      <!-- class="on" 추가시 펼쳐짐-->
      <div class="p-info menu-list-wrap">
        <a href="javascript:void(0)" class="fs-18-wh" @click="toggleInfo($event)"><span>{{ projectName }}</span></a>
        <div class="menu-list">
          <div class="menu-item">
            <router-link to="/">
              <div class="user-pic">
                <!--사용자 이미지 불러올 위치-->
                <span class="blind">사용자 프로필 사진</span>
              </div>
              <div>
                <p class="font-b">{{ projectName }}</p>
                <p class="fs-13-gy">personal-hfc1099.slack.com</p>
              </div>
            </router-link>
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
      <a href="#" class="p-new-message tooltip">
        <div class="ico-message">
          <img src="../assets/images/icon/ico-message.svg" alt="">
        </div>
        <div class="tooltip-msg">새 메시지</div>
      </a>
    </div>
    <div class="p-list">
      <div class="p-list-item" v-for="etc in etcList" v-bind:key="etc.no"
            v-bind:class="{on: etc.no===checkedNo && checked==='etc' }" 
            @click="checkItem('etc', etc.no)">
        <router-link :to="etc.path">
          <div class="ico-company">
            <img :src="etc.icon" alt="">
          </div>
          <p>{{etc.name}}</p>
        </router-link>
      </div>
      <div class="p-list-item menu-list-wrap">
        <a href="javascript:void(0)" @click="toggleInfo($event)">
          <div class="ico-more">
            <img src="../assets/images/icon/ico-more.png" alt="">
          </div>
          <p>Slack 찾아보기</p>
        </a>
        <div class="menu-list">
          <div class="menu-item">
            <a href="#">
              <div class="ico-message">
                <img src="../assets/images/icon/ico-message.svg" alt="">
              </div>
              <p>읽지 않은 모든 항목</p>
            </a>
            <a href="#">
              <div class="ico-message">
                <img src="../assets/images/icon/ico-message.svg" alt="">
              </div>
              <p>모든 DM</p>
              <div class="shortcut-keys">Ctrl+Shift+K</div>
            </a>
            <a href="#">
              <div class="ico-message">
                <img src="../assets/images/icon/ico-message.svg" alt="">
              </div>
              <p>멘션 및 반응</p>
            </a>
          </div>
          <div class="menu-item">
            <a href="#">
              <div class="ico-message">
                <img src="../assets/images/icon/ico-message.svg" alt="">
              </div>
              <p>Slack Connect</p>
            </a>
            <a href="#">
              <div class="ico-message">
                <img src="../assets/images/icon/ico-message.svg" alt="">
              </div>
              <p>채널 브라우저</p>
              <div class="shortcut-keys">Ctrl+Shift+L</div>
            </a>
            <a href="#">
              <div class="ico-message">
                <img src="../assets/images/icon/ico-message.svg" alt="">
              </div>
              <p>파일 브라우저</p>
            </a>
            <a href="#">
              <div class="ico-message">
                <img src="../assets/images/icon/ico-message.svg" alt="">
              </div>
              <p>사람 및 사용자 그룹</p>
              <div class="shortcut-keys">Ctrl+Shift+E</div>
            </a>
            <a href="#">
              <div class="ico-message">
                <img src="../assets/images/icon/ico-message.svg" alt="">
              </div>
              <p>앱</p>
            </a>
          </div>
          <div class="menu-item">
            <a href="#">
              <p class="fs-13"><span class="cl-blue font-b">환경설정</span>에서 이 목록을 사용자 지정하세요.</p>
            </a>
          </div>
        </div>
        <div class="modal-bg" @click="toggleInfo($event)">
        </div>
      </div>
      <div class="p-list-item accordion-menu-wrap menu-list-wrap" :class="{ on : isActive }" @contextmenu.prevent>
        <a href="javascript:void(0)" @click="toggleInfo3" @mousedown.right="rightList" @contextmenu.prevent>채널</a>
				<!-- 우클릭시 펼쳐짐 -->			
				<div class="menu-list">
					<div class="menu-item">
						<a href="#">
							<p>채널 로그아웃</p>
						</a>
						<a href="#">
							<p>채널 관리</p>
						</a>
					</div>
				</div>
				<div class="modal-bg" @click="rightList">
				</div>
        <div class="accordion-menu" v-bind:class="{ on : isOn3 }">
          <ul>
            <li v-for="channel in channelList" v-bind:key="channel.no"
                v-bind:class="{on: channel.no===checkedNo && checked==='channel' }" 
                @click="checkItem('channel', channel.no)">
              <a href="#">
                <div class="ico-hash">
                  <img src="../assets/images/icon/ico-hash.png" alt="">
                </div>
                <p>{{channel.name}}</p>
              </a>
            </li>
            <li class="add-btn menu-list-wrap" :class="{ on : isOn2 }">
              <a href="javascript:void(0)" @click="toggleInfo2">
                <div class="ico-add">
                  <img src="../assets/images/icon/ico-add.png" alt="">
                </div>
                <p>채널 추가</p>
              </a>
							<div class="menu-list">
								<div class="menu-item">
									<a href="#">
										<p v-on:click="showCreateModal">새 채널 생성</p>
									</a>
									<a href="#">
										<p>모든 채널 탐색</p>
									</a>
								</div>
							</div>
							<div class="modal-bg" @click="toggleInfo2">
							</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="p-list-item accordion-menu-wrap">
        <a href="#" @click="toggleInfo4">다이렉트 메시지</a>
        <div class="accordion-menu " :class="{ on : isOn4 }">
          <ul >
            <li v-for="dm in dmList" v-bind:key="dm.no" class="user-display" 
                v-bind:class="{on: dm.no===checkedNo && checked==='dm' }" 
                @click="checkItem('dm', dm.no)">
              <a href="#">
                <div class="ico-user">
                  <img :src="dm.profilePicture" alt="">
                </div>
                <p>{{dm.name}} <span v-if="dm.no===me">나</span></p>
              </a>
            </li>
            <li class="add-btn type2">
              <a href="#">
                <div class="ico-add">
                  <img src="../assets/images/icon/ico-add.png" alt="">
                </div>
                <p>팀원 추가</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        projectName: "Side Project(PaaS-TA)",
        isOn2 : false,
        isOn3 : true,
        isOn4 : true,
        isActive : false,
        me: 1,
        checked: "dm", //dm, channel, etc
        checkedNo: 1,
        showModal: false,
        dmList : [
          {
            no:0,
            name: "남동윤",
            profilePicture: require("../assets/images/icon/ico-user.png")
          },
          {
            no:1,
            name: "최석준",
            profilePicture: require("../assets/images/icon/ico-user.png")
          },
          {
            no:2,
            name: "강민지",
            profilePicture: require("../assets/images/icon/ico-user.png")
          }
        ],
        channelList : [
          {
            no:0,
            name: "랜덤",
          },
          {
            no:1,
            name: "일반",
          },
          {
            no:2,
            name: "테스트",
          },
        ],
        etcList:[
          {
            no:0,
            name: "Page List",
            path: "/",
            icon: require("../assets/images/icon/ico-company.png")
          },
          {
            no:1,
            name: "GUIDE",
            path: "/TestGuide",
            icon: require("../assets/images/icon/ico-company.png")
          },
          {
            no:2,
            name: "채널 브라우저",
            path: "/ChannelBrowser",
            icon: require("../assets/images/icon/ico-company.png")
          },
        ]
      }
    },
    methods: {
			toggleInfo(event) {
				event.target.parentNode.classList.toggle("on")
			},
      toggleInfo2() {
        this.isOn2 = !this.isOn2;
      },
      toggleInfo3() {
        this.isOn3 = !this.isOn3;
      },
      toggleInfo4() {
        this.isOn4 = !this.isOn4;
      },
			rightList() {
				this.isActive = !this.isActive
			},
			selectItem(event) {
				event.target.parentNode.classList.toggle("on");
			},
      checkItem: function(checked, checkedNo){
        this.checked = checked;
        this.checkedNo = checkedNo;
      },
      showCreateModal: function(){
        this.toggleInfo2();
        this.$emit('showCreateChannel')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>