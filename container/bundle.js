(function () {
  'use strict';

  class ContainerApp extends HTMLElement {
    constructor() {
      super();
    }

    static get tagName() {
      return 'container-app'
    }

    connectedCallback() {
      this.innerHTML = `
    <container-navbar></container-navbar>
      <div id="app-container">
        <container-page></container-page>
      </div>
    `;
    }
  }

  const reactModule = {
    id: 'react-app',
    url: 'http://localhost:3000',
    scripts: [
      '/static/js/runtime-main.js',
      '/static/js/main.chunk.js',
      '/static/js/2.chunk.js'
    ],
    styles: ['/static/css/main.chunk.css']
  };

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
  };

  const vueModule = {
    id: 'vue-app',
    url: 'http://localhost:8080',
    scripts: ['/js/app.js', '/js/chunk-vendors.js'],
    styles: ['/css/app.css']
  };

  const routes = [
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
  ];

  class ContainerPage extends HTMLElement {
    constructor() {
      super();
    }

    static get tagName() {
      return 'container-page'
    }

    connectedCallback() {
      const appModule = routes.find(route =>
        route.exact
          ? route.path === location.pathname
          : location.pathname.startsWith(route.path)
      ).module;

      const frameworkRoot = this.createElementFromID(appModule);
      this.appendChild(frameworkRoot);

      this.loadScripts(
        appModule.scripts.map(scriptPath => appModule.url + scriptPath)
      );
      this.loadStyles(
        appModule.styles.map(stylePath => appModule.url + stylePath)
      );
    }

    loadScripts(scripts) {
      return this.promiseSerial(
        scripts.map(scriptPath => () =>
          new Promise((resolve, reject) => {
            const previousScript = document.getElementById(scriptPath);
            if (previousScript) {
              previousScript.remove();
            }
            const script = document.createElement('script');
            script.src = scriptPath;
            script.id = scriptPath;
            script.defer = true;
            script.type = 'text/javascript';
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
          })
        )
      )
    }

    loadStyles(styles) {
      return this.promiseSerial(
        styles.map(stylePath => () =>
          new Promise((resolve, reject) => {
            const previousStyle = document.getElementById(stylePath);
            if (previousStyle) {
              previousStyle.remove();
            }
            const style = document.createElement('link');
            style.href = stylePath;
            style.id = stylePath;
            style.rel = 'stylesheet';
            style.onload = resolve;
            style.onerror = reject;
            document.head.appendChild(style);
          })
        )
      )
    }

    promiseSerial(funcs, init) {
      return funcs.reduce(
        (promise, func) => promise.then(func),
        Promise.resolve(init)
      )
    }

    createElementFromID(appModule) {
      let root = null;
      if (appModule.tag) {
        root = document.createElement(appModule.tag);
      } else {
        root = document.createElement('div');
        root.id = appModule.id;
      }
      return root
    }
  }

  class ContainerLink extends HTMLElement {
    constructor() {
      super();
    }

    static get tagName() {
      return 'container-link'
    }

    connectedCallback() {
      this.path = this.getAttribute('path');
      this.title = this.getAttribute('title');

      this.render();
    }

    render() {
      this.innerHTML = `
      <a href="${this.path}">
        ${this.title}
      </a>
    `;
    }
  }

  class ContainerNavbar extends HTMLElement {
    constructor() {
      super();
    }

    static get tagName() {
      return 'container-navbar'
    }

    render() {
      this.innerHTML = `
    <nav role="navigation">
      <ul>
      ${routes
        .filter(route => route.title)
        .map(
          route => `
            <li>
              <container-link
                path="${route.path}"
                title="${route.title}"
              ></container-link>
            </li>
          `
        )
        .join('')}
      </ul>
    </nav>
  `;
    }

    connectedCallback() {
      this.render();
    }
  }



  var Components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ContainerApp: ContainerApp,
    ContainerPage: ContainerPage,
    ContainerLink: ContainerLink,
    ContainerNavbar: ContainerNavbar
  });

  Object.values(Components).forEach(component =>
    customElements.define(component.tagName, component)
  );

}());
