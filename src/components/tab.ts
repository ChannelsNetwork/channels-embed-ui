import { LitElement, html, TemplateResult } from 'lit-component';
import { element, property } from 'lit-component-descriptors';

@element('ch-tab')
export class ChannelsTab extends LitElement {
  @property() ad?: any;
  @property() balanceLevel = 5;

  template(): TemplateResult {
    return html`
      <style>
        :host {
          display: block;
        }
      
        .container {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          background: #293C41;
          border-radius: 30px 0 0 30px;
          box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 3px 3px -2px rgba(0, 0, 0, 0.4);
          cursor: pointer;
        }
      
        .container:hover #tip {
          display: block;
        }
      
        .logo {
          height: 30px;
          width: auto;
          padding: 15px 9px 15px 15px;
        }
      
        .balanceBar {
          background: #ffeb3b;
          width: 10px;
          height: 60px;
          box-sizing: border-box;
        }
      
        .hidden {
          display: none;
        }
      
        #tip {
          position: absolute;
          top: 100%;
          right: 0px;
          width: 280px;
          padding: 10px;
          margin-top: 10px;
          box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);
          font-family: sans-serif;
          font-weight: 300;
          font-size: 15px;
          letter-spacing: 0.02em;
          line-height: 1.3em;
          color: #fff;
          background: rgba(0, 0, 0, 0.85);
          cursor: initial;
          display: none;
        }
      </style>
      <div class="container">
        <img class="logo" src="https://channels.cc/s/images/logos/logo_200.png">
        <div class="balanceBar"></div>
        <div id="tip">
          Channels is a micropayment system for content creators. Readers pay publishers using their Channels credit, which they can
          earn by watching sponsered content.
        </div>
      </div>
    `;
  }
}