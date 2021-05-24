/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { BtnType, ButtonTypeAttribute } from "./components/mx-button/mx-button";
export namespace Components {
    interface MxButton {
        "btnType": BtnType;
        "disabled": boolean;
        /**
          * Show chevron icon
         */
        "dropdown": boolean;
        /**
          * Sets display to flex instead of inline-flex
         */
        "full": boolean;
        /**
          * Create button as link
         */
        "href": string;
        /**
          * Class name of icon
         */
        "icon": string;
        /**
          * Only for link buttons
         */
        "target": string;
        "type": ButtonTypeAttribute;
        "value": string;
        "xl": boolean;
    }
    interface MxCheckbox {
        "checked": boolean;
        "labelName": string;
        "name": string;
        "value": string;
    }
    interface MxInput {
        "assistiveText": string;
        "dense": boolean;
        "error": boolean;
        "isActive": boolean;
        "isFocused": boolean;
        "label": string;
        "labelClass": string;
        "leftIcon": string;
        "name": string;
        "outerContainerClass": string;
        "rightIcon": string;
        "textarea": boolean;
        "textareaHeight": string;
        "type": string;
        "value": string;
    }
    interface MxRadio {
        "checked": boolean;
        "labelName": string;
        "name": string;
        "value": string;
    }
    interface MxSwitch {
        "checked": boolean;
        "labelName": string;
        "name": string;
        "value": string;
    }
    interface MxToggleButton {
        "disabled": boolean;
        "icon": string;
        "selected": boolean;
        /**
          * Only used inside a toggle button group
         */
        "value": any;
    }
    interface MxToggleButtonGroup {
        "value": any;
    }
}
declare global {
    interface HTMLMxButtonElement extends Components.MxButton, HTMLStencilElement {
    }
    var HTMLMxButtonElement: {
        prototype: HTMLMxButtonElement;
        new (): HTMLMxButtonElement;
    };
    interface HTMLMxCheckboxElement extends Components.MxCheckbox, HTMLStencilElement {
    }
    var HTMLMxCheckboxElement: {
        prototype: HTMLMxCheckboxElement;
        new (): HTMLMxCheckboxElement;
    };
    interface HTMLMxInputElement extends Components.MxInput, HTMLStencilElement {
    }
    var HTMLMxInputElement: {
        prototype: HTMLMxInputElement;
        new (): HTMLMxInputElement;
    };
    interface HTMLMxRadioElement extends Components.MxRadio, HTMLStencilElement {
    }
    var HTMLMxRadioElement: {
        prototype: HTMLMxRadioElement;
        new (): HTMLMxRadioElement;
    };
    interface HTMLMxSwitchElement extends Components.MxSwitch, HTMLStencilElement {
    }
    var HTMLMxSwitchElement: {
        prototype: HTMLMxSwitchElement;
        new (): HTMLMxSwitchElement;
    };
    interface HTMLMxToggleButtonElement extends Components.MxToggleButton, HTMLStencilElement {
    }
    var HTMLMxToggleButtonElement: {
        prototype: HTMLMxToggleButtonElement;
        new (): HTMLMxToggleButtonElement;
    };
    interface HTMLMxToggleButtonGroupElement extends Components.MxToggleButtonGroup, HTMLStencilElement {
    }
    var HTMLMxToggleButtonGroupElement: {
        prototype: HTMLMxToggleButtonGroupElement;
        new (): HTMLMxToggleButtonGroupElement;
    };
    interface HTMLElementTagNameMap {
        "mx-button": HTMLMxButtonElement;
        "mx-checkbox": HTMLMxCheckboxElement;
        "mx-input": HTMLMxInputElement;
        "mx-radio": HTMLMxRadioElement;
        "mx-switch": HTMLMxSwitchElement;
        "mx-toggle-button": HTMLMxToggleButtonElement;
        "mx-toggle-button-group": HTMLMxToggleButtonGroupElement;
    }
}
declare namespace LocalJSX {
    interface MxButton {
        "btnType"?: BtnType;
        "disabled"?: boolean;
        /**
          * Show chevron icon
         */
        "dropdown"?: boolean;
        /**
          * Sets display to flex instead of inline-flex
         */
        "full"?: boolean;
        /**
          * Create button as link
         */
        "href"?: string;
        /**
          * Class name of icon
         */
        "icon"?: string;
        /**
          * Only for link buttons
         */
        "target"?: string;
        "type"?: ButtonTypeAttribute;
        "value"?: string;
        "xl"?: boolean;
    }
    interface MxCheckbox {
        "checked"?: boolean;
        "labelName"?: string;
        "name"?: string;
        "value"?: string;
    }
    interface MxInput {
        "assistiveText"?: string;
        "dense"?: boolean;
        "error"?: boolean;
        "isActive"?: boolean;
        "isFocused"?: boolean;
        "label"?: string;
        "labelClass"?: string;
        "leftIcon"?: string;
        "name"?: string;
        "outerContainerClass"?: string;
        "rightIcon"?: string;
        "textarea"?: boolean;
        "textareaHeight"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface MxRadio {
        "checked"?: boolean;
        "labelName"?: string;
        "name"?: string;
        "value"?: string;
    }
    interface MxSwitch {
        "checked"?: boolean;
        "labelName"?: string;
        "name"?: string;
        "value"?: string;
    }
    interface MxToggleButton {
        "disabled"?: boolean;
        "icon"?: string;
        "selected"?: boolean;
        /**
          * Only used inside a toggle button group
         */
        "value"?: any;
    }
    interface MxToggleButtonGroup {
        /**
          * Emits the updated value as event.detail
         */
        "onMxInput"?: (event: CustomEvent<any>) => void;
        "value"?: any;
    }
    interface IntrinsicElements {
        "mx-button": MxButton;
        "mx-checkbox": MxCheckbox;
        "mx-input": MxInput;
        "mx-radio": MxRadio;
        "mx-switch": MxSwitch;
        "mx-toggle-button": MxToggleButton;
        "mx-toggle-button-group": MxToggleButtonGroup;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mx-button": LocalJSX.MxButton & JSXBase.HTMLAttributes<HTMLMxButtonElement>;
            "mx-checkbox": LocalJSX.MxCheckbox & JSXBase.HTMLAttributes<HTMLMxCheckboxElement>;
            "mx-input": LocalJSX.MxInput & JSXBase.HTMLAttributes<HTMLMxInputElement>;
            "mx-radio": LocalJSX.MxRadio & JSXBase.HTMLAttributes<HTMLMxRadioElement>;
            "mx-switch": LocalJSX.MxSwitch & JSXBase.HTMLAttributes<HTMLMxSwitchElement>;
            "mx-toggle-button": LocalJSX.MxToggleButton & JSXBase.HTMLAttributes<HTMLMxToggleButtonElement>;
            "mx-toggle-button-group": LocalJSX.MxToggleButtonGroup & JSXBase.HTMLAttributes<HTMLMxToggleButtonGroupElement>;
        }
    }
}
