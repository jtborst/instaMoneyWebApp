import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';
import {AccountsService} from '../../common/accounts-service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Router, RouteParams} from 'angular2/router';
import {StateService} from '../../common/state-service';

@Component({
  selector: 'new-transaction',
  templateUrl: './app/components/new-transaction/new-transaction-component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class NewTransactionComponent implements OnInit {
  contact: Contact;
  name: string;
  image: string;
  transaction: Transaction = <Transaction>{ transaction: {}};
  constructor (private router:Router, private contactsService: ContactsService, private accountsService: AccountsService, private routeParams: RouteParams, private stateService: StateService) {}

  ngOnInit () {
    this.contactId = this.routeParams.get('id');
    this.name = this.stateService.getName();
    this.image = this.stateService.getImage();
    //this.contactsService.getContact(this.contactId).subscribe(contact => this.contact = contact);

    var o:Observable = this.accountsService.getAccounts()

    o.subscribe(
        data => {this.account = data},
        err => console.error(err),
        () => console.log('done')
    );
  }

  save (transaction: Transaction) {
    transaction.from = "NL93INGB0978425803";
    transaction.to = this.stateService.getAccount();

    console.log(transaction);
    this.accountsService.newTransaction(transaction)
                         .subscribe(() => this.goToChat());
  }

  private goToChat () {
    this.router.navigate(['/ContactChat', {id: this.contactId}]);
  }

}