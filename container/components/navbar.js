import { routes } from '../config'

export default class ContainerNavbar extends HTMLElement {
  constructor() {
    super()
  }

  static get tagName() {
    return 'container-navbar'
  }

  render() {
    this.innerHTML = `
    <nav role="navigation">
      <ul>
      ${routes
        .filter(route => route.title)
        .map(
          route => `
            <li>
              <container-link
                path="${route.path}"
                title="${route.title}"
              ></container-link>
            </li>
          `
        )
        .join('')}
      </ul>
    </nav>
  `
  }

  connectedCallback() {
    this.render()
  }
}
