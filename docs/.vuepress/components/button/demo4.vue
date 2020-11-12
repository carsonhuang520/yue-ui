<template>
  <div class="demo-button">
    <y-button loading>Loading</y-button>
  </div>
</template>
<script>
import { YButton } from 'yued-test'
export default {
  name: 'button-demo4',
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
