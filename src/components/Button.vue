<template lang="html">
  <div class="but">
    <a class="button" @click="redirect('/list')"><img src="../assets/list.png" width="30px" height="30px" /></a>
    <a class="button" id="fleft" @click="redirect('/map')"><img src="../assets/map.png" width="30px" height="30px" /></a>
  </div>
</template>

<script>
export default {
  name: 'but',
  data () {
    return {
      page: ''
    }
  },
  methods: {
    redirect (page) {
      this.$router.push(page)
    }
  }
}
</script>

<style lang="css">
#fleft {
  margin-left:-5px;
}
</style>
