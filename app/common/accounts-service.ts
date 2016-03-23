import {Http} from 'angular2/http';
import {Injectable} from "angular2/core";
import 'rxjs/add/operator/map';

@Injectable()
export class AccountsService {

    constructor(private http: Http) {
    }

    public getAccounts() {
        return this.http.get('https://instamoney.firebaseio.com/accounts/NL50INGB0001234567.json')
            .map(res => res.json())
    }

}
