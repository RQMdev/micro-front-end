export default class ContainerApp extends HTMLElement {
  constructor() {
    super()
  }

  static get tagName() {
    return 'container-app'
  }

  connectedCallback() {
    this.innerHTML = `
     <container-page></container-page>
    `
  }
}
