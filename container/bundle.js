(function () {
  'use strict';

  class ContainerApp extends HTMLElement {
    constructor() {
      super();
    }

    static get tagName() {
      return 'container-app'
    }

    connectedCallback() {
      this.innerHTML = `
      <container-page></container-page>
    `;
    }
  }

  class ContainerPage extends HTMLElement {
    constructor() {
      super();
    }

    static get tagName() {
      return 'container-page'
    }

    connectedCallback() {}
  }



  var Components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ContainerApp: ContainerApp,
    ContainerPage: ContainerPage
  });

  Object.values(Components).forEach(component =>
    customElements.define(component.tagName, component)
  );

}());
