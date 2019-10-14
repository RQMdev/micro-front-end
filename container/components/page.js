import { reactModule } from '../config'

export default class ContainerPage extends HTMLElement {
  constructor() {
    super()
  }

  static get tagName() {
    return 'container-page'
  }

  connectedCallback() {
    const frameworkRoot = this.createElementFromID(reactModule)
    this.appendChild(frameworkRoot)
    this.loadScripts(
      reactModule.scripts.map(scriptPath => reactModule.url + scriptPath)
    )
    this.loadStyles(
      reactModule.styles.map(stylePath => reactModule.url + stylePath)
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
    const root = document.createElement('div')
    root.id = appModule.id
    return root
  }
}
