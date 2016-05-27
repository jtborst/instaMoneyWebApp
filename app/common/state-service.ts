import {Injectable} from "angular2/core";

@Injectable()
export class StateService {

    name: string;
    account: string;
    image: string;

    constructor() {
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getAccount() {
        return this.account;
    }

    setAccount(account: string) {
        this.account = account;
    }

    getImage() {
        return this.image;
    }

    setImage(image: string) {
        this.image = image;
    }
}
