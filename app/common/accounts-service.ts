import {Http} from 'angular2/http';
import {Headers} from 'angular2/http';
import {Injectable} from "angular2/core";
import 'rxjs/add/operator/map';
import {Transaction} from "../components/models/transaction";

@Injectable()
export class AccountsService {

    constructor(private http: Http) {
    }

    getAccounts() {
        return this.http.get('/accounts/NL93INGB0978425803').map(res => res.json())
    }

    getTransactions() {
        //return this.http.get('https://instamoney.firebaseio.com/accounts/NL50INGB0001234567/transactions.json').map(res => res.json())
        return this.http.get('/accounts/NL93INGB0978425803/transactions').map(res => res.json())
    }

    newTransaction(transaction: Transaction) {
        //this.http.post('https://instamoney.firebaseio.com/work_queue');
        //this.http.post('/pay/very_secret_token');

        let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
        //return this.http.post('https://instamoney.firebaseio.com/work_queue.json', JSON.stringify(transaction), { headers });
        return this.http.post('/pay/very_secret_token', JSON.stringify(transaction), { headers });
    }

}
