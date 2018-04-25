import { LitElement, html, TemplateResult } from 'lit-component';
import { element } from 'lit-component-decorators';
import './bar';

@element('ch-embed-panel')
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
      
        #cardHeader {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          min-height: 50px;
          padding: 10px 16px;
          background: #293C41;
          color: white;
        }
      
        .content {
          max-width: 912px;
        }
      
        #iframe {
          width: 100%;
          box-sizing: border-box;
          border: none;
        }
      
        @media (max-width: 600px) {
          #cardHeader {
            padding: 10px 8px;
          }
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
      <div id="cardHeader">
        <div>Sponsored Content by Ford Motor Company</div>
      </div>
      <iframe id="iframe" src="./iframe.html" sandbox="allow-same-origin allow-scripts"></iframe>
    `;
  }
}