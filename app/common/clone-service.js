System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CloneService;
    return {
        setters:[],
        execute: function() {
            CloneService = (function () {
                function CloneService() {
                }
                CloneService.prototype.createClone = function (item) {
                    this.originalItem = item;
                    this.currentItem = this.clone(item);
                    return this.currentItem;
                };
                CloneService.prototype.getItem = function () {
                    return this.currentItem;
                };
                CloneService.prototype.abortChanges = function () {
                    Object.assign(this.currentItem, this.originalItem);
                    return this.originalItem;
                };
                CloneService.prototype.commitChanges = function () {
                    Object.assign(this.originalItem, this.currentItem);
                };
                CloneService.prototype.clone = function (item) {
                    // super poor clone implementation
                    return JSON.parse(JSON.stringify(item));
                };
                return CloneService;
            }());
            exports_1("CloneService", CloneService);
        }
    }
});
//# sourceMappingURL=clone-service.js.map