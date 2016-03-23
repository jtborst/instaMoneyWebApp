import {Component, OnInit} from 'angular2/core';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import {AccountsService} from '../../common/accounts-service';

@Component({
  selector: 'contact-chats',
  templateUrl: './app/components/contact-chats/contact-chats-component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ContactChatsComponent implements OnInit {
  contacts: Observable<Array<Contact>>;
  transactions: Observable<Array<Transaction>>;
  constructor (private contactsService: ContactsService, private accountsService: AccountsService) {}

  ngOnInit () {
    this.contacts = this.contactsService.getContacts();

   var o:Observable = this.accountsService.getAccounts()

    o.subscribe(
        data => {this.transactions = data},
        err => console.error(err),
        () => console.log('done')
    );
  }
}
