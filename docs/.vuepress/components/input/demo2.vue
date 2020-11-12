<template>
  <div>
    <y-input v-model="value"></y-input>
    <div style="margin-top: 10px;">value: {{ value }}</div>
  </div>
</template>
<script>
import { Input } from 'yued-test'
export default {
  components: {
    'y-input': Input,
  },
  data() {
    return {
      value: '你好',
    }
  },
}
</script>
