const reactModule = {
  id: 'react-app',
  url: 'http://localhost:3000',
  scripts: [
    '/static/js/runtime-main.js',
    '/static/js/main.chunk.js',
    '/static/js/2.chunk.js'
  ],
  styles: ['/static/css/main.chunk.css']
}

const angularModule = {
  tag: 'app-root',
  url: 'http://localhost:4200',
  scripts: [
    '/main-es2015.js',
    '/polyfills-es2015.js',
    '/runtime-es2015.js',
    '/styles-es2015.js',
    '/vendor-es2015.js'
  ],
  styles: []
}

const vueModule = {
  id: 'vue-app',
  url: 'http://localhost:8080',
  scripts: ['/js/app.js', '/js/chunk-vendors.js'],
  styles: ['/css/app.css']
}

export const routes = [
  {
    path: '/',
    exact: true,
    module: reactModule
  },
  {
    path: '/chien',
    title: 'Chien',
    module: angularModule
  },
  {
    path: '/chat',
    title: 'Chat',
    module: reactModule
  },
  {
    path: '/canard',
    title: 'Canard',
    module: vueModule
  }
]
