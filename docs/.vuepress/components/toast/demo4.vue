<template>
  <div>
    <y-button type="primary" @click="handleClick">支持自动关闭</y-button>
    <y-button type="primary" @click="handleClick2">设置自动关闭时长</y-button>
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
      this.$toast('<strong>你好啊!我会在 3s 后消失</strong>', {
        enableHtml: true,
        autoClose: true,
      })
    },
    handleClick2() {
      this.$toast('<strong>你好啊!我会在 5s 后消失</strong>', {
        enableHtml: true,
        autoCloseDelay: 5,
      })
    },
  },
}
</script>
