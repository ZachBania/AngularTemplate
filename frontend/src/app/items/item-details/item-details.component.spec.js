var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("models/events.model", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("models/items.model", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("models/index", ["models/events.model", "models/items.model"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_3(exports);
    }
    return {
        setters: [
            function (events_model_1_1) {
                exportStar_1(events_model_1_1);
            },
            function (items_model_1_1) {
                exportStar_1(items_model_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("services/items.service", ["@angular/core", "rxjs", "rxjs/operators", "@angular/common/http"], function (exports_4, context_4) {
    "use strict";
    var core_1, rxjs_1, operators_1, http_1, ItemsService;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            },
            function (operators_1_1) {
                operators_1 = operators_1_1;
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
                    return this.http.get(this.server_url + '/backend/items/read.php')
                        .pipe(operators_1.catchError(this.handleError('getItems')));
                };
                ItemsService.prototype.getItem = function (itemId) {
                    var params = new http_1.HttpParams().set('id', itemId.toString());
                    return this.http.get(this.server_url + '/backend/items/read-detail.php', { params: params })
                        .pipe(operators_1.catchError(this.handleError('getItem')));
                };
                ItemsService.prototype.saveItem = function (item) {
                    var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/items/insert.php', item, options);
                };
                ItemsService.prototype.searchItems = function (searchTerm) {
                    this.http.post(this.server_url + '/main/search?search=' + searchTerm, "");
                    return this.http.get(this.server_url + '/backend/items/read.php/search?search=' + searchTerm)
                        .pipe(operators_1.catchError(this.handleError('searchItems')));
                };
                ItemsService.prototype.handleError = function (operation, result) {
                    if (operation === void 0) { operation = 'operation'; }
                    return function (error) {
                        console.error(error);
                        return rxjs_1.of(result);
                    };
                };
                ItemsService = __decorate([
                    core_1.Injectable({
                        providedIn: 'root'
                    })
                ], ItemsService);
                return ItemsService;
            }());
            exports_4("ItemsService", ItemsService);
        }
    };
});
System.register("services/index", ["services/items.service"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    function exportStar_2(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_5(exports);
    }
    return {
        setters: [
            function (items_service_1_1) {
                exportStar_2(items_service_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("items/item-details/item-details.component", ["@angular/core"], function (exports_6, context_6) {
    "use strict";
    var core_2, ItemDetailsComponent;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            }
        ],
        execute: function () {
            ItemDetailsComponent = /** @class */ (function () {
                function ItemDetailsComponent(itemsService, route) {
                    this.itemsService = itemsService;
                    this.route = route;
                    this.arr = [];
                }
                ItemDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        _this.itemsService.getItem(+params['id']).subscribe(function (res) {
                            _this.object = res;
                        });
                    });
                };
                ItemDetailsComponent = __decorate([
                    core_2.Component({
                        selector: 'app-item-details',
                        templateUrl: './item-details.component.html',
                        styleUrls: ['./item-details.component.scss']
                    })
                ], ItemDetailsComponent);
                return ItemDetailsComponent;
            }());
            exports_6("ItemDetailsComponent", ItemDetailsComponent);
        }
    };
});
System.register("items/item-details/item-details.component.spec", ["@angular/core/testing", "items/item-details/item-details.component"], function (exports_7, context_7) {
    "use strict";
    var testing_1, item_details_component_1;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (item_details_component_1_1) {
                item_details_component_1 = item_details_component_1_1;
            }
        ],
        execute: function () {
            describe('ItemDetailsComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [item_details_component_1.ItemDetailsComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(item_details_component_1.ItemDetailsComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                });
                it('should create', function () {
                    expect(component).toBeTruthy();
                });
            });
        }
    };
});
