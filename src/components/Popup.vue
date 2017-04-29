<template>
  <div class="">
    <el-dialog :title="'ชื่อร้าน : ' + detail.name"  v-model="flag" size  ="tiny" @close="close">
      <span v-if="detail != 0"><br/>
      ที่อยู่ :  {{ detail.formatted_address }}<br/>
      เวลาเปิด-ปิด : {{ detail.opening_hours }}<br/>
      <!-- วันที่ให้บริการ : {{ detail.opening_hours.weekday_text }}<br/> -->
      {{detail}}
      เบอร์ : {{ detail.formatted_phone_number }}<br/>
      เรดติ้ง : {{ detail.rating }} ดาว<br/>
      </span>
      <span v-else>
          Lat  : {{latPop}}<br/>
          Long : {{lngPop}}
      </span>
      <span slot="footer" class="dialog-footer">
      </span>
    </el-dialog>
  </div>

</template>

<script>
import 'bulma/css/bulma.css'
export default {
  name: 'popup',
  props: ['flag', 'detail', 'latPop', 'lngPop', 'shops'],
  methods: {
    close: function () {
      this.$emit('closePopup')
    }
  }
}

</script>

<style>
</style>
