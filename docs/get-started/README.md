# 快速开始

请先[安装](/install/)本组件库。

::: tip 提醒

使用前需要将 box-sizing 改为 border-box

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

:::

然后在你的代码中写入下面的代码

```js
import { YButton } from 'yued-test'
import 'yued-test/dist/yued.css'
```

就可以使用我提供的组件了。

## Vue 单文件组件

<demo></demo>
代码示例：

```vue
<template>
  <div>
    <y-button type="primary">按钮</y-button>
  </div>
</template>
<script>
import { YButton } from 'yued-test'
import 'yued-test/dist/yued.css'
export default {
  components: { YButton },
}
</script>
```
