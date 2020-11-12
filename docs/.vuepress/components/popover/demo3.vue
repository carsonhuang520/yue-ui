<template>
  <div class="box">
    <y-popover confirm>
      <span slot="content">你确定删除这条内容吗?</span>
      <y-button type="primary">点我</y-button>
    </y-popover>
  </div>
</template>
<script>
import { YPopover, YButton } from 'yued-test'
export default {
  components: {
    YPopover,
    YButton,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped></style>
