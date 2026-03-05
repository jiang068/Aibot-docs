import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Aibot 文档中心",
  description: "Aibot 开发与使用的全方位指南",
  // 忽略死链接检查（当文档中某些旧页面已删除但还留有引用时可避免构建失败）
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/avatars/icon.png' }]
  ],
  themeConfig: {
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '用户手册', link: '/manual/' },
      { text: '开发文档', link: '/develop/' },
      { text: 'GitHub', link: 'https://github.com/jiang068/Aibot' }
    ],

    sidebar: {
      '/manual/': [
        {
          text: '用户手册',
          items: [
            { text: '介绍', link: '/manual/' }
          ]
        },
        {
          text: '安装配置',
          collapsed: false,
          items: [
              { text: '安装指南', link: '/manual/installation/' },
              { text: '标准安装教程', link: '/manual/installation/installation_standard' }
          ]
        },
        {
          text: '部署方法',
          collapsed: false,
          items: [
              { text: '部署概览', link: '/manual/deployment/' }
          ]
        },
        {
          text: '使用指南',
          collapsed: false,
          items: [
            { text: '使用说明', link: '/manual/usage/' },
            { text: '快速问答', link: '/manual/usage/fast_q_a' }
          ]
        }
      ],
      '/develop/': [
        {
          text: '开发文档',
          items: [
            { text: '介绍', link: '/develop/' }
          ]
        },
        {
          text: 'API参考',
          collapsed: false,
          items: [
            { text: 'API概览', link: '/develop/api/' },
            { text: 'API草案', link: '/develop/api/draft' }
          ]
        },
        {
          text: '项目结构',
          collapsed: false,
          items: [
            { text: '架构概述', link: '/develop/structure/' },
            { text: '文件结构', link: '/develop/structure/file_structure' }
          ]
        },
        {
          text: '开发指南',
          collapsed: false,
          items: [
            { text: 'AI辅助开发', link: '/develop/guide/ai-instruction' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jiang068/Aibot' }
    ]
  }
})