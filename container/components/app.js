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
        <div id="app-container">
        <router-outlet></router-outlet>
        </div>
      </container-router>
    `
  }
}
