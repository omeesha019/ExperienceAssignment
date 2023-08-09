module.exports = {
  name: 'Experience_Omeesha',
  publisher: 'Sample',
  cards: [
    {
      type: 'Experience_Omeesha',
      source: './src/cards/Experience_Omeesha',
      title: 'Experience Demo Card',
      displayCardType: 'Experience Demo Card',
      description: 'Experience Demo',
      pageRoute: {
        route: '/',
        excludeClickSelectors: ['a']
      }
    }
  ],
  page: {
    source: './src/page/router.jsx'
  }
};