(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{523:function(t,n,e){},605:function(t,n,e){"use strict";e(523)},726:function(t,n,e){"use strict";e.r(n);e(605);var o=e(43),s=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"全局提示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局提示"}},[t._v("#")]),t._v(" 全局提示")]),t._v(" "),e("ClientOnly",[e("code-demo",{attrs:{title:"基础用法",description:"基础的Toast"}},[e("toast-demo1"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("<y-button type=\"primary\" @click=\"handleClick('top')\">上方出现</y-button>\n<y-button type=\"primary\" @click=\"handleClick('middle')\">中间出现</y-button>\n<y-button type=\"primary\" @click=\"handleClick('bottom')\">下方出现</y-button>\n<script>\n  import { YButton, YPlugin } from 'yued-test'\n  import Vue from 'vue'\n  Vue.use(YPlugin)\n  export default {\n    components: {\n      YButton,\n    },\n    methods: {\n      handleClick(position) {\n        this.$toast(\n          `你好啊! 我在从${\n            position === 'top' ? '上方' : position === 'middle' ? '中间' : '下方'\n          }出现了!`,\n          {\n            position: position,\n            autoClose: false,\n          }\n        )\n      },\n    },\n  }\n<\/script>\n")])])])])],1)],1),t._v(" "),e("ClientOnly",[e("code-demo",{attrs:{title:"支持 HTML 形式显示",description:"可以在弹出框中以 HTML 形式显示"}},[e("toast-demo2"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("<y-button type=\"primary\" @click=\"handleClick\">支持HTML形式</y-button>\n<script>\n  import { YButton, YPlugin } from 'yued-test'\n  import Vue from 'vue'\n  Vue.use(YPlugin)\n  export default {\n    components: {\n      YButton,\n    },\n    methods: {\n      handleClick() {\n        this.$toast(\n          '<strong style=\"color: red;\">你好啊! 我是加粗红色字体!</strong>',\n          {\n            enableHtml: true,\n            autoClose: false,\n          }\n        )\n      },\n    },\n  }\n<\/script>\n")])])])])],1)],1),t._v(" "),e("ClientOnly",[e("code-demo",{attrs:{title:"自动关闭弹出框",description:"可以自动关闭弹出框，也可以设置关闭延时"}},[e("toast-demo4"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("<y-button type=\"primary\" @click=\"handleClick\">支持自动关闭</y-button>\n<y-button type=\"primary\" @click=\"handleClick2\">设置自动关闭时长</y-button>\n<script>\n  import { YButton, YPlugin } from 'yued-test'\n  import Vue from 'vue'\n  Vue.use(YPlugin)\n  export default {\n    components: {\n      YButton,\n    },\n    methods: {\n      handleClick() {\n        this.$toast('<strong>你好啊!我会在 3s 后消失</strong>', {\n          enableHtml: true,\n          autoClose: true,\n        })\n      },\n      handleClick2() {\n        this.$toast('<strong>你好啊!我会在 5s 后消失</strong>', {\n          enableHtml: true,\n          autoCloseDelay: 5,\n        })\n      },\n    },\n  }\n<\/script>\n")])])])])],1)],1),t._v(" "),e("ClientOnly",[e("code-demo",{attrs:{title:"自定义关闭",description:"可以自定义关闭按钮和关闭操作"}},[e("toast-demo3"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("<y-button type=\"primary\" @click=\"handleClick\">自定义关闭按钮</y-button>\n<script>\n  import { YButton, YPlugin } from 'yued-test'\n  import Vue from 'vue'\n  Vue.use(YPlugin)\n  export default {\n    components: {\n      YButton,\n    },\n    methods: {\n      handleClick() {\n        this.$toast('<strong>你好啊!我会在 5s 后消失</strong>', {\n          enableHtml: true,\n          closeButton: {\n            text: '点我关闭',\n            callback: () => {\n              alert('我又出现啦!')\n            },\n          },\n        })\n      },\n    },\n  }\n<\/script>\n")])])])])],1)],1),t._v(" "),e("h3",{attrs:{id:"attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("可选值")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("position")]),t._v(" "),e("td",[t._v("提示框出现位置")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("top / bottom / middle")]),t._v(" "),e("td",[t._v("top")])]),t._v(" "),e("tr",[e("td",[t._v("autoCloseDelay")]),t._v(" "),e("td",[t._v("自动关闭时间")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("3")])]),t._v(" "),e("tr",[e("td",[t._v("autoClose")]),t._v(" "),e("td",[t._v("是否自动关闭")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("enableHtml")]),t._v(" "),e("td",[t._v("是否支持 HTML 形式")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("closeButton")]),t._v(" "),e("td",[t._v("自定义关闭按钮")]),t._v(" "),e("td",[t._v("object")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])])])])],1)}),[],!1,null,"701cff54",null);n.default=s.exports}}]);