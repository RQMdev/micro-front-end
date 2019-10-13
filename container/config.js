export const routes = [
  {
    path: '/',
    exact: true,
    module: {
      id: 'react-app',
      url: 'http://localhost:3000',
      scripts: [
        '/static/js/runtime-main.js',
        '/static/js/main.chunk.js',
        '/static/js/2.chunk.js'
      ]
    }
  },
  {
    path: '/chien',
    title: 'Chien',
    module: {
      tag: 'app-root',
      url: 'http://localhost:4200',
      scripts: [
        '/main-es2015.js',
        '/polyfills-es2015.js',
        '/runtime-es2015.js',
        '/styles-es2015.js',
        '/vendor-es2015.js'
      ]
    }
  },
  {
    path: '/chat',
    title: 'Chat',
    module: {
      id: 'react-app',
      url: 'http://localhost:3000',
      scripts: [
        '/static/js/runtime-main.js',
        '/static/js/main.chunk.js',
        '/static/js/2.chunk.js'
      ]
    }
  },
  {
    path: '/canard',
    title: 'Canard',
    module: {
      id: 'vue-app',
      url: 'http://localhost:8080',
      scripts: ['/js/app.js', '/js/chunk-vendors.js']
    }
  }
]
