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
      <a href="javascript:void(0)" class="tooltip">
        <p>{{ textContents }}</p>
        <div class="ico-search">
          <img src="../assets/images/icon/ico-search.png" alt="">
        </div>
        <div class="tooltip-msg">
          {{ textContents }}<br />
          Ctrl + G
        </div>
      </a>
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
        textContents: 'Side Project(PaaS-TA) 검색'
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