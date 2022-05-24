module.exports = {
  title: '忒提斯',
  description: '让我们开始吧!',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: "您有新消息!",
          buttonText: "刷新"
        }
      }
    ]
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about/' },
      { text: 'Vue3', link: '/project/' },
      { text: 'External', link: 'https://www.baidu.com', target: '_blank', rel: 'noopener noreferrer' }
    ],
    activeHeaderLinks: false,
    sidebar: 'auto',
    lastUpdated: '更新时间',
  }
}