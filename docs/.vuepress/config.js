module.exports = {
  base: '/yue-ui/',
  title: 'Yue UI',
  description: 'UI 框架',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    lastUpdated: '最后更新时间',
    sidebar: 'auto',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/introduction/' },
      { text: 'GitHub', link: 'https://github.com/carsonhuang520/yued' },
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: ['/introduction/', '/install/', '/get-started/'],
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          {
            title: '基础',
            children: [
              '/components/button',
              '/components/popover',
              '/components/toast',
              '/components/carousel',
            ],
          },
            {
              title: '布局',
              children: [
                '/components/grid',
                '/components/layout',
                '/components/collapse',
              ],
            },
            {
              title: '导航',
              children: [
                '/components/menu',
                '/components/tabs',
                '/components/pagination',
              ],
            },
            {
              title: '表单',
              children: [
                '/components/input',
                '/components/table',
                '/components/cascader',
                '/components/upload',
              ],
            },
        ],
      },
    ],
  },
  plugins: [
    'vuepress-plugin-container',
    {
      type: 'tip',
      defaultTitle: {
        '/': 'TIP',
        '/zh/': '提醒',
      },
    },
  ],
}
