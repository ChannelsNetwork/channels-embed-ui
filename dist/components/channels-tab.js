import { LitElement, html } from '../../node_modules/lit-component/index.js';
export class ChannelsTab extends LitElement {
    static get properties() {
        return {
            label: ''
        };
    }
    template() {
        return html `
      <style>
        :host {
          display: block;
          position: fixed;
          bottom: 10px;
          left: 10px;
          font-family: sans-serif;
        }
      
        .button {
          background: yellow;
          padding: 10px;
          box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.4);
        }
      </style>
      <div class="button">${this.label}</div>
    `;
    }
}
customElements.define('channels-tab', ChannelsTab);
//# sourceMappingURL=channels-tab.js.map