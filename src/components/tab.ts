import { LitElement, html, TemplateResult } from 'lit-component';
import { element } from 'lit-component-descriptors';

@element('ch-tab')
export class ChannelsTab extends LitElement {
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
          font-size: 15px;
          color: #fff;
          background: rgba(0, 0, 0, 0.85);
          cursor: initial;
          display: none;
          font-family: sans-serif;
          font-weight: 400;
          letter-spacing: 0.02em;
          line-height: 1.35;
          -webkit-font-smoothing: antialiased;
        }
      
        #adContainer {
          height: 60px;
          width: 0px;
          overflow: hidden;
          transition: width 0.4s ease;
        }
      
        #adPanel {
          width: 70px;
          height: 60px;
          overflow: hidden;
          background-color: #f0f0f0;
          background-size: cover;
          background-origin: border-box;
          background-position: 50% 50%;
        }
      </style>
      <div class="container">
        <img class="logo" src="https://channels.cc/s/images/logos/logo_200.png" on-click="openTab">
        <div class="balanceBar" on-click="openTab"></div>
        <div id="adContainer">
          <div id="adPanel"></div>
        </div>
        <div id="tip">
          Channels is a micropayment system for content creators. Readers pay publishers using their Channels credit, which they can
          earn by watching sponsered content.
        </div>
      </div>
    `;
  }

  openTab(event: Event) {
    event.stopPropagation();
    this.fireEvent('open-tab');
  }

  connectedCallback(): Promise<void> {
    return super.connectedCallback().then(() => {
      const showAd = Math.random() > 0.2;
      if (showAd) {
        const ad = (Math.random() > 0.5) ? 'images/ad1.jpg' : 'images/ad2.jpg';
        this.$('adPanel').style.backgroundImage = `url("${ad}")`;
        setTimeout(() => {
          this.$('adContainer').style.width = '70px';
        }, 1000);
      }
    });
  }
}