System.register(['angular2/http', 'angular2/core'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var ContactsService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactsService = (function () {
                function ContactsService(http) {
                    this.http = http;
                    this.API_ENDPOINT = 'http://localhost:4000';
                }
                ContactsService.prototype.getContacts = function () {
                    return this.http.get(this.API_ENDPOINT + "/contacts")
                        .map(function (res) { return res.json(); })
                        .map(function (data) { return data.items; });
                };
                ContactsService.prototype.getContact = function (id) {
                    return this.http.get(this.API_ENDPOINT + "/contacts/" + id)
                        .map(function (res) { return res.json().item; });
                };
                ContactsService.prototype.updateContact = function (contact) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
                    return this.http.put(this.API_ENDPOINT + "/contacts/" + contact.id, JSON.stringify(contact), { headers: headers });
                };
                ContactsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], ContactsService);
                return ContactsService;
                var _a;
            }());
            exports_1("ContactsService", ContactsService);
        }
    }
});
//# sourceMappingURL=contacts-service.js.map