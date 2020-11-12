<template>
  <div>
    <y-input v-model="value" readonly></y-input>
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
