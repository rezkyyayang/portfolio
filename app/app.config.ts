export default defineAppConfig({
  global: {
    picture: {
      dark: 'profile.png',
      light: 'profile.png',
      alt: 'Rezky Yayang - Statistician'
    },
    meetingLink: 'https://wa.me/6283808893838/',
    email: 'me@rezkyyayang.my.id',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  uiPro: {
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://linkedin.com/in/rezkyyayang',
      'target': '_blank',
      'aria-label': 'rezkyyayang on LinkedIn'
    },{
      'icon': 'i-simple-icons-facebook',
      'to': 'https://facebook.com/rezkyyayang',
      'target': '_blank',
      'aria-label': 'rezkyyayang on Facebook'
    }, {
      'icon': 'i-simple-icons-instagram',
      'to': 'https://instagram.com/rezkyyayang',
      'target': '_blank',
      'aria-label': 'rezkyyayang on Instagram'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/rezkyyayang',
      'target': '_blank',
      'aria-label': 'rezkyyayang on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/rezkyyayang',
      'target': '_blank',
      'aria-label': 'rezkyyayang on GitHub'
    }]
  }
})
