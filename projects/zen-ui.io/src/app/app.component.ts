import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ZenAnchor, ZenButton} from '@zen-ui/button';
import {ZenIcon} from '@zen-ui/icon';

@Component({
  selector: 'zen-root',
  imports: [RouterOutlet, ZenButton, ZenAnchor,ZenIcon],
  template: `
    <h1>ZEN UI DEMO BUTTONS</h1>
    <button zen-button
            color="primary"
            disabled>
      Zen primary
    </button>

    <button zen-button
            color="secondary" disabled>
      Zen secondary
      <zen-icon> home</zen-icon>
    </button>

    <a zen-button
       color="primary"
       disabled
       href="/"> Link Anchor</a>


    <router-outlet/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'zen-ui.io';
}
