<template>
  <el-dialog :title="'ชื่อร้าน : ' + detail.name"  v-model="flag" size="tiny" @close="close">
    <span><br/>
    ที่อยู่ :  {{ detail.formatted_address }}<br/>
    เวลาเปิด-ปิด : {{ detail.opening_hours }}<br/>
    <!-- วันที่ให้บริการ : {{ detail.opening_hours.weekday_text }}<br/> -->
    เบอร์ : {{ detail.formatted_phone_number }}<br/>
    เรดติ้ง : {{ detail.rating }} ดาว<br/>
    </span>
    <span slot="footer" class="dialog-footer">
    </span>
  </el-dialog>
</template>

<script>
import 'bulma/css/bulma.css'
export default {
  name: 'popup',
  props: ['flag', 'detail'],
  methods: {
    close: function () {
      this.$emit('closePopup')
    }
  }
}

</script>

<style>
</style>
