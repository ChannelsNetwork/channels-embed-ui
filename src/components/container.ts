import { LitElement, html, TemplateResult } from 'lit-component';
import { element } from 'lit-component-descriptors';
import './tab';
import './panel';

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
      
        ch-embed-panel {
          position: fixed;
          z-index: 101;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          transition: transform 0.5s ease-out;
          transform: translate3d(100%, 0, 0);
          will-change: transform;
        }
      
        ch-embed-panel.visible {
          transform: translate3d(0, 0, 0);
        }
      </style>
      <ch-tab on-open-tab="onOpenTab"></ch-tab>
      <ch-embed-panel id="panel" on-close-tab="onCloseTab"></ch-embed-panel>
    `;
  }

  onOpenTab() {
    this.$('panel').classList.add('visible');
  }
  onCloseTab() {
    this.$('panel').classList.remove('visible');
  }
}