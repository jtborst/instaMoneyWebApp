import {Component, OnInit} from 'angular2/core';
import {ContactHeaderComponent} from './components/contact-header/contact-header-component';
import {Contact} from './models/contact';
import {ContactsService} from './common/contacts-service';
import {AccountsService} from './common/accounts-service';
import {CloneService} from './common/clone-service';
import {ContactsListComponent} from './components/contacts-list/contacts-list-component';
import {ContactDetailComponent} from './components/contact-detail/contact-detail-component';
import {ContactEditorComponent} from './components/contact-editor/contact-editor-component';
import {ContactChatComponent} from './components/contact-chat/contact-chat-component';
import {ContactChatsComponent} from './components/contact-chats/contact-chats-component';
import {NewTransactionComponent} from './components/new-transaction/new-transaction-component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'contacts-app',
  template: `
    <router-outlet></router-outlet>
    `,
  directives: [ContactHeaderComponent, ROUTER_DIRECTIVES],
  providers: [ContactsService, AccountsService, ROUTER_PROVIDERS, CloneService, HTTP_PROVIDERS]
})
@RouteConfig([
  { path: '/', component: ContactsListComponent, name: 'ContactsList' },
  { path: '/contact/:id/chat', component: ContactChatComponent, name: 'ContactChat'},
  { path: '/contact/:id', component: ContactDetailComponent, name: 'ContactDetail' },
  { path: '/contact/:id/edit', component: ContactEditorComponent, name: 'ContactEditor' }
  { path: '/contact/:id/newtransaction', component: NewTransactionComponent, name: 'NewTransaction' }
])
export class ContactsApp {
}
