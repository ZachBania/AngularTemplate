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
    var _this, core_1, http_1, operators_1, AuthService;
    _this = this;
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
                    var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/admin/auth/login.php', { username: username, password: password }, options)
                        .pipe(operators_1.map(function (Users) { localStorage.setItem('user', JSON.stringify(user)); }));
                    this.currentUser = Users[0];
                    this.getLoggedInName.emit(true);
                    return Users;
                };
                ;
                __decorate([
                    core_1.Output()
                ], AuthService.prototype, "getLoggedInName");
                AuthService = __decorate([
                    core_1.Injectable()
                ], AuthService);
                return AuthService;
            }());
            exports_2("AuthService", AuthService);
            userRegistration(user);
            {
                var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                return this.http.post(this.server_url + '/backend/admin/auth/register.php', user, options)
                    .pipe(operators_1.map(function (Users) { return Users; }));
            }
            updateCurrentUser(user);
            {
                var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                return this.http.post(this.server_url + '/backend/admin/auth/update.php', user, options)
                    .pipe(operators_1.map(function (Users) {
                    _this.setToken(JSON.stringify(Users[0]));
                    _this.currentUser = Users[0];
                    _this.getLoggedInName.emit(true);
                    return Users;
                }));
            }
            setToken(token, string);
            {
                localStorage.setItem('token', token);
            }
            getToken();
            {
                return localStorage.getItem('token');
            }
            deleteToken();
            {
                localStorage.removeItem('token');
            }
            isAuthenticated();
            {
                var token = this.getToken();
                if (token != null || token != 'undefined') {
                    return true;
                }
                return false;
            }
            logout();
            {
                this.deleteToken();
                window.location.href = window.location.href;
                this.router.navigate(['main']);
            }
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
System.register("user/register/register.component", ["@angular/core"], function (exports_6, context_6) {
    "use strict";
    var core_2, RegisterComponent;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            }
        ],
        execute: function () {
            RegisterComponent = /** @class */ (function () {
                function RegisterComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                    this.isDirty = true;
                }
                RegisterComponent.prototype.saveUser = function (user) {
                    var _this = this;
                    this.authService.userRegistration(user).subscribe(function () {
                        _this.isDirty = false;
                        _this.router.navigate(['/user/login']);
                    });
                };
                RegisterComponent.prototype.cancel = function () {
                    this.router.navigate(['/user/login']);
                };
                RegisterComponent.prototype.ngOnInit = function () {
                };
                RegisterComponent = __decorate([
                    core_2.Component({
                        selector: 'app-register',
                        templateUrl: './register.component.html',
                        styleUrls: ['./register.component.scss']
                    })
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_6("RegisterComponent", RegisterComponent);
        }
    };
});
System.register("user/register/register.component.spec", ["@angular/core/testing", "user/register/register.component"], function (exports_7, context_7) {
    "use strict";
    var testing_1, register_component_1;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            }
        ],
        execute: function () {
            describe('RegisterComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [register_component_1.RegisterComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(register_component_1.RegisterComponent);
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
