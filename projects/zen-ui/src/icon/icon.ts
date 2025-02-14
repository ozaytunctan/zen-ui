import {Directive} from '@angular/core';

@Directive()
export class ZenBaseIcon {
  constructor() {
  }
}


import {Component} from '@angular/core';

@Component({
  selector: 'zen-icon',
  template: `
    <ng-content/>`
})
export class ZenIcon extends ZenBaseIcon {

}


