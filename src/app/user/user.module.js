var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("user.model", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("auth.service", ["@angular/core", "@angular/common/http", "rxjs/operators", "rxjs"], function (exports_2, context_2) {
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
System.register("profile.component", ["@angular/core", "@angular/forms"], function (exports_3, context_3) {
    "use strict";
    var core_2, forms_1, ProfileComponent;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }
        ],
        execute: function () {
            ProfileComponent = /** @class */ (function () {
                function ProfileComponent(router, authService) {
                    this.router = router;
                    this.authService = authService;
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    this.firstName = new forms_1.FormControl(this.authService.currentUser.firstName, [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z].*')]);
                    this.lastName = new forms_1.FormControl(this.authService.currentUser.lastName, forms_1.Validators.required);
                    this.profileForm = new forms_1.FormGroup({
                        firstName: this.firstName,
                        lastName: this.lastName
                    });
                };
                ProfileComponent.prototype.saveProfile = function (formValues) {
                    if (this.profileForm.valid) {
                        this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
                        this.router.navigate(['main']);
                    }
                };
                ProfileComponent.prototype.logout = function () {
                    var _this = this;
                    this.authService.logout().subscribe(function () {
                        _this.router.navigate(['/user/login']);
                    });
                };
                ProfileComponent.prototype.validateFirstName = function () {
                    return this.firstName.valid || this.firstName.untouched;
                };
                ProfileComponent.prototype.validateLastName = function () {
                    return this.lastName.valid || this.lastName.untouched;
                };
                ProfileComponent.prototype.cancel = function () {
                    this.router.navigate(['main']);
                };
                ProfileComponent = __decorate([
                    core_2.Component({
                        selector: 'app-profile',
                        templateUrl: './profile.component.html',
                        styleUrls: ['./profile.component.scss']
                    })
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_3("ProfileComponent", ProfileComponent);
        }
    };
});
System.register("login.component", ["@angular/core"], function (exports_4, context_4) {
    "use strict";
    var core_3, LoginComponent;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
            }
        ],
        execute: function () {
            LoginComponent = /** @class */ (function () {
                function LoginComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                    this.loginInvalid = false;
                }
                LoginComponent.prototype.login = function (formValues) {
                    var _this = this;
                    this.authService.loginUser(formValues.userName, formValues.password)
                        .subscribe(function (resp) {
                        if (!resp) {
                            _this.loginInvalid = true;
                        }
                        else {
                            _this.router.navigate(['main']);
                        }
                    });
                };
                LoginComponent.prototype.cancel = function () {
                    this.router.navigate(['main']);
                };
                LoginComponent = __decorate([
                    core_3.Component({
                        templateUrl: './login.component.html',
                        styleUrls: ['./login.component.scss']
                    })
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_4("LoginComponent", LoginComponent);
        }
    };
});
System.register("user.routes", ["profile.component", "login.component"], function (exports_5, context_5) {
    "use strict";
    var profile_component_1, login_component_1, userRoutes;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }
        ],
        execute: function () {
            exports_5("userRoutes", userRoutes = [
                { path: 'profile', component: profile_component_1.ProfileComponent },
                { path: 'login', component: login_component_1.LoginComponent }
            ]);
        }
    };
});
System.register("user.module", ["@angular/core", "@angular/common", "@angular/router", "@angular/forms", "user.routes", "profile.component", "login.component"], function (exports_6, context_6) {
    "use strict";
    var core_4, common_1, router_1, forms_2, user_routes_1, profile_component_2, login_component_2, UserModule;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_2_1) {
                forms_2 = forms_2_1;
            },
            function (user_routes_1_1) {
                user_routes_1 = user_routes_1_1;
            },
            function (profile_component_2_1) {
                profile_component_2 = profile_component_2_1;
            },
            function (login_component_2_1) {
                login_component_2 = login_component_2_1;
            }
        ],
        execute: function () {
            UserModule = /** @class */ (function () {
                function UserModule() {
                }
                UserModule = __decorate([
                    core_4.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_2.FormsModule,
                            forms_2.ReactiveFormsModule,
                            router_1.RouterModule.forChild(user_routes_1.userRoutes)
                        ],
                        declarations: [
                            profile_component_2.ProfileComponent,
                            login_component_2.LoginComponent
                        ],
                        providers: []
                    })
                ], UserModule);
                return UserModule;
            }());
            exports_6("UserModule", UserModule);
        }
    };
});
