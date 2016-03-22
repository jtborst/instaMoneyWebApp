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
    var ContactEditorComponent;
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
            ContactEditorComponent = (function () {
                function ContactEditorComponent(router, contactsService, routeParams) {
                    this.router = router;
                    this.contactsService = contactsService;
                    this.routeParams = routeParams;
                    //we need to initialize since we can't use the ?. operator with ngModel
                    this.contact = { address: {} };
                }
                ContactEditorComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.contactsService.getContact(this.routeParams.get('id'))
                        .subscribe(function (contact) { return _this.contact = contact; });
                };
                ContactEditorComponent.prototype.cancel = function (contact) {
                    this.goToDetails(contact);
                };
                ContactEditorComponent.prototype.save = function (contact) {
                    var _this = this;
                    this.contactsService.updateContact(contact)
                        .subscribe(function () { return _this.goToDetails(contact); });
                };
                ContactEditorComponent.prototype.goToDetails = function (contact) {
                    this.router.navigate(['/ContactDetail', { id: contact.id }]);
                };
                ContactEditorComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-editor',
                        templateUrl: './app/components/contact-editor/contact-editor-component.html'
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, contacts_service_1.ContactsService, (typeof (_b = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _b) || Object])
                ], ContactEditorComponent);
                return ContactEditorComponent;
                var _a, _b;
            }());
            exports_1("ContactEditorComponent", ContactEditorComponent);
        }
    }
});
//# sourceMappingURL=contact-editor-component.js.map