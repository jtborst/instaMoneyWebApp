System.register(['angular2/core', 'angular2/router', '../../common/contacts-service'], function(exports_1, context_1) {
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
    var core_1, router_1, contacts_service_1, router_2;
    var ContactDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (contacts_service_1_1) {
                contacts_service_1 = contacts_service_1_1;
            }],
        execute: function() {
            ContactDetailComponent = (function () {
                function ContactDetailComponent(contactsService, routeParams) {
                    this.contactsService = contactsService;
                    this.routeParams = routeParams;
                }
                ContactDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.contactsService.getContact(this.routeParams.get('id'))
                        .subscribe(function (contact) { return _this.contact = contact; });
                };
                ContactDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-detail',
                        templateUrl: './app/components/contact-detail/contact-detail-component.html',
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [contacts_service_1.ContactsService, (typeof (_a = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _a) || Object])
                ], ContactDetailComponent);
                return ContactDetailComponent;
                var _a;
            }());
            exports_1("ContactDetailComponent", ContactDetailComponent);
        }
    }
});
//# sourceMappingURL=contact-detail-component.js.map