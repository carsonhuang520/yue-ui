<template>
  <div>
    <y-pagination
      :total-page="totalPage"
      :current-page.sync="currentPage"
      :hide-on-single-page="false"
    ></y-pagination>
  </div>
</template>
<script>
import { YPagination } from 'yued-test'
export default {
  components: {
    YPagination,
  },
  data() {
    return {
      totalPage: 100,
      currentPage: 1,
    }
  },
}
</script>
