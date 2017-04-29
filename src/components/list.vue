<template lang="html">
  <div class="list">
    {{ running }}
    <p v-for="(List, key, index) in Lists.results">
    Name :  {{ List.name }}<br/>
    Address : {{ List.vicinity }}
    <br/><br/>
    </p>
  </div>
</template>
<script>
export default {
  name: 'list',
  data () {
    return {
      Lists: '',
      num: 0
    }
  },
  computed: {
    running: function () {
      this.axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=14.1590111%2C101.3459433&radius=5000&type=car&keyword=repair&key=AIzaSyDN0-75xfLIXbMfGDN--esKWkNpmYS3viw').then((response) => {
        this.Lists = response.data
      })
    }

  }
}
</script>

<style lang="css">
</style>
