var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("models/items.model", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("services/items.service", ["@angular/core", "@angular/common/http"], function (exports_2, context_2) {
    "use strict";
    var core_1, http_1, ItemsService;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            ItemsService = /** @class */ (function () {
                function ItemsService(http) {
                    this.http = http;
                    this.server_url = "https://zrbania.uwmsois.com";
                }
                ItemsService.prototype.getItems = function () {
                    return this.http.get(this.server_url + '/backend/items/read.php');
                };
                ItemsService.prototype.getItem = function (itemId) {
                    var params = new http_1.HttpParams().set('id', itemId.toString());
                    return this.http.get(this.server_url + '/backend/items/read-detail.php', { params: params });
                };
                ItemsService.prototype.saveItem = function (item) {
                    var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/items/insert.php', item, options);
                };
                ItemsService = __decorate([
                    core_1.Injectable({
                        providedIn: 'root'
                    })
                ], ItemsService);
                return ItemsService;
            }());
            exports_2("ItemsService", ItemsService);
        }
    };
});
