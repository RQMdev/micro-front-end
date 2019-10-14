import { routes } from '../config'

export default class ContainerPage extends HTMLElement {
  constructor() {
    super()
  }

  static get tagName() {
    return 'container-page'
  }

  connectedCallback() {
    const appModule = routes.find(route =>
      route.exact
        ? route.path === location.pathname
        : location.pathname.startsWith(route.path)
    ).module

    const frameworkRoot = this.createElementFromID(appModule)
    this.appendChild(frameworkRoot)

    this.loadScripts(
      appModule.scripts.map(scriptPath => appModule.url + scriptPath)
    )
    this.loadStyles(
      appModule.styles.map(stylePath => appModule.url + stylePath)
    )
  }

  loadScripts(scripts) {
    return this.promiseSerial(
      scripts.map(scriptPath => () =>
        new Promise((resolve, reject) => {
          const previousScript = document.getElementById(scriptPath)
          if (previousScript) {
            previousScript.remove()
          }
          const script = document.createElement('script')
          script.src = scriptPath
          script.id = scriptPath
          script.defer = true
          script.type = 'text/javascript'
          script.onload = resolve
          script.onerror = reject
          document.body.appendChild(script)
        })
      )
    )
  }

  loadStyles(styles) {
    return this.promiseSerial(
      styles.map(stylePath => () =>
        new Promise((resolve, reject) => {
          const previousStyle = document.getElementById(stylePath)
          if (previousStyle) {
            previousStyle.remove()
          }
          const style = document.createElement('link')
          style.href = stylePath
          style.id = stylePath
          style.rel = 'stylesheet'
          style.onload = resolve
          style.onerror = reject
          document.head.appendChild(style)
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
    let root = null
    if (appModule.tag) {
      root = document.createElement(appModule.tag)
    } else {
      root = document.createElement('div')
      root.id = appModule.id
    }
    return root
  }
}
