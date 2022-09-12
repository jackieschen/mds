import { Component, Host, h, Prop, Element } from '@stencil/core';
import { propagateDataAttributes } from '../../utils/utils';

// TODO: Should "Alt Small" and "Small" be exclusive types?
// https://github.com/moxiworks/mds/issues/208#issuecomment-1242143965
export type McBtnType = 'normal' | 'ghost' | 'transparent' | 'action' | 'error' | 'warning';
export type ButtonTypeAttribute = 'button' | 'submit' | 'reset';

export interface IMcButtonProps {
  btnType?: McBtnType;
  type?: ButtonTypeAttribute;
  value?: string;
  form?: string;
  formaction?: string;
  disabled?: boolean;
  small?: boolean; // TODO: Remove if "small" ends up being a unique type.
  href?: string;
  target?: string;
  full?: boolean;
  dropdown?: boolean;
  iconLeft?: string;
  iconRight?: string;
  elAriaLabel?: string;
}

@Component({
  tag: 'mc-button',
  shadow: false,
})
export class McButton implements IMcButtonProps {
  dataAttributes = {};
  hasLeftSlot = false;
  hasRightSlot = false;

  @Prop({ mutable: true }) btnType: McBtnType = 'normal';
  @Prop() disabled = false;
  /** Show dropdown icon on right (shorthand for `icon-right="mds-arrow-triangle-down"`) */
  @Prop() dropdown = false;
  /** The aria-label attribute for the inner button element. */
  @Prop() elAriaLabel: string;
  @Prop() formaction: string;
  @Prop() form: string;
  /** Sets display to flex instead of inline-flex */
  @Prop() full = false;
  /** Create button as link */
  @Prop() href: string;
  /** Class name of left icon */
  @Prop() iconLeft: string;
  /** Class name of right icon */
  @Prop() iconRight: string;
  @Prop() small = false; // TODO: Remove if "small" ends up being a unique type.
  /** Only for link buttons */
  @Prop() target: string;
  @Prop() type: ButtonTypeAttribute = 'button';
  @Prop() value: string;

  @Element() element: HTMLMcButtonElement;

  componentWillRender() {
    this.hasLeftSlot = !!this.element.querySelector('[slot="left"]');
    this.hasRightSlot = !!this.element.querySelector('[slot="right"]');
    propagateDataAttributes.call(this);
  }

  onClick(e: MouseEvent) {
    if (this.disabled) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }
  }

  get buttonClass() {
    let str = this.btnType + '-button'; // Sets color vars
    str += ' flex items-center justify-center relative overflow-hidden appearance-none select-none';
    str += ' cursor-pointer disabled:pointer-events-none disabled:cursor-auto hover:no-underline';
    str += ' w-full rounded font-bold caption1 uppercase';
    if (this.btnType === 'ghost') str += ' border';
    // TODO: Update below lines if "small" ends up being a unique type.
    str += this.small ? ' min-h-30' : ' min-h-40';
    str += this.small || this.hasRightSlot || this.iconRight || this.dropdown ? ' pr-15' : ' pr-20';
    str += this.small || this.hasLeftSlot || this.iconLeft ? ' pl-15' : ' pl-20';
    return str;
  }

  render() {
    const buttonContent = (
      <div class="flex justify-center items-center content-center relative overflow-hidden whitespace-nowrap">
        {this.hasLeftSlot && (
          <span class="mr-10">
            <slot name="left" />
          </span>
        )}
        {this.iconLeft && <i class={'mr-10 text-3 ' + this.iconLeft}></i>}
        <span class="slot-content truncate">
          <slot />
        </span>
        {this.hasRightSlot && (
          <span class="ml-10">
            <slot name="right" />
          </span>
        )}
        {(this.iconRight || this.dropdown) && (
          <i
            data-testid="dropdown-icon"
            class={`ml-10 text-3 ${this.dropdown ? 'mds-arrow-triangle-down' : this.iconRight}`}
          ></i>
        )}
      </div>
    );

    return (
      <Host class={`mc-button ${this.small ? 'min-w-100' : 'min-w-150'} ${this.full ? 'flex' : 'inline-flex'}`}>
        {this.href ? (
          <a
            href={this.href}
            target={this.target}
            aria-disabled={this.disabled ? 'true' : null}
            class={this.buttonClass}
            onClick={this.onClick.bind(this)}
            {...this.dataAttributes}
          >
            {buttonContent}
          </a>
        ) : (
          <button
            type={this.type}
            form={this.form}
            formaction={this.formaction}
            value={this.value}
            disabled={this.disabled}
            class={this.buttonClass}
            onClick={this.onClick.bind(this)}
            aria-label={this.elAriaLabel}
            {...this.dataAttributes}
          >
            {buttonContent}
          </button>
        )}
      </Host>
    );
  }
}
