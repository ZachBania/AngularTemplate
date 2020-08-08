var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("user/user.model", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("user/auth.service", ["@angular/core", "@angular/common/http", "rxjs/operators", "rxjs"], function (exports_2, context_2) {
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
                function AuthService(http) {
                    this.http = http;
                }
                AuthService.prototype.loginUser = function (userName, password) {
                    var _this = this;
                    var loginInfo = { username: userName, password: password };
                    var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post('/api/login', loginInfo, options)
                        .pipe(operators_1.tap(function (data) {
                        _this.currentUser = data['user'];
                    }))
                        .pipe(operators_1.catchError(function (err) {
                        return rxjs_1.of(false);
                    }));
                };
                AuthService.prototype.isAuthenticated = function () {
                    return !!this.currentUser;
                };
                AuthService.prototype.checkAuthenticationStatus = function () {
                    var _this = this;
                    this.http.get('/api/currentIdentity')
                        .pipe(operators_1.tap(function (data) {
                        if (data instanceof Object) {
                            _this.currentUser = data;
                        }
                    }))
                        .subscribe();
                };
                AuthService.prototype.updateCurrentUser = function (firstName, lastName) {
                    this.currentUser.firstName = firstName;
                    this.currentUser.lastName = lastName;
                    var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.put("/api/users/" + this.currentUser.id, this.currentUser, options);
                };
                AuthService.prototype.logout = function () {
                    this.currentUser = undefined;
                    var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post('/api/logout', {}, options);
                };
                AuthService = __decorate([
                    core_1.Injectable()
                ], AuthService);
                return AuthService;
            }());
            exports_2("AuthService", AuthService);
        }
    };
});
System.register("app.component", ["@angular/core"], function (exports_3, context_3) {
    "use strict";
    var core_2, AppComponent;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            }
        ],
        execute: function () {
            AppComponent = /** @class */ (function () {
                function AppComponent(auth) {
                    this.auth = auth;
                    this.brandTitle = "Angular Template";
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.auth.checkAuthenticationStatus();
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
            exports_3("AppComponent", AppComponent);
        }
    };
});
System.register("app.component.spec", ["@angular/core/testing", "@angular/router/testing", "app.component"], function (exports_4, context_4) {
    "use strict";
    var testing_1, testing_2, app_component_1;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }
        ],
        execute: function () {
            describe('AppComponent', function () {
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        imports: [
                            testing_2.RouterTestingModule
                        ],
                        declarations: [
                            app_component_1.AppComponent
                        ]
                    }).compileComponents();
                }));
                it('should create the app', function () {
                    var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
                    var app = fixture.componentInstance;
                    expect(app).toBeTruthy();
                });
                it("should have as title 'AngularJSTemplate'", function () {
                    var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
                    var app = fixture.componentInstance;
                    expect(app.title).toEqual('AngularJSTemplate');
                });
                it('should render title', function () {
                    var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
                    fixture.detectChanges();
                    var compiled = fixture.nativeElement;
                    expect(compiled.querySelector('.content span').textContent).toContain('AngularJSTemplate app is running!');
                });
            });
        }
    };
});
