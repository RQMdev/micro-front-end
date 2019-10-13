export default class ContainerApp extends HTMLElement {
  constructor() {
    super()
  }

  static get tagName() {
    return 'container-app'
  }

  connectedCallback() {
    this.innerHTML = `
      <container-router>
        <container-navbar></container-navbar>
        <router-outlet></router-outlet>
      </container-router>
    `
  }
}
