import {Component} from 'angular2/core';
import {AppStateService} from '../../common/app-state';

@Component({
  selector: 'contact-header',
  template: `
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper orange darken-2">
          <span class="brand-logo center">{{title}}</span>
        </div>
      </nav>
    </div>`
})
export class ContactHeaderComponent {



}