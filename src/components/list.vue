<template lang="html">
  <div class="list">
    {{ Lists }}
    <p v-for="(List, key, index) in Lists">
    Name :  {{ List.name }}<br/>
    Address : {{ List.vicinity }}
    <br/><br/>
    </p>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'list',
  data () {
    return {
      Lists: '',
      num: 0
    }
  },
  beforeMount () {
    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=14.1590111%2C101.3459433&radius=5000&type=car&keyword=repair&key=AIzaSyDN0-75xfLIXbMfGDN--esKWkNpmYS3viw').then((response) => {
      this.Lists = response.data.results
    })
  }
}
</script>

<style lang="css">
</style>
