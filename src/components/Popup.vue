<template>
  <div class="">
      <span v-if="cpop === 'list'"><br/>
        <el-dialog :title="'ชื่อร้าน : ' + detail.name"   :value="newFlag" size  ="tiny" @close="close" @open="open">
<hr style="margin-top:-20px; background-color:#ffeb3b;" />
      <img src="../assets/home.png" width="25px" height="25px" style="margin-right: 15px">่ :  {{ detail.formatted_address }}<br/>
      <img src="../assets/time.png" width="25px" height="25px" style="margin-right: 15px"> : <span v-if="detail.opening_hours==null">ไม่ระบุเวลา </span>
                  <span v-else="detail.opening_hours!=null">
                    {{detail.opening_hours.weekday_text[0]}}<br/>
                    {{detail.opening_hours.weekday_text[1]}}<br/>
                    {{detail.opening_hours.weekday_text[2]}}<br/>
                    {{detail.opening_hours.weekday_text[3]}}<br/>
                    {{detail.opening_hours.weekday_text[4]}}<br/>
                    {{detail.opening_hours.weekday_text[5]}}<br/>
                    {{detail.opening_hours.weekday_text[6]}}
                  </span><br />
      <!-- วันที่ให้บริการ : {{ detail.opening_hours.weekday_text }}<br/> -->
      <!-- {{detail}} -->
      <img src="../assets/call.png" width="25px" height="25px" style="margin-right: 15px">
           : <span v-if="detail.formatted_phone_number==null">ไม่ระบุเบอร์</span>
             <span v-else>{{ detail.formatted_phone_number }}</span><br/>
             {{ detail.rating }}
      <img src="../assets/rating.png" width="25px" height="25px" style="margin-right: 15px">
            : <span v-if="detail.rating==null">ไม่มีรายการคะแนน</span>
              <span v-else>{{ detail.rating }}</span>
              </el-dialog>
      </span>
      <span v-else>
          <el-dialog :title="'ชื่อร้าน : ' + selectShop.name" v-model="newFlag"  size  ="tiny" @close="close" @open="open">
<hr style="margin-top:-20px; background-color:#ffeb3b;" />
            <img src="../assets/home.png" width="25px" height="25px" style="margin-right: 15px"> : {{ selectShop.vicinity }}<br/>
            <!--   v-model="flag"  -->
            <img src="../assets/time.png" width="25px" height="25px" style="margin-right: 15px"> :
                          <span v-if="selectShop.opening_hours==null">ไม่ระบุเวลา </span>
                          <span v-else="selectShop.opening_hours!=null">
                          {{selectShop.opening_hours.weekday_text[0]}}<br/>
                          {{selectShop.opening_hours.weekday_text[1]}}<br/>
                          {{selectShop.opening_hours.weekday_text[2]}}<br/>
                          {{selectShop.opening_hours.weekday_text[3]}}<br/>
                          {{selectShop.opening_hours.weekday_text[4]}}<br/>
                          {{selectShop.opening_hours.weekday_text[5]}}<br/>
                          {{selectShop.opening_hours.weekday_text[6]}}
                        </span><br />
            <img src="../assets/call.png" width="25px" height="25px" style="margin-right: 15px">
                         : <span v-if="selectShop.formatted_phone_number==null">ไม่ระบุเบอร์</span>
                               <span v-else>{{ selectShop.formatted_phone_number }}</span><br/>
            <img src="../assets/rating.png" width="25px" height="25px" style="margin-right: 15px">
                         : <span v-if="selectShop.rating==null">ไม่มีรายการคะแนน</span>
                                <span v-else>{{ selectShop.rating + " ดาว" }}</span>
                                </el-dialog>
                        </span>
          </el-dialog>
      </span>
      <span slot="footer" class="dialog-footer">
      </span>

  </div>

</template>

<script>
import 'bulma/css/bulma.css'
export default {
  name: 'popup',
  props: ['flag', 'latPop', 'lngPop', 'cpop', 'detail', 'selectShop'],
  methods: {
    close: function () {
      console.log(this.details)
      this.$emit('closePopup')
    },
    open () {
      this.$emit('openPopup')
    }
  },
  computed: {
    newFlag () {
      return this.flag
    }
  }
}

</script>

<style>
</style>
