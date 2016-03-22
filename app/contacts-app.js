System.register(['angular2/core', './components/contact-header/contact-header-component', './common/contacts-service', './common/clone-service', './components/contacts-list/contacts-list-component', './components/contact-detail/contact-detail-component', './components/contact-editor/contact-editor-component', 'angular2/router', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, contact_header_component_1, contacts_service_1, clone_service_1, contacts_list_component_1, contact_detail_component_1, contact_editor_component_1, router_1, http_1;
    var ContactsApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_header_component_1_1) {
                contact_header_component_1 = contact_header_component_1_1;
            },
            function (contacts_service_1_1) {
                contacts_service_1 = contacts_service_1_1;
            },
            function (clone_service_1_1) {
                clone_service_1 = clone_service_1_1;
            },
            function (contacts_list_component_1_1) {
                contacts_list_component_1 = contacts_list_component_1_1;
            },
            function (contact_detail_component_1_1) {
                contact_detail_component_1 = contact_detail_component_1_1;
            },
            function (contact_editor_component_1_1) {
                contact_editor_component_1 = contact_editor_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ContactsApp = (function () {
                function ContactsApp() {
                }
                ContactsApp = __decorate([
                    core_1.Component({
                        selector: 'contacts-app',
                        template: "\n    <contact-header></contact-header>\n    <router-outlet></router-outlet>\n    ",
                        directives: [contact_header_component_1.ContactHeaderComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [contacts_service_1.ContactsService, router_1.ROUTER_PROVIDERS, clone_service_1.CloneService, http_1.HTTP_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: contacts_list_component_1.ContactsListComponent, name: 'ContactsList' },
                        { path: '/contact/:id', component: contact_detail_component_1.ContactDetailComponent, name: 'ContactDetail' },
                        { path: '/contact/:id/edit', component: contact_editor_component_1.ContactEditorComponent, name: 'ContactEditor' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ContactsApp);
                return ContactsApp;
            }());
            exports_1("ContactsApp", ContactsApp);
        }
    }
});
//# sourceMappingURL=contacts-app.js.map