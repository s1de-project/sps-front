<template>
  <div>
		<div class="title-area">
      <div class="c-info">
        <a href="javascript:void(0)" class="fs-18">#개발</a>
        
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
				
        showModal: false,
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