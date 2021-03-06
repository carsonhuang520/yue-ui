---
title: Button 按钮
---

# 按钮

<ClientOnly>
  <code-demo title="基本用法" description="基本按钮用法">
  <button-demo1></button-demo1>
  <highlight-code slot="codeText" lang="vue">
    <y-button>Default</y-button>
    <y-button type="primary">Primary</y-button>
    <y-button type="info">Info</y-button>
    <y-button type="success">Success</y-button>
    <y-button type="warning">Warning</y-button>
    <y-button type="error">Error</y-button>
    <y-button type="dashed">Dashed</y-button>
    <y-button type="text">Text</y-button>
  </highlight-code>
  </code-demo>
</ClientOnly>

<ClientOnly>
  <code-demo title="图标按钮" description="带图标的按钮">
  <button-demo3></button-demo3>
  <highlight-code slot="codeText" lang="vue">
    <y-button icon="settings">Settings</y-button>
    <y-button icon="settings" icon-position="right">Settings</y-button>
  </highlight-code>
  </code-demo>
</ClientOnly>

<ClientOnly>
  <code-demo title="加载中" description="按钮上显示加载状态">
  <button-demo4></button-demo4>
  <highlight-code slot="codeText" lang="vue">
    <y-button loading>Loading</y-button>
  </highlight-code>
  </code-demo>
</ClientOnly>

<ClientOnly>
  <code-demo title="按钮组" description="以按钮组方式出现">
  <button-demo5></button-demo5>
  <highlight-code slot="codeText" lang="vue">
    <y-button-group>
      <y-button icon="left">prev</y-button>
      <y-button icon="right" icon-position="right">next</y-button>
    </y-button-group>
  </highlight-code>
  </code-demo>
</ClientOnly>

<ClientOnly>
  <code-demo title="禁用状态" description="按钮不可用状态">
  <button-demo2></button-demo2>
  <highlight-code slot="codeText" lang="vue">
    <y-button disabled>Default</y-button>
    <y-button type="primary" disabled>Primary</y-button>
    <y-button type="info" disabled>Info</y-button>
    <y-button type="success" disabled>Success</y-button>
    <y-button type="warning" disabled>Warning</y-button>
    <y-button type="error" disabled>Error</y-button>
    <y-button type="dashed" disabled>Dashed</y-button>
    <y-button type="text" disabled>Text</y-button>
  </highlight-code>
  </code-demo>
</ClientOnly>

<ClientOnly>
  <code-demo title="不同尺寸" description="Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。">
  <button-demo6></button-demo6>
  <highlight-code slot="codeText" lang="vue">
    <y-button type="primary" size="large">Large</y-button>
    <y-button type="primary" size="middle">Default</y-button>
    <y-button type="primary" size="small">Small</y-button>
  </highlight-code>
  </code-demo>
</ClientOnly>

<style scoped>
table th { width: 100px;text-align:left } 
table th:nth-of-type(4){width:200px}
table td { font-size: 14px; }
</style>

### Attributes

| 参数         | 说明           | 类型    | 可选值                                                              | 默认值  |
| ------------ | -------------- | ------- | ------------------------------------------------------------------- | ------- |
| size         | 尺寸           | string  | small / middle / large                                              | middle  |
| type         | 类型           | string  | primary / success / warning / error / info / text / dashed /default | default |
| disabled     | 是否禁用状态   | boolean | —                                                                   | false   |
| icon         | 图标名称       | string  | —                                                                   | —       |
| iconPosition | 图标位置       | string  | left / right                                                        | left    |
| loading      | 是否加载中状态 | boolean | —                                                                   | false   |
