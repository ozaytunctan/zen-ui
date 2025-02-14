import {Directive, ElementRef, inject, InjectionToken, input, model} from '@angular/core';
import {ColorTheme} from '@zen-ui/core';


export interface ZenButtonConfig {
  /** Default palette color to apply to buttons. */
  color?: ColorTheme;
}

/** Injection token that can be used to provide the default options the button component. */
export const ZEN_BUTTON_CONFIG = new InjectionToken<ZenButtonConfig>('ZEN_BUTTON_CONFIG');


/** Shared host configuration for all buttons */
export const ZEN_BUTTON_HOST: {
  [key: string]: string;
} = {
  '[attr.disabled]': '_getDisabledAttribute()',
  '[attr.aria-disabled]': '_getAriaDisabled()',
  '[class.zen-un-themed]': '!color()',
  '[class]': 'color() ? "zen-" + color() : ""',
}

@Directive()
export class ZenButtonBase {
  color = model<ColorTheme | string | null>();
  readonly disabled = input<boolean | unknown>();
  readonly ariaDisabled = input<boolean | unknown>();
  private _elementRef: ElementRef = inject<ElementRef>(ElementRef);

  constructor() {
    const config = inject(ZEN_BUTTON_CONFIG, {optional: true});
    const element = this._elementRef.nativeElement;
    const classList = (element as HTMLElement).classList;
    this.color.set(config?.color ?? null);
  }

  protected _getAriaDisabled() {
    if (this.ariaDisabled() != null) {
      return this.ariaDisabled();
    }

    return this.disabled() ? true : null;
  }

  protected _getDisabledAttribute() {
    return !this.disabled() ? null : true;
  }

}


export const ZEN_ANCHOR_HOST: {
  [key: string]: string;
} = {
  '[attr.disabled]': '_getDisabledAttribute()',
  '[attr.aria-disabled]': '_getAriaDisabled()',
  '[class.zen-un-themed]': '!color()',
  '[class]': 'color() ? "zen-" + color() : ""',
}


@Directive()
export class ZenAnchorBase extends ZenButtonBase {


}
