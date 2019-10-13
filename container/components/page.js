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

    this.loadScript(
      appModule.scripts.map(scriptPath => appModule.url + scriptPath)
    )
  }

  loadScript(scripts) {
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
