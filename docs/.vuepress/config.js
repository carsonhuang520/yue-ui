module.exports = {
  base: '/yued/',
  title: 'Yue UI',
  description: 'UI 框架',
  themeConfig: {
    lastUpdated: '最后更新时间',
    sidebar: 'auto',
    nav: [
      { text: '主页', link: '' },
      { text: '文档', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/carsonhuang520/yued' },
    ],
    sidebar: [
      {
        title: '入门',
        children: ['/install/', '/get-started/'],
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/grid',
          '/components/layout',
          '/components/popover',
          '/components/tabs',
          '/components/toast',
          '/components/pagination',
          '/components/table',
          '/components/menu',
          '/components/collapse',
          '/components/cascader',
          '/components/carousel',
          '/components/upload',
          '/components/input',
        ],
      },
    ],
  },
}
