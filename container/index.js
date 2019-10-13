import * as Components from './components/index'

Object.values(Components).forEach(component =>
  customElements.define(component.tagName, component)
)
