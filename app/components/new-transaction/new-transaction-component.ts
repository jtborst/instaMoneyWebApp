import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';
import {AccountsService} from '../../common/accounts-service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Router, RouteParams} from 'angular2/router';

@Component({
  selector: 'new-transaction',
  templateUrl: './app/components/new-transaction/new-transaction-component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class NewTransactionComponent implements OnInit {
  contact: Contact;
  transaction: Transaction = <Transaction>{ transaction: {}};
  constructor (private router:Router, private contactsService: ContactsService, private accountsService: AccountsService, private routeParams: RouteParams) {}

  ngOnInit () {
    this.contactId = this.routeParams.get('id');
    this.contactsService.getContact(this.contactId).subscribe(contact => this.contact = contact);
  }

  save (transaction: Transaction) {
    transaction.from = "NL50INGB0001234567";
    transaction.to = this.contact.account;

    console.log(transaction);
    this.accountsService.newTransaction(transaction)
                        .subscribe(() => this.goToChat());
  }

  private goToChat () {
    this.router.navigate(['/ContactChat', {id: this.contactId}]);
  }

}