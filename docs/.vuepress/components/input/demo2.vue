<template>
  <div>
    <y-input v-model="value"></y-input>
    <div style="margin-top: 10px;">value: {{ value }}</div>
  </div>
</template>
<script>
import { YInput } from 'yued-test'
export default {
  components: {
    YInput,
  },
  data() {
    return {
      value: '你好',
    }
  },
}
</script>
