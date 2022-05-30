<template>
  <div>
		<div class="title-area">
			<h3 class="fs-18">채널 브라우저</h3>
			<div class="modal-wrap">
				<button class="btn-type1 modal-btn">채널 생성</button>
				<div class="modal-basic">
					<div class="modal-header">
						<p>채널 생성</p>
					</div>
					<div class="modal-content"></div>
				</div>
				<div class="modal-bg"></div>
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
		
	}
</script>

<style lang="scss" scoped>

</style>