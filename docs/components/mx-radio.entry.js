import { r as registerInstance, h, f as Host } from './index-935f3e8d.js';

const MxRadio = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = '';
    this.value = '';
    this.labelName = '';
    this.checked = false;
  }
  render() {
    return (h(Host, { class: "mx-radio" }, h("label", { class: "relative inline-flex flex-nowrap align-center items-center cursor-pointer text-4" }, h("input", { class: "absolute h-0 w-0 opacity-0", type: "radio", name: this.name, value: this.value, checked: this.checked }), h("span", { class: "flex h-20 w-20 cursor-pointer rounded-full" }), h("div", { class: "ml-16 inline-block", "data-testid": "labelName" }, this.labelName))));
  }
};

export { MxRadio as mx_radio };
