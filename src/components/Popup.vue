<template>
  <el-dialog title="Tips" v-model="flag" size="tiny" @close="close">
    <span>This is a message</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">Cancel</el-button>
      <el-button type="primary" @click="close">Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
import 'bulma/css/bulma.css'
export default {
  name: 'app',
  data () {
    return {
      counter: 0
    }
  },
  props: ['flag'],
  methods: {
    close: function () {
      this.$emit('closePopup')
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
