<template>
  <div style="width: 100%;">
    <y-collapse :selected.sync="selected">
      <y-collapse-item title="标题1" name="1">内容1</y-collapse-item>
      <y-collapse-item title="标题2" name="2">内容2</y-collapse-item>
      <y-collapse-item title="标题3" name="3">内容3</y-collapse-item>
    </y-collapse>
  </div>
</template>
<script>
import { YCollapse, YCollapseItem } from 'yued-test'
export default {
  components: {
    YCollapse,
    YCollapseItem,
  },
  data() {
    return {
      selected: ['1'],
    }
  },
}
</script>
