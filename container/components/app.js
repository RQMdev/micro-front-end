export default class ContainerApp extends HTMLElement {
  constructor() {
    super()
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
    `
  }
}
