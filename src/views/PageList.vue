<template>
  <div class="p-content-area">
    <!-- <h2>Page List</h2>
    <div class="mt-10">
      <router-link to="/">HOME</router-link>
    </div>
    <div class="mt-10">
      <router-link to="/">HOME</router-link>
    </div> -->
		<div class="page-list-wrap">
			<!-- TITLE -->
			<h2 class="page-list-tit">{{ projectName }}</h2>
			<!-- // TITLE -->
			<!-- CONTENT -->
			<div class="page-list-content">
				<!-- TOP -->
				<div class="tb-top">
					<dl>
						<dt>Information</dt>
						<dd>{{ projectName }}</dd>
					</dl>
					<dl>
						<dt>진행상황</dt>
						<dd>
							<dl>
								<dt>전체페이지 : </dt>
								<dd class="flag-total">0p</dd>
							</dl>
							<dl>
								<dt>작업완료 : </dt>
								<dd class="flag-end">0p</dd>
							</dl>
							<dl>
								<dt>수정파일 : </dt>
								<dd class="flag-edit">0p</dd>
							</dl>
							<dl>
								<dt>진행율 : </dt>
								<dd class="flag-progress">0%</dd>
							</dl>
						</dd>
					</dl>
				</div>
				<!-- GUIDE -->
				<ul class="list-style-type1">
					<li>작업완료 후 <span class="cl-blue">YY.MM.DD</span>명시
						<div class="menu-list-wrap" v-bind:class="{ on : isOn }">
							<a href="javascript:void(0)" @click="toggleInfo" class="flag-end">작성방법</a>
							<div class="menu-list">
								&lt;tr&gt;<br>
								&nbsp;&lt;td class="d1"&gt;&lt;/td&gt;<br>
								&nbsp;&lt;td class="d2"&gt;&lt;/td&gt;<br>
								&nbsp;&lt;td class="d3"&gt;&lt;/td&gt;<br>
								&nbsp;&lt;td class="d4"&gt;&lt;/td&gt;<br>
								&nbsp;&lt;td class="d5"&gt;&lt;/td&gt;<br>
								&nbsp;&lt;td class="director"&gt;*/*&lt;/td&gt;<br>
								&nbsp;&lt;td class="file"&gt;*.html&lt;/td&gt;<br>
								&nbsp;&lt;td class="date"&gt;<br>
								&nbsp;&nbsp;&lt;ul class="hislist"&gt;<br>
								&nbsp;&nbsp;&nbsp;&lt;li&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="#none" class="btn"&gt;00.00.00&lt;/a&gt;<br>
								&nbsp;&nbsp;&nbsp;&lt;/li&gt;<br>
								&nbsp;&nbsp;&lt;/ul&gt;<br>
								&nbsp;&lt;/td&gt;<br>
								&nbsp;&lt;td class="memo"&gt;&lt;/td&gt;<br>
								&lt;/tr&gt;
							</div>
							<div class="modal-bg" @click="toggleInfo">
							</div>
						</div>
					</li>
					<li>수정이력 발생 시
						<div class="menu-list-wrap" v-bind:class="{ on : isOn2 }">
							<a href="javascript:void(0)" @click="toggleInfo2" class="flag-edit">작성방법</a>
							<div class="menu-list">
								&lt;tr&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;td class="d1"&gt;&lt;/td&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;td class="d2"&gt;&lt;/td&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;td class="d3"&gt;&lt;/td&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;td class="d4"&gt;&lt;/td&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;td class="d5"&gt;&lt;/td&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;td class="director"&gt;*/*&lt;/td&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;td class="file"&gt;*.html&lt;/td&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;td class="date"&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul class="editlist"&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="#none" class="btn up tip"&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;00.00.00<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;00.00.00 - 1.주석명 : 00.00.00 ~ 수정&lt;/li&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;00.00.00 - 1.주석명 : 00.00.00 ~ 수정&lt;br&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.주석명 : 00.00.00 ~ 수정<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;00.00.00 - 1.완료&lt;/li&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;/td&gt;<br>
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;td class="memo"&gt;&lt;/td&gt;<br>
								&lt;/tr&gt;
							</div>
							<div class="modal-bg" @click="toggleInfo2">
							</div>
						</div>
					</li>
					<li>
						<span class="flag-hold">hold</span> : 보류, 
						<span class="flag-del">del</span> : 삭제, 
						<span class="flag-guide">guide</span> : 가이드, 
						<span class="flag-link">link</span> : 링크, 
						<span class="flag-nohtml">nohtml</span> : html페이지 아님
					</li>
				</ul>
				<!-- TAB MENU -->
				<div class="tab-cont-wrap">
					<!-- TAB BTN-->
					<ul class="tab-btn">
						<li v-for="(tab, index) in tabs" :key="index" :class="{active:currentTab === index}">
							<a href="javascript:;" @click="currentTab = index">{{ tab }}</a>
						</li>
						<!-- <li>
							<a href="javascript:;">전체보기</a>
						</li> -->
					</ul>
					<!-- TAB CONTENT -->
					<div class="tab-content">
						<div v-show="currentTab == 0">
							<div class="tb-con-wrap">
								<table>
									<caption>페이지 리스트</caption>
									<colgroup>
										<col />
										<col />
										<col />
										<col />
										<col />
										<col />
										<col />
										<col />
										<col />
									</colgroup>
									<thead>
										<tr>
											<th scope="col" colspan="3">논리경로</th>
											<th scope="col" rowspan="2">DIRECTORY</th>
											<th scope="col" rowspan="2">FILE</th>
											<th scope="col" rowspan="2">완료일/<br />수정이력</th>
											<th scope="col" rowspan="2">메모</th>
										</tr>
										<tr>
											<th scope="col">D1</th>
											<th scope="col">D2</th>
											<th scope="col">D3</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="d1" rowspan="3">공통</td>
											<td class="d2">메인</td>
											<td class="d3"></td>
											<td class="director">/</td>
											<td class="file">TestGuide.vue</td>
											<td class="date">
												<ul class="hislist">
													<li>
														<router-link to="/" class="flag-none">22.05.26</router-link>
													</li>
												</ul>
											</td>
											<td class="memo"></td>
										</tr>
										<tr>
											<td class="d2">페이지리스트</td>
											<td class="d3"></td>
											<td class="director">/</td>
											<td class="file">PageList.vue</td>
											<td class="date">
												<ul class="hislist">
													<li>
														<router-link to="/" class="flag-end">22.05.26</router-link>
													</li>
												</ul>
											</td>
											<td class="memo"></td>
										</tr>
										<tr>
											<td class="d2">가이드</td>
											<td class="d3"></td>
											<td class="director">/TestGuide</td>
											<td class="file">TestGuide.vue</td>
											<td class="date">
												<ul class="hislist">
													<li>
														<router-link to="/TestGuide" class="flag-guide">22.05.26</router-link>
													</li>
												</ul>
											</td>
											<td class="memo"></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div v-show="currentTab == 1">
							
							<div class="tb-con-wrap">
								<table>
									<caption>페이지 리스트</caption>
									<colgroup>
										<col />
									</colgroup>
									<thead>
										<tr>
											<th scope="col" colspan="3">논리경로</th>
											<th scope="col" rowspan="2">DIRECTORY</th>
											<th scope="col" rowspan="2">FILE</th>
											<th scope="col" rowspan="2">완료일/<br />수정이력</th>
											<th scope="col" rowspan="2">메모</th>
										</tr>
										<tr>
											<th scope="col">D1</th>
											<th scope="col">D2</th>
											<th scope="col">D3</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="d1"></td>
											<td class="d2"></td>
											<td class="d3"></td>
											<td class="director">*/*</td>
											<td class="file">*.vue</td>
											<td class="date">
												<ul class="editlist">
													<li>
														<router-link to="#none" class="flag-edit">
															00.00.00
															<ul>
																<li>00.00.00<br />1.주석명 : 00.00.00 ~ 수정</li>
																<li>
																		00.00.00<br />1.주석명 : 00.00.00 ~ 수정<br />
																		2.주석명 : 00.00.00 ~ 수정
																</li>
																<li>00.00.00<br />1.완료</li>
															</ul>
														</router-link>
													</li>
												</ul>
											</td>
											<td class="memo">수정파일 예시</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- // CONTENT -->
		</div>
  </div>
</template>

<script>
  export default {
		name: 'PageList',
		data() {
			return {
        projectName: "Side Project(PaaS-TA)",
				isOn : false,
				isOn2 : false,
				currentTab: 0,
				tabs: ['tab1', 'tab2']
			}
		},
		methods: {
			toggleInfo() {
				this.isOn = !this.isOn;
			},
			toggleInfo2() {
				this.isOn2 = !this.isOn2;
			},

		}
  }
</script>

<style scoped>
</style>