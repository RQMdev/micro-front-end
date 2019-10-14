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

    this.addEventListener('click', event => {
      const href = this.getLinkHref(event.target)
      if (href) {
        const { pathname } = new URL(href, location.origin)
        this.resolveRoute(pathname, event)
      }
    })

    window.onpopstate = event => {
      this.resolveRoute(location.pathname || '/', event)
    }
  }

  getLinkHref(element) {
    if (element.tagName === 'A') {
      return element.href || ''
    } else if (element.tagName !== 'BODY') {
      return this.getLinkHref(element.parentElement)
    } else {
      return undefined
    }
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
    } else if (targetRoute.path.startsWith(this.currentRoute.path)) {
      // react-router check if event was preventDefault and don't do anything if it is
    } else {
      event.preventDefault()
    }
  }
}
