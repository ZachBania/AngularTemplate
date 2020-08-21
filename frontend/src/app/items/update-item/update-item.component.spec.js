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
                ItemsService.prototype.updateItem = function (item) {
                    var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/items/update.php', item, options);
                };
                ItemsService.prototype.deleteItem = function (item) {
                    var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/items/delete.php', item, options);
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
System.register("items/update-item/update-item.component", ["@angular/core"], function (exports_6, context_6) {
    "use strict";
    var core_2, UpdateItemComponent;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            }
        ],
        execute: function () {
            UpdateItemComponent = /** @class */ (function () {
                function UpdateItemComponent(itemsService, route, router, formBuilder) {
                    this.itemsService = itemsService;
                    this.route = route;
                    this.router = router;
                    this.formBuilder = formBuilder;
                    // Form Controls
                    this.updateForm = this.formBuilder.group({
                        id: [''],
                        name: [''],
                        description: [''],
                        price: [''],
                        inventory: [''],
                        category: [''],
                        image_url: ['']
                    });
                }
                UpdateItemComponent.prototype.updateItem = function (formValues) {
                    var _this = this;
                    this.itemsService.updateItem(formValues).subscribe(function () {
                        _this.router.navigate(['/items']);
                    });
                };
                UpdateItemComponent.prototype.cancel = function () {
                    this.router.navigate(['/items']);
                };
                UpdateItemComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        _this.itemsService.getItem(+params['id']).subscribe(function (res) {
                            _this.exObject = res;
                            _this.updateForm.setValue({
                                id: _this.exObject.id,
                                name: _this.exObject.name,
                                description: _this.exObject.description,
                                price: _this.exObject.price,
                                inventory: _this.exObject.inventory,
                                category: _this.exObject.category,
                                image_url: _this.exObject.image_url
                            });
                        });
                    });
                };
                UpdateItemComponent = __decorate([
                    core_2.Component({
                        selector: 'app-update-item',
                        templateUrl: './update-item.component.html',
                        styleUrls: ['./update-item.component.scss']
                    })
                ], UpdateItemComponent);
                return UpdateItemComponent;
            }());
            exports_6("UpdateItemComponent", UpdateItemComponent);
        }
    };
});
System.register("items/update-item/update-item.component.spec", ["@angular/core/testing", "items/update-item/update-item.component"], function (exports_7, context_7) {
    "use strict";
    var testing_1, update_item_component_1;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (update_item_component_1_1) {
                update_item_component_1 = update_item_component_1_1;
            }
        ],
        execute: function () {
            describe('UpdateItemComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [update_item_component_1.UpdateItemComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(update_item_component_1.UpdateItemComponent);
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
