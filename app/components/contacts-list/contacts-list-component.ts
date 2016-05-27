import {Component, OnInit} from 'angular2/core';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';
import {StateService} from '../../common/state-service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import {Account} from '../../models/account';
import {AccountsService} from '../../common/accounts-service';
import {Router} from 'angular2/router';
// import {Inject} from 'angular2/core';


@Component({
  selector: 'contacts-list',
  templateUrl: './app/components/contacts-list/contacts-list-component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Array<Contact>>;
  account: Account;
  
  constructor (private contactsService: ContactsService, private accountsService: AccountsService, private stateService: StateService, private router: Router) {
    
  }
  
  
  ngOnInit () {
    this.contacts = this.contactsService.getContacts();

    var o:Observable = this.accountsService.getAccounts()

    o.subscribe(
        data => {this.account = data},
        err => console.error(err),
        () => console.log('done')
    );
  }

  gotoContactChat(contactId: string, name: string){
    this.stateService.setName(name)
    this.router.navigate(['/ContactChat', {id: contactId}]);
  }
}
