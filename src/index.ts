import { ChannelsEmbedContainer } from './components/container';

let _initialized = false;

export function initialize() {
  if (_initialized) {
    return;
  }

  const containerNode = new ChannelsEmbedContainer();
  document.body.appendChild(containerNode);

  console.log("Initialize!");
  _initialized = true;
}