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
System.register("services/auth.service", ["@angular/core", "@angular/common/http", "rxjs/operators"], function (exports_2, context_2) {
    "use strict";
    var core_1, http_1, operators_1, AuthService;
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
            }
        ],
        execute: function () {
            AuthService = /** @class */ (function () {
                function AuthService(http, router) {
                    this.http = http;
                    this.router = router;
                    this.server_url = "https://zrbania.uwmsois.com";
                    this.getLoggedInName = new core_1.EventEmitter();
                }
                AuthService.prototype.userlogin = function (username, password) {
                    var _this = this;
                    var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/admin/auth/login.php', { username: username, password: password })
                        .pipe(operators_1.map(function (Users) {
                        _this.setToken(JSON.stringify(Users[0]));
                        _this.currentUser = Users[0];
                        _this.getLoggedInName.emit(true);
                        return Users;
                    }));
                };
                AuthService.prototype.userRegistration = function (formValues) {
                    var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/admin/auth/register.php', formValues, options)
                        .pipe(operators_1.map(function (Users) { return Users; }));
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
                    core_1.Output()
                ], AuthService.prototype, "getLoggedInName");
                AuthService = __decorate([
                    core_1.Injectable()
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
                    var _this = this;
                    this.authService = authService;
                    this.brandTitle = "Angular Template";
                    authService.getLoggedInName.subscribe(function (name) { return _this.changeName(name); });
                    // if (this.authService.isAuthenticated() == true) {
                    //   this.currentUser = JSON.parse(this.authService.getToken()) as IUser;      
                    //   console.log("currentUser: ", this.currentUser);
                    // }
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
