var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("models/user.model", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("services/auth.service", ["@angular/core", "@angular/common/http", "rxjs/operators", "rxjs"], function (exports_2, context_2) {
    "use strict";
    var core_1, http_1, operators_1, rxjs_1, AuthService;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (operators_1_1) {
                operators_1 = operators_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            }
        ],
        execute: function () {
            AuthService = /** @class */ (function () {
                function AuthService(http, router) {
                    this.http = http;
                    this.router = router;
                    this.server_url = "https://zrbania.uwmsois.com";
                    this.getLoggedInName = new core_1.EventEmitter();
                    this.currentUserSubject = new rxjs_1.BehaviorSubject(JSON.parse(localStorage.getItem('user')));
                    this.currentUser = this.currentUserSubject.asObservable();
                }
                Object.defineProperty(AuthService.prototype, "userValue", {
                    get: function () {
                        return this.currentUserSubject.value;
                    },
                    enumerable: false,
                    configurable: true
                });
                AuthService.prototype.userlogin = function (username, password) {
                    var _this = this;
                    var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/admin/auth/login.php', { username: username, password: password }, options)
                        .pipe(operators_1.map(function (data) {
                        // store user details token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('user', JSON.stringify(data));
                        _this.currentUserSubject.next(data);
                        return data;
                    }));
                };
                AuthService.prototype.userRegistration = function (user) {
                    var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/admin/auth/register.php', user, options)
                        .pipe(operators_1.map(function (data) { return data; }));
                };
                AuthService.prototype.updateCurrentUser = function (formValues) {
                    var _this = this;
                    var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/admin/auth/update.php', formValues, options)
                        .pipe(operators_1.map(function (data) {
                        // Map the data to local storage
                        // assign data to currentUserSubject WHERE this.currentUser = this.currentUserSubject.asObservable();
                        _this.currentUserSubject = JSON.parse(data);
                        // view data
                        console.log("data", data);
                        console.log("currentUserSubject", _this.currentUserSubject);
                        console.log("currentUser", _this.currentUser);
                        return data;
                    }));
                };
                AuthService.prototype.isAuthenticated = function () {
                    var user = localStorage.getItem('user');
                    if (user == null || user == 'undefined' || user == '[]') {
                        return false;
                    }
                    else {
                        return true;
                    }
                };
                AuthService.prototype.logout = function () {
                    // remove user from local storage and set current user to null
                    localStorage.removeItem('user');
                    this.currentUserSubject.next(null);
                    this.router.navigate(['/main']);
                };
                __decorate([
                    core_1.Output()
                ], AuthService.prototype, "getLoggedInName");
                AuthService = __decorate([
                    core_1.Injectable({ providedIn: 'root' })
                ], AuthService);
                return AuthService;
            }());
            exports_2("AuthService", AuthService);
        }
    };
});
System.register("models/events.model", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("models/items.model", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("models/index", ["models/events.model", "models/items.model", "models/user.model"], function (exports_5, context_5) {
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
            function (events_model_1_1) {
                exportStar_1(events_model_1_1);
            },
            function (items_model_1_1) {
                exportStar_1(items_model_1_1);
            },
            function (user_model_1_1) {
                exportStar_1(user_model_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("app.component", ["@angular/core"], function (exports_6, context_6) {
    "use strict";
    var core_2, AppComponent;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            }
        ],
        execute: function () {
            AppComponent = /** @class */ (function () {
                function AppComponent(authService) {
                    // this.authService.currentUser.subscribe(x => this.currentUser = x);
                    this.authService = authService;
                    this.brandTitle = "Angular Template";
                }
                AppComponent.prototype.logout = function () {
                    this.authService.logout();
                    window.location.href = window.location.href;
                };
                AppComponent = __decorate([
                    core_2.Component({
                        selector: 'app-root',
                        templateUrl: './app.component.html',
                        styleUrls: ['./app.component.scss']
                    })
                ], AppComponent);
                return AppComponent;
            }());
            exports_6("AppComponent", AppComponent);
        }
    };
});
System.register("app.component.spec", [], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
            // Range, State Change, Assert
            describe('Core', function () {
            });
        }
    };
});
