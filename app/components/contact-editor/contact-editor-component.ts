import {Component, OnInit} from 'angular2/core';
import {CloneService} from '../../common/clone-service';
import {ContactsService} from '../../common/contacts-service';
import {Contact} from '../../models/contact';
import {Router, RouteParams} from 'angular2/router';

@Component({
  selector: 'contact-editor',
  templateUrl: './app/components/contact-editor/contact-editor-component.html'
})
export class ContactEditorComponent implements OnInit {
  //we need to initialize since we can't use the ?. operator with ngModel
  contact: Contact = <Contact>{ address: {}};
  constructor (private router:Router,
               private contactsService: ContactsService,
               private routeParams: RouteParams) {
  }

  ngOnInit () {
    this.contactsService.getContact(this.routeParams.get('id'))
                        .subscribe(contact => this.contact = contact);
  }

  cancel (contact: Contact) {
    this.goToDetails(contact);
  }

  save (contact: Contact) {
    this.contactsService.updateContact(contact)
                        .subscribe(() => this.goToDetails(contact));
  }

  private goToDetails (contact: Contact) {
    this.router.navigate(['/ContactDetail', {id: contact.id}]);
  }

}
