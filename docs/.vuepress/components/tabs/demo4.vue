<template>
  <div class="box">
    <y-tabs :selected.sync="selected" direction="vertical">
      <y-tabs-head>
        <y-tabs-item name="women">美女</y-tabs-item>
        <y-tabs-item name="man">帅哥</y-tabs-item>
        <y-tabs-item name="game">游戏</y-tabs-item>
      </y-tabs-head>
      <y-tabs-body>
        <y-tabs-pane name="women">美女相关内容</y-tabs-pane>
        <y-tabs-pane name="man">帅哥相关内容</y-tabs-pane>
        <y-tabs-pane name="game">游戏相关内容</y-tabs-pane>
      </y-tabs-body>
    </y-tabs>
  </div>
</template>
<script>
import { YTabs, YTabsHead, YTabsItem, YTabsBody, YTabsPane } from 'yued-test'
export default {
  components: {
    YTabs,
    YTabsHead,
    YTabsItem,
    YTabsBody,
    YTabsPane,
  },
  data() {
    return {
      selected: 'women',
    }
  },
}
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
}
</style>
