<template lang="html">
  <div class="button-box">
    <a class="button" @click="redirect('/list')"><img src="../assets/list.png" width="30px" height="30px" /></a>
    <a class="button fleft" @click="redirect('/')"><img src="../assets/map.png" width="30px" height="30px" /></a>
  </div>
</template>

<script>
export default {
  name: 'but',
  methods: {
    redirect (page) {
      this.$router.push(page)
    }
  }
}
</script>

<style lang="css">
.fleft {
  margin-left:-5px;
}
.button-box{
  float:right;
}
</style>
