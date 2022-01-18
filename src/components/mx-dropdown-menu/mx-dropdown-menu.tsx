import { Component, Host, h, Prop, State, Watch, Listen } from '@stencil/core';

@Component({
  tag: 'mx-dropdown-menu',
  shadow: false,
})
export class MxDropdownMenu {
  dropdownWrapper: HTMLElement;
  inputElem: HTMLInputElement;
  menu: HTMLMxMenuElement;

  /** The aria-label attribute for the inner input element. */
  @Prop() elAriaLabel: string;
  @Prop() dense: boolean = false;
  /** Style as a filter dropdown with a 1dp elevation */
  @Prop() elevated: boolean = false;
  /** Style as a filter dropdown with a "flat" border color */
  @Prop() flat: boolean = false;
  @Prop() label: string;
  /** Additional classes for the dropdown wrapper (e.g. `min-w-0` to override the default `min-width`) */
  @Prop() dropdownClass: string;
  /** The `id` attribute for the internal input element */
  @Prop() dropdownId: string;
  @Prop() name: string;
  /** Text shown to the left of the arrow */
  @Prop() suffix: string;
  @Prop({ mutable: true }) value: any;

  @State() isFocused: boolean = false;

  @Listen('click')
  async onClick(e: MouseEvent) {
    // Resize the menu width to match the input.  This is done every click in case the input is resized after initial load.
    this.menu.style.width = this.dropdownWrapper.getBoundingClientRect().width + 'px';
    const clickedMenuItem = (e.target as HTMLElement).closest('mx-menu-item');
    if (!clickedMenuItem) return;
    this.value = await clickedMenuItem.getValue();
    // Fire native input event for consistency with mx-select
    this.inputElem.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
  }

  componentDidLoad() {
    this.updateInputValue();
    this.menu.anchorEl = this.dropdownWrapper;
  }
  @Watch('value')
  onValueChange() {
    this.updateInputValue();
  }

  onBlur() {
    if (this.menu && this.menu.isOpen) return; // Style as focused/active while menu is open
    this.isFocused = false;
  }

  onFocus() {
    this.isFocused = true;
  }

  onMenuClose() {
    if (!this.inputElem.contains(document.activeElement)) this.isFocused = false;
  }

  updateInputValue() {
    this.inputElem.value = this.value;
  }

  get dropdownWrapperClass() {
    let str = 'dropdown-wrapper flex items-center relative rounded-lg';
    str += this.dense ? ' h-36' : ' h-48';
    if (this.elevated) str += ' elevated shadow-1';
    if (this.flat) str += ' flat';
    str += this.isFocused ? ' focused border-2' : ' border';
    if (this.dropdownClass) str += ' ' + this.dropdownClass;
    return str;
  }

  get inputClass() {
    let str =
      'absolute inset-0 w-full h-full pl-16 overflow-hidden outline-none appearance-none select-none bg-transparent cursor-pointer disabled:cursor-auto';
    if (this.isFocused) str += ' -ml-1'; // prevent shifting due to border-width change
    return str;
  }

  get suffixClass() {
    let str = 'icon-suffix absolute flex items-center h-full right-12 space-x-8 pointer-events-none';
    if (this.isFocused) str += ' -mr-1'; // prevent shifting due to border-width change
    return str;
  }

  render() {
    return (
      <Host class="mx-dropdown-menu block">
        <div ref={el => (this.dropdownWrapper = el)} class={this.dropdownWrapperClass}>
          <input
            aria-label={this.elAriaLabel || this.label}
            class={this.inputClass}
            id={this.dropdownId}
            name={this.name}
            onBlur={this.onBlur.bind(this)}
            onFocus={this.onFocus.bind(this)}
            placeholder={this.label}
            readonly
            ref={el => (this.inputElem = el)}
            tabindex="0"
            type="text"
          />
          <span class={this.suffixClass}>
            {this.suffix && <span class="suffix flex items-center h-full px-4">{this.suffix}</span>}
            <i data-testid="arrow" class="mds-arrow-triangle-down text-icon"></i>
          </span>
        </div>
        <mx-menu
          ref={el => (this.menu = el)}
          placement="bottom"
          offset={[0, 1]}
          onMxClose={this.onMenuClose.bind(this)}
        >
          <slot></slot>
        </mx-menu>
      </Host>
    );
  }
}
