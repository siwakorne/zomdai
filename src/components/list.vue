<template lang="html">
          <!-- Name :  {{ List.name }}
          Address : {{ List.vicinity }} -->
<div class="container list-container">
  <div class="columns is-tablet is-multiline">
    <div class="column is-one-third" v-for="(List, key, index) in Lists">
        <!-- ที่อยู่ร้าน : {{List.geometry.location}}
        ที่อยู่ของผู้ใช้ : {{List.geometry.viewport}} -->
      <a @click="click()">
      <div class="card" style="height:250px;">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="List.icon" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ List.name}}</p>
            </div>
          </div>

          <div class="content">
            ที่อยู่ : {{List.vicinity}}
            <br>
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </div>
      </div>
      </a>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import 'bulma/css/bulma.css'

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
  },
  methods: {
    click () {
      alert.log('Click')
    }
  }
}
</script>

<style lang="css">
#butlist{
  width:100%;
}
.list-container{
  float:left;
  width:100%;
}
</style>
