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
System.register("services/items.service", ["@angular/core", "rxjs", "rxjs/operators", "@angular/common/http"], function (exports_2, context_2) {
    "use strict";
    var core_1, rxjs_1, operators_1, http_1, ItemsService;
    var __moduleName = context_2 && context_2.id;
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
            exports_2("ItemsService", ItemsService);
        }
    };
});
System.register("models/user.model", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("services/auth.service", ["@angular/core", "@angular/common/http", "rxjs/operators"], function (exports_4, context_4) {
    "use strict";
    var core_2, http_2, operators_2, AuthService;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
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
                    this.baseUrl = "http://localhost/angular_admin/php";
                    this.getLoggedInName = new core_2.EventEmitter();
                }
                AuthService.prototype.userlogin = function (username, password) {
                    var _this = this;
                    var options = { headers: new http_2.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/admin/auth/login.php', { username: username, password: password })
                        .pipe(operators_2.tap(function (data) { _this.currentUser = data['user']; }))
                        .pipe(operators_2.map(function (Users) { _this.setToken(Users[0]); _this.getLoggedInName.emit(true); return Users; }));
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
                    core_2.Output()
                ], AuthService.prototype, "getLoggedInName");
                AuthService = __decorate([
                    core_2.Injectable()
                ], AuthService);
                return AuthService;
            }());
            exports_4("AuthService", AuthService);
        }
    };
});
System.register("services/index", ["services/items.service", "services/auth.service"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_5(exports);
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
System.register("user/auth.guard", ["@angular/core"], function (exports_6, context_6) {
    "use strict";
    var core_3, AuthGuard;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
            }
        ],
        execute: function () {
            AuthGuard = /** @class */ (function () {
                function AuthGuard(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (route, state) {
                    var routeurl = state.url;
                    return this.isLogin(routeurl);
                };
                AuthGuard.prototype.isLogin = function (routeurl) {
                    if (this.authService.isAuthenticated()) {
                        return true;
                    }
                    this.authService.redirectUrl = routeurl;
                    this.router.navigate(['/login'], { queryParams: { returnUrl: routeurl } });
                };
                AuthGuard = __decorate([
                    core_3.Injectable({
                        providedIn: 'root'
                    })
                ], AuthGuard);
                return AuthGuard;
            }());
            exports_6("AuthGuard", AuthGuard);
        }
    };
});
System.register("user/auth.guard.spec", ["@angular/core/testing", "user/auth.guard"], function (exports_7, context_7) {
    "use strict";
    var testing_1, auth_guard_1;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (auth_guard_1_1) {
                auth_guard_1 = auth_guard_1_1;
            }
        ],
        execute: function () {
            describe('AuthGuard', function () {
                var guard;
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({});
                    guard = testing_1.TestBed.inject(auth_guard_1.AuthGuard);
                });
                it('should be created', function () {
                    expect(guard).toBeTruthy();
                });
            });
        }
    };
});
