<template>
  <div class="box">
    <y-tabs :selected.sync="selected">
      <y-tabs-head>
        <y-tabs-item name="women" icon="left">美女</y-tabs-item>
        <y-tabs-item name="man" icon="settings">帅哥</y-tabs-item>
        <y-tabs-item name="game" icon="right">游戏</y-tabs-item>
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
import { Tabs, TabsHead, TabsItem, TabsBody, TabsPane } from 'yued-test'
export default {
  components: {
    'y-tabs': Tabs,
    'y-tabs-head': TabsHead,
    'y-tabs-item': TabsItem,
    'y-tabs-body': TabsBody,
    'y-tabs-pane': TabsPane,
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
