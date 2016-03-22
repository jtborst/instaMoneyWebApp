System.register(['angular2/core', '../../common/contacts-service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contacts_service_1, router_1;
    var ContactsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contacts_service_1_1) {
                contacts_service_1 = contacts_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ContactsListComponent = (function () {
                function ContactsListComponent(contactsService) {
                    this.contactsService = contactsService;
                }
                ContactsListComponent.prototype.ngOnInit = function () {
                    this.contacts = this.contactsService.getContacts();
                };
                ContactsListComponent = __decorate([
                    core_1.Component({
                        selector: 'contacts-list',
                        templateUrl: './app/components/contacts-list/contacts-list-component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [contacts_service_1.ContactsService])
                ], ContactsListComponent);
                return ContactsListComponent;
            }());
            exports_1("ContactsListComponent", ContactsListComponent);
        }
    }
});
//# sourceMappingURL=contacts-list-component.js.map