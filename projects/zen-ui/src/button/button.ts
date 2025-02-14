import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ZEN_ANCHOR_HOST, ZEN_BUTTON_HOST, ZenAnchorBase, ZenButtonBase} from './button_base';

@Component({
  selector: 'button[zen-button], button[zen-raised-button] , button[zen-stroked-button]',
  templateUrl: 'button.html',
  styleUrls: ['button.scss'],
  host: ZEN_BUTTON_HOST,
  exportAs: 'zenButton',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ZenButton extends ZenButtonBase {

}

@Component({
  selector: `a[zen-button], a[zen-raised-button], a[zen-stroked-button]`,
  exportAs: 'zenButton,zenAnchor',
  templateUrl: 'button.html',
  styleUrls: ['button.scss'],
  host: ZEN_ANCHOR_HOST,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZenAnchor extends ZenAnchorBase {

}
