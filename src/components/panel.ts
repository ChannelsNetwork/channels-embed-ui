import { LitElement, html, TemplateResult } from 'lit-component';
import { element } from 'lit-component-descriptors';
import './bar';

@element('ch-emebed-panel')
export class ChannelsEmbedPanel extends LitElement {

  template(): TemplateResult {
    return html`
      <style>
        :host {
          display: block;
          background: white;
          font-family: sans-serif;
          font-weight: 400;
          letter-spacing: 0.02em;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          font-size: 18px;
        }
      
        .header {
          background: #293C41;
          color: white;
          padding: 20px 16px;
        }
      
        .content {
          max-width: 912px;
        }
      
        @media (max-width: 600px) {
          .header {
            padding: 16px 8px;
          }
          :host {
            font-size: 16px;
          }
        }
      </style>
      <ch-bar></ch-bar>
      <div class="header">
        <div class="content">Channels is a micropayment system for content creators. Readers pay publishers using their Channels credit, which they
          can earn by watching sponsered content.</div>
      </div>
    `;
  }
}