import { Component, Host, h, Element, State, Listen, Method } from '@stencil/core';
import { lockBodyScroll, unlockBodyScroll } from '../../utils/bodyScroll';
import { moveToPortal } from '../../utils/portal';
import { fadeIn, fadeOut, fadeScaleIn } from '../../utils/transitions';
export class MxDialog {
  constructor() {
    this.isVisible = false;
  }
  onKeyDown(e) {
    if (!this.isVisible)
      return;
    const isFocusOutside = () => !document.activeElement || !this.focusElements.includes(document.activeElement);
    if (e.key === 'Tab') {
      this.getFocusElements();
      // Trap focus inside dialog
      if (e.shiftKey && document.activeElement === this.firstFocusElement) {
        this.lastFocusElement.focus();
        e.preventDefault();
      }
      else if (isFocusOutside() || document.activeElement === this.lastFocusElement) {
        this.firstFocusElement && this.firstFocusElement.focus();
        e.preventDefault();
      }
    }
    else if (e.key === 'Enter') {
      // Confirm on Enter (if not already focused on a dialog focusable element)
      this.getFocusElements();
      if (isFocusOutside()) {
        e.preventDefault();
        this.firstFocusElement && this.firstFocusElement.focus();
        this.closeDialog(true);
      }
    }
    else if (e.key === 'Escape') {
      // Cancel on Escape
      this.closeDialog();
      e.preventDefault();
    }
  }
  /** A Promise-based replacement for `Window.alert()` with some additional options */
  async alert(message, { confirmLabel = 'Okay', cancelLabel, heading } = {}) {
    return this.open(message, { heading, confirmLabel, cancelLabel });
  }
  /** A Promise-based replacement for `Window.confirm()` that resolves to a boolean */
  async confirm(message, { confirmLabel = 'Okay', cancelLabel = 'Cancel', heading } = {}) {
    return this.open(message, { heading, confirmLabel, cancelLabel });
  }
  disconnectedCallback() {
    unlockBodyScroll(this.element);
  }
  /** Opens a dialog using the provided parameters.
   * If/when we implement confirmation dialogs with inputs, radio groups, etc. this method can be
   * exposed with additional parameters needed to create those dialogs. */
  async open(message, { cancelLabel, confirmLabel, heading } = {}) {
    this.heading = heading;
    this.message = message;
    this.cancelLabel = cancelLabel;
    this.confirmLabel = confirmLabel;
    this.showDialog();
    return new Promise(resolve => {
      this.deferredResolve = resolve;
    });
  }
  async showDialog() {
    this.ancestorFocusedElement = document.activeElement;
    moveToPortal(this.element);
    lockBodyScroll(this.element);
    this.isVisible = true;
    await new Promise(resolve => requestAnimationFrame(resolve));
    await Promise.all([fadeIn(this.backdrop), fadeScaleIn(this.modal)]);
  }
  async closeDialog(isConfirmed = false) {
    await Promise.all([fadeOut(this.backdrop), fadeOut(this.modal)]);
    this.isVisible = false;
    unlockBodyScroll(this.element);
    // Restore focus to the element that was focused before the modal was opened
    this.ancestorFocusedElement && this.ancestorFocusedElement.focus();
    this.deferredResolve(isConfirmed);
  }
  getFocusElements() {
    const isVisible = (el) => !!el.offsetParent;
    this.focusElements = Array.from(this.element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(isVisible);
    if (this.focusElements.length) {
      this.firstFocusElement = this.focusElements[0];
      this.lastFocusElement = this.focusElements[this.focusElements.length - 1];
    }
  }
  get hostClass() {
    let str = 'mx-dialog fixed inset-0 flex items-center justify-center';
    if (!this.isVisible)
      str += ' hidden';
    return str;
  }
  render() {
    return (h(Host, { class: this.hostClass },
      h("div", { ref: el => (this.backdrop = el), class: "bg-dialog-backdrop absolute inset-0 z-0" }),
      h("div", { ref: el => (this.modal = el), role: "alertdialog", "aria-labelledby": this.heading ? 'dialog-heading' : null, "aria-describedby": this.message ? 'dialog-message' : null, "aria-modal": "true", "data-testid": "modal", class: "modal w-320 flex flex-col rounded-lg shadow-4 relative overflow-hidden" },
        h("div", { class: "p-24 flex-grow" },
          this.heading && (h("h1", { id: "dialog-heading", class: "text-h6 emphasis !my-0 pb-16" }, this.heading)),
          this.message && (h("p", { id: "dialog-message", class: "text-4 my-0" }, this.message))),
        (this.confirmLabel || this.cancelLabel) && (h("div", { class: "flex flex-wrap items-center justify-end p-4" },
          this.confirmLabel && (h("mx-button", { class: "m-4 order-2", btnType: "text", onClick: () => this.closeDialog(true) }, this.confirmLabel)),
          this.cancelLabel && (h("mx-button", { class: "m-4 order-1", btnType: "text", onClick: () => this.closeDialog() }, this.cancelLabel)))))));
  }
  static get is() { return "mx-dialog"; }
  static get states() { return {
    "isVisible": {}
  }; }
  static get methods() { return {
    "alert": {
      "complexType": {
        "signature": "(message: string, { confirmLabel, cancelLabel, heading }?: DialogOptions) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "DialogOptions": {
            "location": "local"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "A Promise-based replacement for `Window.alert()` with some additional options",
        "tags": []
      }
    },
    "confirm": {
      "complexType": {
        "signature": "(message: string, { confirmLabel, cancelLabel, heading }?: DialogOptions) => Promise<boolean>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "DialogOptions": {
            "location": "local"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "A Promise-based replacement for `Window.confirm()` that resolves to a boolean",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "element"; }
  static get listeners() { return [{
      "name": "keydown",
      "method": "onKeyDown",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
