import type { ThemeConfig } from '~/types'

// This is the default configuration for the template, please do not modify it directly.
// You can override this configuration in the `.config/user.ts` file.

export const defaultConfig: ThemeConfig = {
  site: {
    title: '小陶的周记',
    subtitle: '用记录平复思考的峰谷',
    author: '小陶',
    description: '记录小陶每周的产出和思考，分享一些有趣的内容。',
    website: 'https://whyya.xyz',
    pageSize: 5,
    socialLinks: [
      {
        name: 'rss',
        href: '/atom.xml',
      },
      {
        name: 'twitter',
        href: 'https://x.com/Whyya',
      },
      {
        name: 'mastodon',
        href: 'https://mastodon.social/@whyya',
      },
    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/',
      },
      {
        name: 'Archive',
        href: '/archive',
      },
      {
        name: 'Categories',
        href: '/categories',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    categoryMap: [{ name: '胡适', path: 'hu-shi' }],
    footer: [
      '© %year <a target="_blank" href="%website">%author</a>',
      'Theme <a target="_blank" href="https://github.com/Moeyua/astro-theme-typography">Typography</a> by <a target="_blank" href="https://moeyua.com">Moeyua</a>',
      'Proudly published with <a target="_blank" href="https://astro.build/">Astro</a>',
    ],
  },
  appearance: {
    theme: 'system',
    locale: 'zh-cn',
    colorsLight: {
      primary: '#2e405b',
      background: '#ffffff',
    },
    colorsDark: {
      primary: '#FFFFFF',
      background: '#232222',
    },
    fonts: {
      header:
        '"HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Source Sans Pro","Roboto","Helvetica","Helvetica Neue","Source Han Sans SC","Source Han Sans TC","PingFang SC","PingFang HK","PingFang TC",sans-serif',
    },
  },
  seo: {
    twitter: '@Whyya',
    meta: [
      { name: 'author', content: '小陶' },
      { name: 'robots', content: 'index, follow' },
    ],
    link: [],
  },
  rss: {
    fullText: true,
  },
  comment: {
    // disqus: { shortname: "typography-astro" },
  },
  analytics: {
    googleAnalyticsId: 'G-MWTFJF8GE4',
    umamiAnalyticsId: '3124b923-0ce0-4537-8053-a0603c45649d',
  },
  latex: {
    katex: false,
  },
}
