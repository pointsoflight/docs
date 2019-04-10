module.exports = {
  head: [
    ['link', { rel: 'icon', href: `/favicon.png` }],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Guide', link: '/guide/searching' },
      { text: 'W3C', link: 'https://www.w3.org/community/volunteering-ontology/' },
      { text: 'GitHub', link: 'https://github.com/pointsoflight' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            'searching',
            'publishing',
          ],
        },
      ],
    },
  },
}
