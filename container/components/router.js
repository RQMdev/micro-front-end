import { routes } from '../config'

export default class ContainerRouter extends HTMLElement {
  constructor() {
    super()
  }

  static get tagName() {
    return 'container-router'
  }

  connectedCallback() {
    this.resolveRoute(location.pathname)
  }

  resolveRoute(path, event = new Event('click')) {
    console.log('resolveRoute with path :', path)
    const targetRoute = this.findRoute(path)
    console.log('targetRoute', targetRoute)
    if (!targetRoute) {
      this.resolveRoute('/')
    }
    this.changePage(path)
    this.renderRoute(targetRoute, event, path)
  }

  findRoute(path) {
    console.log('this.routes : ', routes)
    return routes.find(route =>
      route.exact ? route.path === path : path.startsWith(route.path)
    )
  }

  changePage(path) {
    window.history.pushState(window.history.state, null, path)
  }

  renderRoute(targetRoute, event) {
    if (this.currentRoute !== targetRoute) {
      event.preventDefault()
      const routerOutlet = this.querySelector('router-outlet')
      routerOutlet.innerHTML = '<container-page></container-page>'
      this.currentRoute = targetRoute
    } else {
      event.preventDefault()
    }
  }
}
