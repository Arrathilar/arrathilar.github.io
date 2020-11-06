module.exports = {
  url: 'https://gatsby-starter-blog-and-cv.netlify.app',
  pathPrefix: '/',
  title: 'Blog by Andrey Perestyuk',
  keywords:
    'account surfer, trello bookmark, trello, productivity, javascript, Andrey Perestyuk, choosy windows, browser selector',
  subtitle: 'Magento 2 backend developer',
  copyright: '© 2020 | Rivne, Ukraine',
  disqusShortname: 'arrathilar',
  postsPerPage: 20,
  googleAnalyticsId: ${GA},
  menu: [
    {
      label: 'Blog',
      path: '/'
    },
    {
      label: 'CV',
      path: '/cv'
    }
  ],
  author: {
    name: 'Andrey Perestyuk',
    photo: '/photo.jpg',
    bio: 'Magento 2 backend developer',
    contacts: {
      // don't remove fields, just make them empty string ''
      // https://github.com/gatsbyjs/gatsby/issues/2392
      github: 'arrathilar',
      twitter: '',
      linkedin: '',
      telegram: 'arrathilar',
      instagram: 'arrathilar',
      facebook: '',
      email: '',
      rss: '/rss.xml'
    }
  }
}
