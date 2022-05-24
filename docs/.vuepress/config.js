module.exports = {
  base:'/vuepress-blog/',
  title: '忒提斯',
  description: '让我们开始吧!',
  head:[
    ['link', { rel: 'icon', href: '/favicon.ico' }]
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