var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
System.register("app/main/main.component", ["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var core_1, MainComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            MainComponent = /** @class */ (function () {
                function MainComponent() {
                    this.pageTitle = "Zach Bania's Angular Template";
                    this.pageDescriptions = ["AngularJS is a TypeScript-based open-source web application framework.", "Operating Version: " + document.querySelector('[ng-version]').getAttribute('ng-version')];
                    this.bodyContent = ["AngularJS is capabile of providing a Single Page Application Framework that allows for data binding, testable code metrics, dependency injection, API and HTTP Services, and much more.",
                        "Software Developers can achieve more functionality and effeciency with the AngularJS framework, providing confidence that the code meterics of the web application are reliable."];
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'app-main',
                        templateUrl: './main.component.html',
                        styleUrls: ['./main.component.scss']
                    })
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    };
});
System.register("app/functions/functions.component", ["@angular/core"], function (exports_2, context_2) {
    "use strict";
    var core_2, FunctionsComponent;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            }
        ],
        execute: function () {
            FunctionsComponent = /** @class */ (function () {
                function FunctionsComponent() {
                    this.pageTitle = "Framework Functions";
                    this.tabs = [
                        { tabId: 1, tabTitle: "Tab One", tabDescription: "Tab One Description", tabMeta: "Tab One Meta" },
                        { tabId: 2, tabTitle: "Tab Two", tabDescription: "Tab Two Description", tabMeta: "Tab Two Meta" },
                        { tabId: 3, tabTitle: "Tab Three", tabDescription: "Tab Three Description", tabMeta: "Tab Three Meta" },
                        { tabId: 4, tabTitle: "Tab Four", tabDescription: "Tab Four Description", tabMeta: "Tab Four Meta" },
                    ];
                    this.tasks = [
                        { taskId: 1, taskTitle: 'Project One', taskDescription: 'Upgrade your website', taskStatus: 'complete', taskType: 'development', taskContributors: ['you'] },
                        { taskId: 2, taskTitle: 'Project Two', taskDescription: 'Upgrade your marketing', taskStatus: 'in-progress', taskType: 'marketing', taskContributors: ['you'] },
                        { taskId: 3, taskTitle: 'Project Three', taskDescription: 'Upgrade your business', taskStatus: 'incomplete', taskType: 'global', taskContributors: ['you'] },
                    ];
                }
                FunctionsComponent.prototype.reset = function ($event) {
                    this.taskStatus = '';
                    this.taskType = '';
                };
                FunctionsComponent = __decorate([
                    core_2.Component({
                        selector: 'app-functions',
                        templateUrl: './functions.component.html',
                        styleUrls: ['./functions.component.scss']
                    })
                ], FunctionsComponent);
                return FunctionsComponent;
            }());
            exports_2("FunctionsComponent", FunctionsComponent);
        }
    };
});
System.register("app/models/items.model", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("app/services/items.service", ["@angular/core", "rxjs", "rxjs/operators", "@angular/common/http"], function (exports_4, context_4) {
    "use strict";
    var core_3, rxjs_1, operators_1, http_1, ItemsService;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
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
                    core_3.Injectable({
                        providedIn: 'root'
                    })
                ], ItemsService);
                return ItemsService;
            }());
            exports_4("ItemsService", ItemsService);
        }
    };
});
System.register("app/models/user.model", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("app/services/auth.service", ["@angular/core", "@angular/common/http", "rxjs/operators"], function (exports_6, context_6) {
    "use strict";
    var core_4, http_2, operators_2, AuthService;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (operators_2_1) {
                operators_2 = operators_2_1;
            }
        ],
        execute: function () {
            AuthService = /** @class */ (function () {
                function AuthService(http, router) {
                    this.http = http;
                    this.router = router;
                    this.server_url = "https://zrbania.uwmsois.com";
                    this.getLoggedInName = new core_4.EventEmitter();
                }
                AuthService.prototype.userlogin = function (username, password) {
                    var _this = this;
                    var options = { headers: new http_2.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/admin/auth/login.php', { username: username, password: password })
                        .pipe(operators_2.map(function (Users) {
                        _this.setToken(JSON.stringify(Users[0]));
                        _this.currentUser = Users[0];
                        _this.getLoggedInName.emit(true);
                        return Users;
                    }));
                };
                AuthService.prototype.userRegistration = function (formValues) {
                    var options = { headers: new http_2.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/admin/auth/register.php', formValues, options)
                        .pipe(operators_2.map(function (Users) { return Users; }));
                };
                AuthService.prototype.setToken = function (token) {
                    localStorage.setItem('token', token);
                };
                AuthService.prototype.getToken = function () {
                    return localStorage.getItem('token');
                };
                AuthService.prototype.deleteToken = function () {
                    localStorage.removeItem('token');
                };
                AuthService.prototype.isAuthenticated = function () {
                    var usertoken = this.getToken();
                    if (usertoken != null) {
                        return true;
                    }
                    return false;
                };
                AuthService.prototype.logout = function () {
                    this.deleteToken();
                    window.location.href = window.location.href;
                    this.router.navigate(['main']);
                };
                __decorate([
                    core_4.Output()
                ], AuthService.prototype, "getLoggedInName");
                AuthService = __decorate([
                    core_4.Injectable()
                ], AuthService);
                return AuthService;
            }());
            exports_6("AuthService", AuthService);
        }
    };
});
System.register("app/services/index", ["app/services/items.service", "app/services/auth.service"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_7(exports);
    }
    return {
        setters: [
            function (items_service_1_1) {
                exportStar_1(items_service_1_1);
            },
            function (auth_service_1_1) {
                exportStar_1(auth_service_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("app/models/events.model", [], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("app/models/index", ["app/models/events.model", "app/models/items.model", "app/models/user.model"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    function exportStar_2(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_9(exports);
    }
    return {
        setters: [
            function (events_model_1_1) {
                exportStar_2(events_model_1_1);
            },
            function (items_model_1_1) {
                exportStar_2(items_model_1_1);
            },
            function (user_model_1_1) {
                exportStar_2(user_model_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("app/items/items.component", ["@angular/core"], function (exports_10, context_10) {
    "use strict";
    var core_5, ItemsComponent;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (core_5_1) {
                core_5 = core_5_1;
            }
        ],
        execute: function () {
            ItemsComponent = /** @class */ (function () {
                function ItemsComponent(itemsService, route) {
                    this.itemsService = itemsService;
                    this.route = route;
                }
                ItemsComponent.prototype.reset = function ($event) {
                    this.name = '';
                    this.category = '';
                };
                ItemsComponent.prototype.fetchData = function () {
                    var _this = this;
                    this.itemsService.getItems().subscribe(function (res) {
                        _this.items = res;
                    });
                };
                ItemsComponent.prototype.ngOnInit = function () {
                    this.fetchData();
                };
                ItemsComponent = __decorate([
                    core_5.Component({
                        selector: 'app-items',
                        templateUrl: './items.component.html',
                        styleUrls: ['./items.component.scss']
                    })
                ], ItemsComponent);
                return ItemsComponent;
            }());
            exports_10("ItemsComponent", ItemsComponent);
        }
    };
});
System.register("app/items/item-details/item-details.component", ["@angular/core"], function (exports_11, context_11) {
    "use strict";
    var core_6, ItemDetailsComponent;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [
            function (core_6_1) {
                core_6 = core_6_1;
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
                    core_6.Component({
                        selector: 'app-item-details',
                        templateUrl: './item-details.component.html',
                        styleUrls: ['./item-details.component.scss']
                    })
                ], ItemDetailsComponent);
                return ItemDetailsComponent;
            }());
            exports_11("ItemDetailsComponent", ItemDetailsComponent);
        }
    };
});
System.register("app/items/update-item/update-item.component", ["@angular/core"], function (exports_12, context_12) {
    "use strict";
    var core_7, UpdateItemComponent;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [
            function (core_7_1) {
                core_7 = core_7_1;
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
                    core_7.Component({
                        selector: 'app-update-item',
                        templateUrl: './update-item.component.html',
                        styleUrls: ['./update-item.component.scss']
                    })
                ], UpdateItemComponent);
                return UpdateItemComponent;
            }());
            exports_12("UpdateItemComponent", UpdateItemComponent);
        }
    };
});
System.register("app/items/create-item/create-item.component", ["@angular/core"], function (exports_13, context_13) {
    "use strict";
    var core_8, CreateItemComponent;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (core_8_1) {
                core_8 = core_8_1;
            }
        ],
        execute: function () {
            CreateItemComponent = /** @class */ (function () {
                function CreateItemComponent(itemsService, router) {
                    this.itemsService = itemsService;
                    this.router = router;
                    this.isDirty = true;
                }
                CreateItemComponent.prototype.saveItem = function (formValues) {
                    var _this = this;
                    this.itemsService.saveItem(formValues).subscribe(function () {
                        _this.isDirty = false;
                        _this.router.navigate(['/items']);
                    });
                };
                CreateItemComponent.prototype.cancel = function () {
                    this.router.navigate(['/items']);
                };
                CreateItemComponent.prototype.ngOnInit = function () {
                };
                CreateItemComponent = __decorate([
                    core_8.Component({
                        selector: 'app-create-item',
                        templateUrl: './create-item.component.html',
                        styleUrls: ['./create-item.component.scss']
                    })
                ], CreateItemComponent);
                return CreateItemComponent;
            }());
            exports_13("CreateItemComponent", CreateItemComponent);
        }
    };
});
System.register("app/common/errors/not-found.component", ["@angular/core"], function (exports_14, context_14) {
    "use strict";
    var core_9, NotFoundComponent;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [
            function (core_9_1) {
                core_9 = core_9_1;
            }
        ],
        execute: function () {
            NotFoundComponent = /** @class */ (function () {
                function NotFoundComponent() {
                }
                NotFoundComponent.prototype.ngOnInit = function () {
                };
                NotFoundComponent = __decorate([
                    core_9.Component({
                        selector: 'app-not-found',
                        templateUrl: './not-found.component.html',
                        styleUrls: ['./not-found.component.scss']
                    })
                ], NotFoundComponent);
                return NotFoundComponent;
            }());
            exports_14("NotFoundComponent", NotFoundComponent);
        }
    };
});
System.register("app/app-routing.module", ["app/main/main.component", "app/functions/functions.component", "app/items/items.component", "app/items/item-details/item-details.component", "app/items/update-item/update-item.component", "app/items/create-item/create-item.component", "app/common/errors/not-found.component"], function (exports_15, context_15) {
    "use strict";
    var main_component_1, functions_component_1, items_component_1, item_details_component_1, update_item_component_1, create_item_component_1, not_found_component_1, routes;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (functions_component_1_1) {
                functions_component_1 = functions_component_1_1;
            },
            function (items_component_1_1) {
                items_component_1 = items_component_1_1;
            },
            function (item_details_component_1_1) {
                item_details_component_1 = item_details_component_1_1;
            },
            function (update_item_component_1_1) {
                update_item_component_1 = update_item_component_1_1;
            },
            function (create_item_component_1_1) {
                create_item_component_1 = create_item_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            }
        ],
        execute: function () {
            exports_15("routes", routes = [
                { path: 'main', component: main_component_1.MainComponent },
                { path: 'functions', component: functions_component_1.FunctionsComponent },
                { path: 'items', component: items_component_1.ItemsComponent },
                { path: 'items/create-item', component: create_item_component_1.CreateItemComponent },
                { path: 'items/update-item/:id', component: update_item_component_1.UpdateItemComponent },
                { path: 'items/:id', component: item_details_component_1.ItemDetailsComponent },
                { path: 'user', loadChildren: function () { return context_15["import"]('src/app/user/user.module').then(function (m) { return m.UserModule; }); } },
                // Error routes
                { path: '404', component: not_found_component_1.NotFoundComponent },
                // Default routes
                // { path: '', redirectTo: '/main', pathMatch: 'full' }, 
                { path: '**', redirectTo: '/main', pathMatch: 'full' },
            ]);
        }
    };
});
System.register("app/app.component", ["@angular/core"], function (exports_16, context_16) {
    "use strict";
    var core_10, AppComponent;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [
            function (core_10_1) {
                core_10 = core_10_1;
            }
        ],
        execute: function () {
            AppComponent = /** @class */ (function () {
                function AppComponent(authService) {
                    var _this = this;
                    this.authService = authService;
                    this.brandTitle = "Angular Template";
                    authService.getLoggedInName.subscribe(function (name) { return _this.changeName(name); });
                    if (this.authService.isAuthenticated() == true) {
                        this.currentUser = JSON.parse(this.authService.getToken());
                        console.log("currentUser: ", this.currentUser);
                    }
                    if (this.authService.isAuthenticated()) {
                        this.loginbtn = false;
                        this.logoutbtn = true;
                    }
                    else {
                        this.loginbtn = true;
                        this.logoutbtn = false;
                    }
                }
                AppComponent.prototype.changeName = function (name) {
                    this.logoutbtn = name;
                    this.loginbtn = !name;
                };
                AppComponent.prototype.logout = function () {
                    this.authService.deleteToken();
                    window.location.href = window.location.href;
                };
                AppComponent = __decorate([
                    core_10.Component({
                        selector: 'app-root',
                        templateUrl: './app.component.html',
                        styleUrls: ['./app.component.scss']
                    })
                ], AppComponent);
                return AppComponent;
            }());
            exports_16("AppComponent", AppComponent);
        }
    };
});
System.register("app/main-nav/main-nav.component", ["@angular/core"], function (exports_17, context_17) {
    "use strict";
    var core_11, MainNavComponent;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [
            function (core_11_1) {
                core_11 = core_11_1;
            }
        ],
        execute: function () {
            MainNavComponent = /** @class */ (function () {
                function MainNavComponent(auth) {
                    this.auth = auth;
                }
                MainNavComponent.prototype.ngOnInit = function () {
                    this.auth.isAuthenticated();
                };
                MainNavComponent = __decorate([
                    core_11.Component({
                        selector: 'app-main-nav',
                        templateUrl: './main-nav.component.html',
                        styleUrls: ['./main-nav.component.scss']
                    })
                ], MainNavComponent);
                return MainNavComponent;
            }());
            exports_17("MainNavComponent", MainNavComponent);
        }
    };
});
System.register("app/main-sidebar/main-sidebar.component", ["@angular/core"], function (exports_18, context_18) {
    "use strict";
    var core_12, MainSidebarComponent;
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [
            function (core_12_1) {
                core_12 = core_12_1;
            }
        ],
        execute: function () {
            MainSidebarComponent = /** @class */ (function () {
                function MainSidebarComponent(authService, itemsService, route) {
                    this.authService = authService;
                    this.itemsService = itemsService;
                    this.route = route;
                    this.searchTerm = "";
                    if (this.authService.isAuthenticated() == true) {
                        this.currentUser = JSON.parse(this.authService.getToken());
                    }
                }
                MainSidebarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.data.forEach(function (data) {
                        _this.item = data['item'];
                    });
                    console.log("mainsidebar currentUser", this.currentUser);
                };
                MainSidebarComponent.prototype.searchItems = function (searchTerm) {
                    var _this = this;
                    this.itemsService.searchItems(searchTerm).subscribe(function (items) {
                        _this.matchingItems = items;
                    });
                };
                __decorate([
                    core_12.Output()
                ], MainSidebarComponent.prototype, "currentUser");
                MainSidebarComponent = __decorate([
                    core_12.Component({
                        selector: 'app-main-sidebar',
                        templateUrl: './main-sidebar.component.html',
                        styleUrls: ['./main-sidebar.component.scss']
                    })
                ], MainSidebarComponent);
                return MainSidebarComponent;
            }());
            exports_18("MainSidebarComponent", MainSidebarComponent);
        }
    };
});
System.register("app/items/item.component", ["@angular/core"], function (exports_19, context_19) {
    "use strict";
    var core_13, ItemComponent;
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [
            function (core_13_1) {
                core_13 = core_13_1;
            }
        ],
        execute: function () {
            ItemComponent = /** @class */ (function () {
                function ItemComponent(itemsService, router) {
                    this.itemsService = itemsService;
                    this.router = router;
                    this.itemDetailClick = new core_13.EventEmitter();
                }
                ItemComponent.prototype.detailClick = function () {
                    this.itemDetailClick.emit(this.item.name);
                };
                ItemComponent.prototype.serviceDeleteItem = function (item) {
                    this.itemsService.deleteItem(item).subscribe(function () {
                    });
                    this.router.navigate(['/items']);
                };
                ItemComponent.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_13.Input()
                ], ItemComponent.prototype, "item");
                __decorate([
                    core_13.Output()
                ], ItemComponent.prototype, "itemDetailClick");
                ItemComponent = __decorate([
                    core_13.Component({
                        selector: 'app-item',
                        templateUrl: './item.component.html',
                        styleUrls: ['./item.component.scss']
                    })
                ], ItemComponent);
                return ItemComponent;
            }());
            exports_19("ItemComponent", ItemComponent);
        }
    };
});
System.register("app/common/jQuery.service", ["@angular/core"], function (exports_20, context_20) {
    "use strict";
    var core_14, JQ_TOKEN;
    var __moduleName = context_20 && context_20.id;
    return {
        setters: [
            function (core_14_1) {
                core_14 = core_14_1;
            }
        ],
        execute: function () {
            exports_20("JQ_TOKEN", JQ_TOKEN = new core_14.InjectionToken('jQuery'));
        }
    };
});
System.register("app/common/simple-modal.component", ["@angular/core", "app/common/jQuery.service"], function (exports_21, context_21) {
    "use strict";
    var core_15, jQuery_service_1, SimpleModalComponent;
    var __moduleName = context_21 && context_21.id;
    return {
        setters: [
            function (core_15_1) {
                core_15 = core_15_1;
            },
            function (jQuery_service_1_1) {
                jQuery_service_1 = jQuery_service_1_1;
            }
        ],
        execute: function () {
            SimpleModalComponent = /** @class */ (function () {
                function SimpleModalComponent($) {
                    this.$ = $;
                }
                SimpleModalComponent.prototype.closeModal = function () {
                    if (this.closeOnBodyClick.toLocaleLowerCase() === "true") {
                        this.$(this.containerEl.nativeElement).modal('hide');
                    }
                };
                __decorate([
                    core_15.Input()
                ], SimpleModalComponent.prototype, "title");
                __decorate([
                    core_15.Input()
                ], SimpleModalComponent.prototype, "elementId");
                __decorate([
                    core_15.Input()
                ], SimpleModalComponent.prototype, "closeOnBodyClick");
                __decorate([
                    core_15.ViewChild('modalcontainer')
                ], SimpleModalComponent.prototype, "containerEl");
                SimpleModalComponent = __decorate([
                    core_15.Component({
                        selector: 'app-simple-modal',
                        templateUrl: './simple-modal.component.html',
                        styleUrls: ['./simple-modal.component.scss']
                    }),
                    __param(0, core_15.Inject(jQuery_service_1.JQ_TOKEN))
                ], SimpleModalComponent);
                return SimpleModalComponent;
            }());
            exports_21("SimpleModalComponent", SimpleModalComponent);
        }
    };
});
System.register("app/common/dropdown-filter.pipe", ["@angular/core"], function (exports_22, context_22) {
    "use strict";
    var core_16, DropdownFilterPipe;
    var __moduleName = context_22 && context_22.id;
    return {
        setters: [
            function (core_16_1) {
                core_16 = core_16_1;
            }
        ],
        execute: function () {
            DropdownFilterPipe = /** @class */ (function () {
                function DropdownFilterPipe() {
                }
                DropdownFilterPipe.prototype.transform = function (list, filters) {
                    var keys = Object.keys(filters).filter(function (key) { return filters[key]; });
                    var filterObject = function (object) { return keys.every(function (key) { return object[key] === filters[key]; }); };
                    console.log(filterObject);
                    return keys.length ? list.filter(filterObject) : list;
                };
                DropdownFilterPipe = __decorate([
                    core_16.Pipe({
                        name: 'filter'
                    })
                ], DropdownFilterPipe);
                return DropdownFilterPipe;
            }());
            exports_22("DropdownFilterPipe", DropdownFilterPipe);
        }
    };
});
System.register("app/common/modal-trigger.directive", ["@angular/core", "app/common/jQuery.service"], function (exports_23, context_23) {
    "use strict";
    var core_17, jQuery_service_2, ModalTriggerDirective;
    var __moduleName = context_23 && context_23.id;
    return {
        setters: [
            function (core_17_1) {
                core_17 = core_17_1;
            },
            function (jQuery_service_2_1) {
                jQuery_service_2 = jQuery_service_2_1;
            }
        ],
        execute: function () {
            ModalTriggerDirective = /** @class */ (function () {
                function ModalTriggerDirective(ref, $) {
                    this.$ = $;
                    this.el = ref.nativeElement;
                }
                ModalTriggerDirective.prototype.ngOnInit = function () {
                    var _this = this;
                    this.el.addEventListener('click', function (e) {
                        _this.$("#" + _this.modalId).modal({});
                    });
                };
                __decorate([
                    core_17.Input('modal-trigger')
                ], ModalTriggerDirective.prototype, "modalId");
                ModalTriggerDirective = __decorate([
                    core_17.Directive({
                        selector: '[appModalTrigger]'
                    }),
                    __param(1, core_17.Inject(jQuery_service_2.JQ_TOKEN))
                ], ModalTriggerDirective);
                return ModalTriggerDirective;
            }());
            exports_23("ModalTriggerDirective", ModalTriggerDirective);
        }
    };
});
System.register("app/common/keyword-filter.pipe", ["@angular/core"], function (exports_24, context_24) {
    "use strict";
    var core_18, KeywordFilterPipe;
    var __moduleName = context_24 && context_24.id;
    return {
        setters: [
            function (core_18_1) {
                core_18 = core_18_1;
            }
        ],
        execute: function () {
            KeywordFilterPipe = /** @class */ (function () {
                function KeywordFilterPipe() {
                }
                KeywordFilterPipe.prototype.transform = function (value, args) {
                    if (!value)
                        return null;
                    if (!args)
                        return value;
                    args = args.toLowerCase();
                    return value.filter(function (item) {
                        return JSON.stringify(item).toLowerCase().includes(args);
                    });
                };
                KeywordFilterPipe = __decorate([
                    core_18.Pipe({
                        name: 'keyword-filter'
                    })
                ], KeywordFilterPipe);
                return KeywordFilterPipe;
            }());
            exports_24("KeywordFilterPipe", KeywordFilterPipe);
        }
    };
});
System.register("app/app.module", ["@angular/platform-browser", "@angular/core", "@angular/forms", "@angular/common/http", "app/app-routing.module", "@angular/router", "app/app.component", "app/main/main.component", "app/main-nav/main-nav.component", "app/main-sidebar/main-sidebar.component", "app/functions/functions.component", "app/items/items.component", "app/items/item.component", "app/items/item-details/item-details.component", "app/items/create-item/create-item.component", "app/common/simple-modal.component", "app/services/auth.service", "app/common/jQuery.service", "app/common/dropdown-filter.pipe", "app/common/modal-trigger.directive", "app/common/keyword-filter.pipe", "app/common/errors/not-found.component", "app/items/update-item/update-item.component"], function (exports_25, context_25) {
    "use strict";
    var platform_browser_1, core_19, forms_1, http_3, app_routing_module_1, router_1, app_component_1, main_component_2, main_nav_component_1, main_sidebar_component_1, functions_component_2, items_component_2, item_component_1, item_details_component_2, create_item_component_2, simple_modal_component_1, auth_service_2, jQuery_service_3, jQuery, dropdown_filter_pipe_1, modal_trigger_directive_1, keyword_filter_pipe_1, not_found_component_2, update_item_component_2, AppModule;
    var __moduleName = context_25 && context_25.id;
    return {
        setters: [
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_19_1) {
                core_19 = core_19_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_3_1) {
                http_3 = http_3_1;
            },
            function (app_routing_module_1_1) {
                app_routing_module_1 = app_routing_module_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (main_component_2_1) {
                main_component_2 = main_component_2_1;
            },
            function (main_nav_component_1_1) {
                main_nav_component_1 = main_nav_component_1_1;
            },
            function (main_sidebar_component_1_1) {
                main_sidebar_component_1 = main_sidebar_component_1_1;
            },
            function (functions_component_2_1) {
                functions_component_2 = functions_component_2_1;
            },
            function (items_component_2_1) {
                items_component_2 = items_component_2_1;
            },
            function (item_component_1_1) {
                item_component_1 = item_component_1_1;
            },
            function (item_details_component_2_1) {
                item_details_component_2 = item_details_component_2_1;
            },
            function (create_item_component_2_1) {
                create_item_component_2 = create_item_component_2_1;
            },
            function (simple_modal_component_1_1) {
                simple_modal_component_1 = simple_modal_component_1_1;
            },
            function (auth_service_2_1) {
                auth_service_2 = auth_service_2_1;
            },
            function (jQuery_service_3_1) {
                jQuery_service_3 = jQuery_service_3_1;
            },
            function (dropdown_filter_pipe_1_1) {
                dropdown_filter_pipe_1 = dropdown_filter_pipe_1_1;
            },
            function (modal_trigger_directive_1_1) {
                modal_trigger_directive_1 = modal_trigger_directive_1_1;
            },
            function (keyword_filter_pipe_1_1) {
                keyword_filter_pipe_1 = keyword_filter_pipe_1_1;
            },
            function (not_found_component_2_1) {
                not_found_component_2 = not_found_component_2_1;
            },
            function (update_item_component_2_1) {
                update_item_component_2 = update_item_component_2_1;
            }
        ],
        execute: function () {
            jQuery = window['$'];
            AppModule = /** @class */ (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_19.NgModule({
                        declarations: [
                            app_component_1.AppComponent,
                            main_component_2.MainComponent,
                            main_nav_component_1.MainNavComponent,
                            main_sidebar_component_1.MainSidebarComponent,
                            //Function Components
                            functions_component_2.FunctionsComponent,
                            // Other Components
                            simple_modal_component_1.SimpleModalComponent,
                            // Pipes
                            dropdown_filter_pipe_1.DropdownFilterPipe,
                            keyword_filter_pipe_1.KeywordFilterPipe,
                            // Directives
                            modal_trigger_directive_1.ModalTriggerDirective,
                            // Items
                            items_component_2.ItemsComponent,
                            item_component_1.ItemComponent,
                            item_details_component_2.ItemDetailsComponent,
                            create_item_component_2.CreateItemComponent,
                            // Other
                            not_found_component_2.NotFoundComponent,
                            update_item_component_2.UpdateItemComponent,
                        ],
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            forms_1.ReactiveFormsModule,
                            router_1.RouterModule.forRoot(app_routing_module_1.routes),
                            http_3.HttpClientModule
                        ],
                        providers: [
                            auth_service_2.AuthService,
                            { provide: jQuery_service_3.JQ_TOKEN, useValue: jQuery },
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_25("AppModule", AppModule);
        }
    };
});
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
System.register("environments/environment", [], function (exports_26, context_26) {
    "use strict";
    var environment;
    var __moduleName = context_26 && context_26.id;
    return {
        setters: [],
        execute: function () {// This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            exports_26("environment", environment = {
                production: false
            });
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
        }
    };
});
System.register("main", ["@angular/core", "@angular/platform-browser-dynamic", "app/app.module", "environments/environment"], function (exports_27, context_27) {
    "use strict";
    var core_20, platform_browser_dynamic_1, app_module_1, environment_1;
    var __moduleName = context_27 && context_27.id;
    return {
        setters: [
            function (core_20_1) {
                core_20 = core_20_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            }
        ],
        execute: function () {
            if (environment_1.environment.production) {
                core_20.enableProdMode();
            }
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)["catch"](function (err) { return console.error(err); });
        }
    };
});
