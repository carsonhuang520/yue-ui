<template>
  <div class="demo-button">
    <y-layout class="layout">
      <y-header class="item header">Header</y-header>
      <y-content class="item content">Content</y-content>
      <y-footer class="item footer">Footer</y-footer>
    </y-layout>

    <y-layout class="layout">
      <y-header class="item header">Header</y-header>
      <y-layout>
        <y-sider class="item sider" width="100px">Sider</y-sider>
        <y-content class="item content">Content</y-content>
      </y-layout>
      <y-footer class="item footer">Footer</y-footer>
    </y-layout>

    <y-layout class="layout">
      <y-sider class="item sider" width="100px">Sider</y-sider>
      <y-layout>
        <y-header class="item header">Header</y-header>
        <y-content class="item content">Content</y-content>
        <y-footer class="item footer">Footer</y-footer>
      </y-layout>
    </y-layout>

    <y-layout class="layout">
      <y-header class="item header">Header</y-header>
      <y-layout>
        <y-content class="item content">Content</y-content>
        <y-sider class="item sider" width="100px">Sider</y-sider>
      </y-layout>
      <y-footer class="item footer">Footer</y-footer>
    </y-layout>
  </div>
</template>
<script>
import { YLayout, YHeader, YContent, YSider, YFooter } from 'yued-test'
export default {
  components: {
    YLayout,
    YHeader,
    YContent,
    YSider,
    YFooter,
  },
}
</script>
<style lang="scss" scoped>
.demo-button {
  width: 100%;
  text-align: center;
}
.layout {
  height: 300px;
  color: #ffffff;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  // height: 60px;
  background: #7cbce9;
}
.sider {
  // width: 20%;
  background: #3a9fe8;
}
.content {
  background: #0f8de9;
}
.footer {
  // height: 60px;
  background: #7cbce9;
}
</style>
