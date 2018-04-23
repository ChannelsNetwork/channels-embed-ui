import { LitElement, html, TemplateResult } from 'lit-component';
import { element } from 'lit-component-descriptors';
import './tab';

@element('ch-embed-container')
export class ChannelsEmbedContainer extends LitElement {
  template(): TemplateResult {
    return html`
      <style>
        :host {
          display: block;
          width: 0;
          height: 0;
        }
      
        ch-tab {
          position: fixed;
          z-index: 101;
          top: 20px;
          right: 0;
        }
      </style>
      <ch-tab></ch-tab>
    `;
  }
}