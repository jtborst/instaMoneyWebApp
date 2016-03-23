import {Transaction} from "../components/models/transaction";
export class Account {

    IBAN:number;
    transactions: Transaction[];
    balance:number;
}