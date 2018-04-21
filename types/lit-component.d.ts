import { TemplateResult } from '../node_modules/lit-html/lit-html';
export { html, TemplateResult } from '../node_modules/lit-html/lit-html';

export interface Properties {
  [name: string]: any;
}

export declare class LitElement extends HTMLElement {
  static readonly properties: Properties;
  constructor();
  connectedCallback(): Promise<void>;
  attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
  invalidate(): Promise<void>;
  template(): TemplateResult;
  $(id: string): HTMLElement;
  $$(selector: string): HTMLElement;
  $$All(selector: string): NodeList;
}