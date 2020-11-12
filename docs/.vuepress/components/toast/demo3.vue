<template>
  <div>
    <y-button type="primary" @click="handleClick">自定义关闭按钮</y-button>
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
      this.$toast('<strong>你好啊!我会在 5s 后消失</strong>', {
        enableHtml: true,
        closeButton: {
          text: '点我关闭',
          callback: () => {
            alert('我又出现啦!')
          },
        },
      })
    },
  },
}
</script>
