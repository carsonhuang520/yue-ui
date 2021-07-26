(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{517:function(e,t,n){},599:function(e,t,n){"use strict";n(517)},720:function(e,t,n){"use strict";n.r(t);n(599);var m=n(43),u=Object(m.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"导航菜单"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导航菜单"}},[e._v("#")]),e._v(" 导航菜单")]),e._v(" "),n("ClientOnly",[n("code-demo",{attrs:{title:"顶栏",description:"适用广泛的基础用法"}},[n("menu-demo1"),e._v(" "),n("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<y-menu :selected.sync="selected">\n  <y-menu-item name="home">首页</y-menu-item>\n  <y-sub-menu name="about">\n    <template slot="title">关于</template>\n    <y-menu-item name="culture">企业文化</y-menu-item>\n    <y-menu-item name="developers">开发团队</y-menu-item>\n    <y-sub-menu name="contacts">\n      <template slot="title">联系方式</template>\n      <y-menu-item name="wechat">微信</y-menu-item>\n      <y-menu-item name="qq">QQ</y-menu-item>\n      <y-sub-menu name="phone">\n        <template slot="title">手机</template>\n        <y-menu-item name="cy">中国移动</y-menu-item>\n        <y-menu-item name="cd">中国电信</y-menu-item>\n        <y-menu-item name="cl">中国联通</y-menu-item>\n      </y-sub-menu>\n    </y-sub-menu>\n  </y-sub-menu>\n  <y-menu-item name="hire">招聘</y-menu-item>\n  <y-menu-item name="product">产品</y-menu-item>\n</y-menu>\n<script>\n  export default {\n    data() {\n      return {\n        selected: [\'home\'],\n      }\n    },\n  }\n<\/script>\n')])])])])],1)],1),e._v(" "),n("ClientOnly",[n("code-demo",{attrs:{title:"侧栏",description:"垂直菜单，可内嵌子菜单"}},[n("menu-demo2"),e._v(" "),n("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<y-menu :selected.sync="selected" vertical>\n  <y-menu-item name="home">首页</y-menu-item>\n  <y-sub-menu name="about">\n    <template slot="title">关于</template>\n    <y-menu-item name="culture">企业文化</y-menu-item>\n    <y-menu-item name="developers">开发团队</y-menu-item>\n    <y-sub-menu name="contacts">\n      <template slot="title">联系方式</template>\n      <y-menu-item name="wechat">微信</y-menu-item>\n      <y-menu-item name="qq">QQ</y-menu-item>\n      <y-sub-menu name="phone">\n        <template slot="title">手机</template>\n        <y-menu-item name="cy">中国移动</y-menu-item>\n        <y-menu-item name="cd">中国电信</y-menu-item>\n        <y-menu-item name="cl">中国联通</y-menu-item>\n      </y-sub-menu>\n    </y-sub-menu>\n  </y-sub-menu>\n  <y-menu-item name="hire">招聘</y-menu-item>\n  <y-menu-item name="product">产品</y-menu-item>\n</y-menu>\n<script>\n  export default {\n    data() {\n      return {\n        selected: [\'home\'],\n      }\n    },\n  }\n<\/script>\n')])])])])],1)],1),e._v(" "),n("ClientOnly",[n("code-demo",{attrs:{title:"禁用",description:"可以通过disabled禁用某一个菜单"}},[n("menu-demo3"),e._v(" "),n("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<y-menu :selected.sync="selected">\n  <y-menu-item name="home">首页</y-menu-item>\n  <y-sub-menu name="about">\n    <template slot="title">关于</template>\n    <y-menu-item name="culture">企业文化</y-menu-item>\n    <y-menu-item name="developers">开发团队</y-menu-item>\n    <y-sub-menu name="contacts">\n      <template slot="title">联系方式</template>\n      <y-menu-item name="wechat">微信</y-menu-item>\n      <y-menu-item name="qq">QQ</y-menu-item>\n      <y-sub-menu name="phone">\n        <template slot="title">手机</template>\n        <y-menu-item name="cy">中国移动</y-menu-item>\n        <y-menu-item name="cd">中国电信</y-menu-item>\n        <y-menu-item name="cl">中国联通</y-menu-item>\n      </y-sub-menu>\n    </y-sub-menu>\n  </y-sub-menu>\n  <y-menu-item name="hire" disabled>招聘</y-menu-item>\n  <y-menu-item name="product">产品</y-menu-item>\n</y-menu>\n<script>\n  export default {\n    data() {\n      return {\n        selected: [\'home\'],\n      }\n    },\n  }\n<\/script>\n')])])])])],1)],1),e._v(" "),n("ClientOnly",[n("code-demo",{attrs:{title:"hover展开",description:"支持鼠标hover展开子目录，只有在水平方向有效"}},[n("menu-demo4"),e._v(" "),n("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<y-menu :selected.sync="selected" trigger>\n  <y-menu-item name="home">首页</y-menu-item>\n  <y-sub-menu name="about">\n    <template slot="title">关于</template>\n    <y-menu-item name="culture">企业文化</y-menu-item>\n    <y-menu-item name="developers">开发团队</y-menu-item>\n    <y-sub-menu name="contacts">\n      <template slot="title">联系方式</template>\n      <y-menu-item name="wechat">微信</y-menu-item>\n      <y-menu-item name="qq">QQ</y-menu-item>\n      <y-sub-menu name="phone">\n        <template slot="title">手机</template>\n        <y-menu-item name="cy">中国移动</y-menu-item>\n        <y-menu-item name="cd">中国电信</y-menu-item>\n        <y-menu-item name="cl">中国联通</y-menu-item>\n      </y-sub-menu>\n    </y-sub-menu>\n  </y-sub-menu>\n  <y-menu-item name="hire" disabled>招聘</y-menu-item>\n  <y-menu-item name="product">产品</y-menu-item>\n</y-menu>\n<script>\n  export default {\n    data() {\n      return {\n        selected: [\'home\'],\n      }\n    },\n  }\n<\/script>\n')])])])])],1)],1),e._v(" "),n("h3",{attrs:{id:"menu-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#menu-attributes"}},[e._v("#")]),e._v(" Menu Attributes")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("参数")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("可选值")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("vertical")]),e._v(" "),n("td",[e._v("是否垂直显示")]),e._v(" "),n("td",[e._v("boolean")]),e._v(" "),n("td",[e._v("—")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("trigger")]),e._v(" "),n("td",[e._v("是否 hover 展开")]),e._v(" "),n("td",[e._v("boolean")]),e._v(" "),n("td",[e._v("—")]),e._v(" "),n("td",[e._v("false")])])])]),e._v(" "),n("h3",{attrs:{id:"menuitem-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#menuitem-attributes"}},[e._v("#")]),e._v(" MenuItem Attributes")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("参数")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("可选值")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("是否禁用")]),e._v(" "),n("td",[e._v("boolean")]),e._v(" "),n("td",[e._v("—")]),e._v(" "),n("td",[e._v("false")])])])])],1)}),[],!1,null,"e62c669e",null);t.default=u.exports}}]);