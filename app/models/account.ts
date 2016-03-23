import {Transaction} from "../components/transaction/transaction";
export class Account {

    IBAN:number;
    transactions: Transaction[];
    balance:number;
}