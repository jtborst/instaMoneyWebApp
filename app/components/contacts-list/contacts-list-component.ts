import {Component, OnInit} from 'angular2/core';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';
import {AppStateService} from '../../common/app-state';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'contacts-list',
  templateUrl: './app/components/contacts-list/contacts-list-component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Array<Contact>>;
  constructor (private contactsService: ContactsService) {}

  ngOnInit () {

    this.contacts = this.contactsService.getContacts();
  }
}
