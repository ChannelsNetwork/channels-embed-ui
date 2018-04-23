import { ChannelsEmbedContainer } from './components/container';

let _initialized = false;

export function initialize() {
  if (_initialized) {
    return;
  }
  const containerNode = new ChannelsEmbedContainer();
  document.body.appendChild(containerNode);
  _initialized = true;
}

(() => {
  if ((document && document.readyState) === 'complete') {
    initialize();
    return;
  }
  window.addEventListener('load', () => { initialize(); });
})();