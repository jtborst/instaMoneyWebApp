import {Http} from 'angular2/http';
import {Injectable} from "angular2/core";
import 'rxjs/add/operator/map';
import {Transaction} from "../components/models/transaction";

@Injectable()
export class AccountsService {

    constructor(private http: Http) {
    }

    getAccounts() {
        return this.http.get('https://instamoney.firebaseio.com/accounts/NL50INGB0001234567.json')
            .map(res => res.json())
    }

    newTransaction(transaction: Transaction) {
        this.http.post('https://instamoney.firebaseio.com/work_queue');

        let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
        return this.http.post('https://instamoney.firebaseio.com/work_queue.json', JSON.stringify(transaction), { headers });
    }

}
