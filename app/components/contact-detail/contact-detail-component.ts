import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'contact-detail',
  templateUrl: './app/components/contact-detail/contact-detail-component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  constructor (private contactsService: ContactsService, private routeParams: RouteParams) {}

  ngOnInit () {
    this.contactsService.getContact(this.routeParams.get('id'))
                        .subscribe(contact => this.contact = contact);
  }
}
