<template>
  <div style="width: 100%;">
    <y-uploader
      action="http://39.101.207.19:3001/upload"
      name="file"
      method="POST"
      accept="image/png"
      :parse-response="parseResponse"
      :file-list.sync="fileList"
      :multiple="true"
      @error="error = $event"
    >
      <y-button type="primary" class="btn">
        <y-icon name="upload" style="fill: #ffffff;"></y-icon>上传
      </y-button>
    </y-uploader>
  </div>
</template>
<script>
import { YIcon, YButton, YUploader } from 'yued-test'
export default {
  components: {
    YIcon,
    YUploader,
    YButton,
  },
  data() {
    return {
      fileList: [],
    }
  },
  methods: {
    parseResponse(response) {
      let obj = JSON.parse(response)
      let url = `http://39.101.207.19:3001/preview/${obj.id}`
      return url
    },
  },
}
</script>
<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
}
</style>
