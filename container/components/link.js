export default class ContainerLink extends HTMLElement {
  constructor() {
    super()
  }

  static get tagName() {
    return 'container-link'
  }

  connectedCallback() {
    this.path = this.getAttribute('path')
    this.title = this.getAttribute('title')

    this.render()
  }

  render() {
    this.innerHTML = `
      <a href="${this.path}">
        ${this.title}
      </a>
    `
  }
}
