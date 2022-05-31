<template>
	<div>
		<div class="title-area">
			<h3 class="fs-18">“화면설계서”에 대한 검색 결과</h3>
			<div>
				<a href="javascript:;">
					<div class="ico-close">
						<img src="../assets/images/icon/ico-close.png" alt="닫기">
					</div>
				</a>
			</div>
		</div>
		<div class="tab-cont-wrap">
			<ul class="tab-btn">
				<li v-for="(tab, index) in tabs" :key="index" :class="{active:currentTab === index}">
					<a href="javascript:;" @click="currentTab = index">{{ tab }} <span class="cl-gray">13</span></a>
				</li>
			</ul>
			<div class="tab-content">
				<div v-show="currentTab == 0" class="p-content-area">
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
							<button class="select-btn" @click="toggleInfo($event)">In</button>
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
							<button class="select-btn font-b" @click="toggleInfo($event)">대화 상대</button>
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
						<div class="select-box-wrap">
							<button class="select-btn font-b" @click="toggleInfo($event)">반응</button>
							<div class="select-option">
								<div class="division">
									<div class="check-list">
										<p class="fs-13-gy">내가 보냄</p>
										<div class="select-item-check">
											<div>
												<input type="checkbox">
												<label for="" class="blind">사용자 선택 체크 박스</label>
											</div>
											<div class="ico-emoticon">
												<img src="../assets/images/icon/ico-emoticon.png" alt="이모티콘">
											</div>
											<div>:eyes</div>
										</div>
										<div class="select-item-check">
											<div>
												<input type="checkbox">
												<label for="" class="blind">사용자 선택 체크 박스</label>
											</div>
											<div class="ico-emoticon">
												<img src="../assets/images/icon/ico-emoticon.png" alt="이모티콘">
											</div>
											<div>:eyes</div>
										</div>
										<div class="select-item-check">
											<div>
												<input type="checkbox">
												<label for="" class="blind">사용자 선택 체크 박스</label>
											</div>
											<div class="ico-emoticon">
												<img src="../assets/images/icon/ico-emoticon.png" alt="이모티콘">
											</div>
											<div>:eyes</div>
										</div>
									</div>
								</div>
								<div class="check-list">
									<p class="fs-13-gy">모든 발신자</p>
									<div class="select-item-check">
										<div>
											<input type="checkbox">
											<label for="" class="blind">사용자 선택 체크 박스</label>
										</div>
										<div class="ico-emoticon">
											<img src="../assets/images/icon/ico-emoticon.png" alt="이모티콘">
										</div>
										<div>:eyes</div>
									</div>
									<div class="select-item-check">
										<div>
											<input type="checkbox">
											<label for="" class="blind">사용자 선택 체크 박스</label>
										</div>
										<div class="ico-emoticon">
											<img src="../assets/images/icon/ico-emoticon.png" alt="이모티콘">
										</div>
										<div>:eyes</div>
									</div>
									<div class="select-item-check">
										<div>
											<input type="checkbox">
											<label for="" class="blind">사용자 선택 체크 박스</label>
										</div>
										<div class="ico-emoticon">
											<img src="../assets/images/icon/ico-emoticon.png" alt="이모티콘">
										</div>
										<div>:eyes</div>
									</div>
								</div>
								<div class="select-item">
									<a href="#">더 많은 반응</a>
								</div>
							</div>
							<div class="modal-bg" @click="toggleInfo($event)">
							</div>
						</div>
						<a href="#" class="fs-13 link">필터 더보기</a>
					</div>
					<div class="notice-info">
						<div class="ico-clock">
							<img src="../assets/images/icon/ico-clock.png" alt="닫기">
						</div>
						<p>
							무료 평가판 기능 중 하나로, <strong>팀의 전체 메시지 아카이브를 검색</strong>하여 특정 메시지나 파일을 찾을 수 있는 기능이 제공되며, 공유된 지 아무리 오래되어도 이 기능으로 검색이 가능합니다.
							<a href="#" class="link font-b">자세히 알아보기</a>
						</p>
					</div>
					<div class="card-list">
						<div class="flex-s">
							<div class="select-box-wrap">
								<div class="fs-13 select-btn no-border" @click="toggleInfo($event)"><strong>정렬: </strong>가장 관련 있음</div>
								<div class="select-option mb-10">
									<div class="select-item checked">
										<a href="#">가장 관련 있음</a>
									</div>
									<div class="select-item">
										<a href="#">최신 메시지 순</a>
									</div>
									<div class="select-item">
										<a href="#">오래된 메시지 순</a>
									</div>
								</div>
								<div class="modal-bg" @click="toggleInfo($event)">
								</div>
							</div>
							<div class="select-box-wrap">
								<div class="fs-13 select-btn no-border" @click="toggleInfo($event)"><strong>표시: </strong>페이지당 20개의 결과</div>
								<div class="select-option mb-10">
									<div class="select-item checked">
										<a href="#">페이지당 20개의 결과</a>
									</div>
									<div class="select-item">
										<a href="#">페이지당 50개의 결과</a>
									</div>
									<div class="select-item">
										<a href="#">페이지당 100개의 결과</a>
									</div>
									<div class="select-item">
										<a href="#">모든 결과</a>
									</div>
								</div>
								<div class="modal-bg" @click="toggleInfo($event)">
								</div>
							</div>
						</div>
						<div class="card-item">
							<div class="fs-13">
								<strong class="font-b">#정보</strong>
								<span class="cl-gray"> - 5월 25일</span>
							</div>
							<div class="flex-s-b mt-10">
								<div class="ico-user mr-10">
									<img src="../assets/images/icon/ico-user.png" alt="사용자 프로필 사진">
								</div>
								<div>
									<dl class="flex-s mb-5">
										<dt class="font-b mr-10">남동윤</dt>
										<dd class="fs-13-gy">오후 8:09</dd>
									</dl>
									<p>취합해본 화면설계서 파일입니다.<br />취합해본 화면</p>
									<div class="flex-s">
										<div class="ico-emoticon">
											<img src="../assets/images/icon/ico-emoticon.png" alt="닫기">
										</div>
										<p class="fs-13-gy">1개의 반응</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-show="currentTab == 1" class="p-content-area">
					content
				</div>
				<div v-show="currentTab == 2" class="p-content-area">
					content
				</div>
				<div v-show="currentTab == 3" class="p-content-area">
					content
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
				tabs: ['메시지', '파일', '채널', '사람'],
			}
		},
		methods : {
			toggleInfo(event) {
				event.target.parentNode.classList.toggle("on")
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>