<template>
  <div class="demo-button">
    <y-button-group>
      <y-button icon="left">prev</y-button>
      <y-button icon="right" icon-position="right">next</y-button>
    </y-button-group>
  </div>
</template>
<script>
import { YButton, YButtonGroup } from 'yued-test'
export default {
  name: 'button-demo5',
  components: {
    YButton,
    YButtonGroup,
  },
}
</script>
<style lang="scss" scoped>
.demo-button {
  width: 100%;
  text-align: center;
  div {
    margin: 10px 0;
  }
}
</style>
