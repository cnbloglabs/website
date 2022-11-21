import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

export default defineConfig({
  // base: '/website/',
  lang: 'zh-CN',
  title: 'Cnblog Labs',
  description: 'Just playing around.',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  markdown: {
    theme: 'material-default',

    // vitepress bug 未修复
    // theme: {
    //   light: 'github-light',
    //   dark: 'github-dark',
    // },

    headers: {
      level: [0, 0],
    },
    lineNumbers: true,
  },

  themeConfig: {
    logo: '/logo.png',

    nav: nav(),

    sidebar: {
      '/user/': sidebarUser(),
      '/dev/': sidebarDev(),
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '为此页提供修改意见',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cnbloglabs/' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2018-present guangzan',
    },

    // algolia: {
    //   appId: '8J64VVRP8K',
    //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //   indexName: 'cnbloglabs',
    // },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '在博客园使用', link: '/user/install' },
    { text: '构建皮肤', link: '/dev/guide/env' },
  ]
}

function sidebarUser(): DefaultTheme.SidebarGroup[] {
  return [
    {
      text: '在博客园使用',
      items: [
        { text: '安装皮肤', link: '/user/install' },
        { text: '配置选项', link: '/user/options' },
        { text: '参考配置', link: '/user/reference' },
        { text: '常见问题', link: '/user/questions' },
        { text: '社区 Loading', link: '/user/loadings' },
      ],
      collapsible: true,
    },
    {
      text: '所有皮肤',
      items: [
        { text: '🥞 GEEK', link: '/user/theme-geek' },
        { text: '🥡 REACG', link: '/user/theme-reacg' },
        { text: '🥪 ACG', link: '/user/theme-acg' },
        { text: '🎀 BILIBILI', link: '/user/theme-bilibili' },
        { text: '🍩 CSDN', link: '/user/theme-csdn' },
        { text: '🌮 ELEMENT', link: '/user/theme-element' },
        { text: '🥛 SILENCE', link: '/user/theme-silence' },
        { text: '🍰 SIMPLE', link: '/user/theme-simple' },
        { text: '🍊 VIEW', link: '/user/theme-view' },
      ],
      collapsible: true,
    },
  ]
}

function sidebarDev(): DefaultTheme.SidebarGroup[] {
  return [
    {
      text: '指南',
      items: [
        { text: '环境准备', link: '/dev/guide/env' },
      ],
      collapsible: true,
    },
    {
      text: 'API',
      items: [
        { text: 'CreateTheme', link: '/dev/api/create-theme' },
        { text: 'Theme.use', link: '/dev/api/use' },
      ],
      collapsible: true,
    },
    {
      text: '插件',
      items: [
        { text: '插件介绍', link: '/dev/plugins/introduce' },
      ],
      collapsible: true,
    },
  ]
}
