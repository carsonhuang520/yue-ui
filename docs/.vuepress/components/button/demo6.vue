<template>
  <div class="demo-button">
    <y-button type="primary" size="large">Large</y-button>
    <y-button type="primary" size="middle">Default</y-button>
    <y-button type="primary" size="small">Small</y-button>
  </div>
</template>
<script>
import { YButton } from 'yued-test'
export default {
  name: 'button-demo6',
  components: {
    YButton,
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
