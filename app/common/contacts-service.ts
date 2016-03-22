import {Contact} from '../models/contact';
import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class ContactsService {
  private API_ENDPOINT = 'http://localhost:4000';

  constructor (private http: Http) {
  }

  getContacts () {
    return this.http.get(`${this.API_ENDPOINT}/contacts`)
                    .map(res => res.json())
                    .map(data => data.items);

  }

  getContact (id: any) {
    return this.http.get(`${this.API_ENDPOINT}/contacts/${id}`)
                    .map(res => res.json().item);
  }

  updateContact (contact: Contact) {
    let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
    return this.http.put(`${this.API_ENDPOINT}/contacts/${contact.id}`, JSON.stringify(contact), { headers });
  }
}
