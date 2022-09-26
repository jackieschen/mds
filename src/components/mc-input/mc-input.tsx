import { Component, Host, Prop, h } from '@stencil/core';
import { nanoid } from 'nanoid';

export type McInputType = 'text' | 'email' | 'file' | 'hidden' | 'number' | 'password' | 'search' | 'tel';

export interface IMcInputProps {
  type?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  readonly?: boolean;
  maxlength?: number;
  inputId?: string;
  label?: string;
  placeholder?: string;
  instructions?: string;
  error?: boolean;
  errorMsg?: string;
  elAriaLabel?: string;
  hideCharacterCount?: boolean;
  required?: boolean;
  searchLabel?: string;
  leftIcon?: string;
}

@Component({
  tag: 'mc-input',
  shadow: false,
})
export class McInput implements IMcInputProps {
  elemInput!: HTMLInputElement;
  btnSearch!: HTMLMcButtonElement;
  elemFileUploadNameHolder!: HTMLInputElement;
  elemFileInput!: HTMLInputElement;

  @Prop() type: McInputType;
  @Prop() name = '';
  @Prop() value = '';
  @Prop() disabled = false;
  @Prop() readonly = false;
  @Prop() maxlength: number;
  @Prop() inputId: string;
  @Prop() label = '';
  @Prop() placeholder = '';
  @Prop() instructions = '';
  @Prop() error = false;
  @Prop() errorMsg = '';
  @Prop() elAriaLabel: string;
  @Prop() hideCharacterCount: boolean;
  @Prop() required: boolean = false;
  @Prop() searchLabel: string = 'Search';
  @Prop() leftIcon: string;

  componentWillRender() {
    this.inputId = this.inputId || nanoid(10);

    if (this.type === 'search') {
      this.leftIcon = 'ph-magnifying-glass';
    } else if (this.type === 'file') {
      this.leftIcon = 'ph-file';
    }
  }

  get makeInputClasses() {
    const classArr = ['border', 'text-4', 'px-15', 'py-12', 'rounded', 'border', 'border-secondary'];

    if (this.error) {
      const index = classArr.indexOf('border-secondary');
      classArr[index] = 'border-status-error';
    }

    if (this.disabled || this.readonly) {
      classArr.push('bg-secondary-ultra-light');
    }

    if (this.type === 'search' || this.type === 'file') {
      const rightPad = this.type === 'search' ? 'pr-112' : 'pr-120';
      classArr.push(rightPad);
      classArr.push('pl-36');
    }

    return classArr.join(' ');
  }

  handleInputFocus() {
    this.btnSearch.classList.remove('hidden');
  }

  handleInputBlur() {
    if (this.elemInput.value === '') {
      this.btnSearch.classList.add('hidden');
    }
  }

  triggerFileSelection() {
    if (this.disabled) return false;
    this.elemFileInput.click();
  }

  handleFileUploadChange() {
    if (this.elemFileInput.files.length > 0) {
      this.elemFileUploadNameHolder.value = this.elemFileInput.files[0].name;
    } else {
      this.elemFileUploadNameHolder.value = '';
    }
  }

  render() {
    return (
      <Host>
        {this.label && (
          <label htmlFor={this.inputId} class="block text-secondary font-bold subtitle4 mb-10 uppercase">
            {this.label}
            {this.required && <span class="text-status-error">*</span>}
          </label>
        )}
        <div class="flex items-center relative">
          {this.leftIcon && <i class={`leftIcon ${this.leftIcon}`} />}
          {this.type !== 'file' ? (
            <input
              id={this.inputId}
              class={this.makeInputClasses}
              type={this.type}
              name={this.name}
              value={this.value}
              placeholder={this.placeholder}
              disabled={this.disabled ? true : false}
              readonly={this.readonly ? true : false}
              aria-label={this.elAriaLabel}
              onFocus={this.handleInputFocus.bind(this)}
              onBlur={this.handleInputBlur.bind(this)}
              ref={el => (this.elemInput = el as HTMLInputElement)}
            />
          ) : (
            <div class="w-full">
              <input
                type="text"
                class={`w-full ${this.makeInputClasses}`}
                onClick={this.triggerFileSelection.bind(this)}
                ref={el => (this.elemFileUploadNameHolder = el as HTMLInputElement)}
                disabled={this.disabled ? true : false}
                readonly
              />
              <input
                type="file"
                ref={el => (this.elemFileInput = el as HTMLInputElement)}
                onChange={this.handleFileUploadChange.bind(this)}
                name={this.name}
              />
            </div>
          )}

          {this.type === 'search' && (
            <mc-button ref={el => (this.btnSearch = el as HTMLMcButtonElement)} class="hidden" small>
              {this.searchLabel}
            </mc-button>
          )}
          {this.type === 'file' && (
            <mc-button onClick={this.triggerFileSelection.bind(this)} disabled={this.disabled ? true : false} small>
              Choose File
            </mc-button>
          )}
        </div>
        {this.instructions && !this.error && (
          <section class="text-secondary caption1 mt-10">{this.instructions}</section>
        )}
        {this.error && this.errorMsg && (
          <section class="flex caption1 mt-10 text-status-error items-center gap-6">
            <i class="ph-warning"></i>
            {this.errorMsg}
          </section>
        )}
      </Host>
    );
  }
}
