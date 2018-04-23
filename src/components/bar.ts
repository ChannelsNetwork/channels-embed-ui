import { LitElement, html, TemplateResult } from 'lit-component';
import { element, property } from 'lit-component-descriptors';

@element('ch-bar')
export class ChannelsBar extends LitElement {
  @property() balance?: string = 'ℂ23.773';

  template(): TemplateResult {
    return html`
      <style>
        :host {
          background: #213034;
          height: 50px;
          padding: 0 0 0 16px;
          box-sizing: border-box;
          color: white;
          font-family: sans-serif;
          font-weight: 400;
          letter-spacing: 0.02em;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }
      
        :host,
        .balancePanel {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
        }
      
        a,
        a:hover,
        a:visited {
          text-align: center;
          color: inherit;
          text-decoration: none;
          outline: none;
          border: none;
        }
      
        .logo {
          display: block;
          height: 36px;
          width: auto;
        }
      
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }
      
        @media (max-width: 600px) {
          :host {
            padding: 0 0 0 8px;
          }
          .logo {
            height: 26px;
          }
        }
      </style>
      <a href="https://channels.cc" target="_blank">
        <img class="logo" alt="channels" src="https://channels.cc/s/images/logos/logo_full_40.png">
      </a>
      <div class="flex"></div>
      <a href="https://channels.cc/balance" target="_blank">
        <div class="balancePanel">
          <span class="balanceLabel">${this.balance}</span>
        </div>
      </a>
    `;
  }
}