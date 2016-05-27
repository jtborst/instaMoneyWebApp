import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';
import {StateService} from '../../common/state-service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AccountsService} from '../../common/accounts-service';


@Component({
  selector: 'contact-detail',
  templateUrl: './app/components/contact-chat/contact-chat-component.html',
  directives: [ROUTER_DIRECTIVES],
})
export class ContactChatComponent implements OnInit {
  transactions: Observable<Array<Transaction>>;
  contact: Contact;
  name: string;
    
  constructor (private accountsService: AccountsService, private contactsService: ContactsService, private routeParams: RouteParams, private stateService: StateService) {}
    
    
  ngOnInit () {
    this.contactId = this.routeParams.get('id');
    this.name = this.stateService.getName();
    //this.contactsService.getContact(this.contactId).subscribe(contact => this.contact = contact);

    var o:Observable = this.accountsService.getTransactions()

    o.subscribe(
        data => {this.transactions = data.transactions},
        err => console.error(err),
        () => console.log('done')
    );
  }
}