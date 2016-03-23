import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'new-transaction',
  templateUrl: './app/components/new-transaction/new-transaction-component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class NewTransactionComponent implements OnInit {
  contact: Contact;
  constructor (private contactsService: ContactsService, private routeParams: RouteParams) {}

  ngOnInit () {
    this.contactId = this.routeParams.get('id');
    this.contactsService.getContact(this.contactId).subscribe(contact => this.contact = contact);
  }
}