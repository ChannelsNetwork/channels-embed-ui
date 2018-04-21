import { LitElement, html, TemplateResult, Properties } from '../../node_modules/lit-component/index.js';

export class ChannelsTab extends LitElement {
  static get properties(): Properties {
    return {
      label: ''
    }
  }

  label?: String;

  template(): TemplateResult {
    return html`
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

  // connectedCallback(): Promise<void> {
  //   return super.connectedCallback().then(() => {
  //     this.label = "helloooo";
  //   });
  // }
}

customElements.define('channels-tab', ChannelsTab);