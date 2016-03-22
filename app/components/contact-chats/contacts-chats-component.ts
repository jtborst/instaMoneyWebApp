import {Component, OnInit} from 'angular2/core';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'contact-chats',
  templateUrl: './app/components/contact-chats/contact-chats-component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ContactChatsComponent implements OnInit {
  contacts: Observable<Array<Contact>>;
  constructor (private contactsService: ContactsService) {}

  ngOnInit () {
    this.contacts = this.contactsService.getContacts();
  }
}
