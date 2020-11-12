<template>
  <div>
    <y-button type="primary" @click="handleClick">支持HTML形式</y-button>
  </div>
</template>
<script>
import { YButton, YPlugin } from 'yued-test'
import Vue from 'vue'
Vue.use(YPlugin)
export default {
  components: {
    YButton,
  },
  methods: {
    handleClick() {
      this.$toast(
        '<strong style="color: red;">你好啊! 我是加粗红色字体!</strong>',
        {
          enableHtml: true,
          autoClose: false,
        }
      )
    },
  },
}
</script>
