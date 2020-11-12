<template>
  <div>
    <y-input v-model="value" disabled></y-input>
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
