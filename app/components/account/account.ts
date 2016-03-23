import {Component} from 'angular2/core';

import {AccountsService} from '../../common/accounts-service';
// import {User} from '../../models/user';
import {Account} from '../../models/account';
import {Observable} from "rxjs/Observable";
// import {EMPTY_USER} from "../../common/user-data";

@Component({
    selector: 'balance',
    template: `
        <div>&euro; {{account.balance}}</div>   
    `
})
export class Accounts {

    // user: User = EMPTY_USER
    account: Account
    
    constructor(service: AccountsService) {

        var o:Observable = service.getAccounts()

        o.subscribe(
            data => {this.account.balance = data.account.balance},
            err => console.error(err),
            () => console.log('done')
        );
    }

}
