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
                    this.baseUrl = "http://localhost/angular_admin/php";
                    this.getLoggedInName = new core_1.EventEmitter();
                }
                AuthService.prototype.userlogin = function (username, password) {
                    var _this = this;
                    var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/admin/auth/login.php', { username: username, password: password })
                        .pipe(operators_1.tap(function (data) { _this.currentUser = data['user']; }))
                        .pipe(operators_1.map(function (Users) { _this.setToken(Users[0].name); _this.getLoggedInName.emit(true); return Users; }));
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
System.register("user/profile/profile.component", ["@angular/core", "@angular/forms"], function (exports_3, context_3) {
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
                    this.first_name = new forms_1.FormControl(this.authService.currentUser.first_name, [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z].*')]);
                    this.last_name = new forms_1.FormControl(this.authService.currentUser.last_name, forms_1.Validators.required);
                    this.email = new forms_1.FormControl(this.authService.currentUser.email, forms_1.Validators.required);
                    this.username = new forms_1.FormControl(this.authService.currentUser.username, forms_1.Validators.required);
                    this.password = new forms_1.FormControl(this.authService.currentUser.password, forms_1.Validators.required);
                    this.profileForm = new forms_1.FormGroup({
                        first_name: this.first_name,
                        last_name: this.last_name,
                        email: this.email,
                        username: this.username,
                        password: this.password
                    });
                };
                ProfileComponent.prototype.saveProfile = function (formValues) {
                    if (this.profileForm.valid) {
                        // this.authService.updateCurrentUser(formValues.first_name, formValues.last_name, formValues.email, formValues.username, formValues.password)
                        this.router.navigate(['main']);
                    }
                };
                ProfileComponent.prototype.logout = function () {
                    this.authService.logout();
                };
                ProfileComponent.prototype.validateFirstName = function () {
                    return this.first_name.valid || this.first_name.untouched;
                };
                ProfileComponent.prototype.validateLastName = function () {
                    return this.last_name.valid || this.last_name.untouched;
                };
                ProfileComponent.prototype.validateEmail = function () {
                    return this.email.valid || this.email.untouched;
                };
                ProfileComponent.prototype.validateUsername = function () {
                    return this.username.valid || this.username.untouched;
                };
                ProfileComponent.prototype.validatePassword = function () {
                    return this.password.valid || this.password.untouched;
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
System.register("models/items.model", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("services/items.service", ["@angular/core", "rxjs", "rxjs/operators", "@angular/common/http"], function (exports_5, context_5) {
    "use strict";
    var core_3, rxjs_1, operators_2, http_2, ItemsService;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            },
            function (operators_2_1) {
                operators_2 = operators_2_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
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
                        .pipe(operators_2.catchError(this.handleError('getItems')));
                };
                ItemsService.prototype.getItem = function (itemId) {
                    var params = new http_2.HttpParams().set('id', itemId.toString());
                    return this.http.get(this.server_url + '/backend/items/read-detail.php', { params: params })
                        .pipe(operators_2.catchError(this.handleError('getItem')));
                };
                ItemsService.prototype.saveItem = function (item) {
                    var options = { headers: new http_2.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/items/insert.php', item, options);
                };
                ItemsService.prototype.updateItem = function (item) {
                    var options = { headers: new http_2.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/items/update.php', item, options);
                };
                ItemsService.prototype.deleteItem = function (item) {
                    var options = { headers: new http_2.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/items/delete.php', item, options);
                };
                ItemsService.prototype.searchItems = function (searchTerm) {
                    this.http.post(this.server_url + '/main/search?search=' + searchTerm, "");
                    return this.http.get(this.server_url + '/backend/items/read.php/search?search=' + searchTerm)
                        .pipe(operators_2.catchError(this.handleError('searchItems')));
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
            exports_5("ItemsService", ItemsService);
        }
    };
});
System.register("services/index", ["services/items.service", "services/auth.service"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_6(exports);
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
System.register("user/login/login.component", ["@angular/core", "@angular/forms", "rxjs/operators"], function (exports_7, context_7) {
    "use strict";
    var core_4, forms_2, operators_3, LoginComponent;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (forms_2_1) {
                forms_2 = forms_2_1;
            },
            function (operators_3_1) {
                operators_3 = operators_3_1;
            }
        ],
        execute: function () {
            LoginComponent = /** @class */ (function () {
                function LoginComponent(fb, dataService, router) {
                    this.fb = fb;
                    this.dataService = dataService;
                    this.router = router;
                    this.angForm = this.fb.group({
                        email: ['', [forms_2.Validators.required, forms_2.Validators.minLength(1), forms_2.Validators.email]],
                        password: ['', forms_2.Validators.required]
                    });
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.postdata = function (angForm1) {
                    var _this = this;
                    this.dataService.userlogin(angForm1.value.email, angForm1.value.password)
                        .pipe(operators_3.first())
                        .subscribe(function (data) {
                        var redirect = _this.dataService.redirectUrl ? _this.dataService.redirectUrl : '/dashboard';
                        _this.router.navigate([redirect]);
                    }, function (error) {
                        alert("User name or password is incorrect");
                    });
                };
                Object.defineProperty(LoginComponent.prototype, "email", {
                    get: function () { return this.angForm.get('email'); },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(LoginComponent.prototype, "password", {
                    get: function () { return this.angForm.get('password'); },
                    enumerable: false,
                    configurable: true
                });
                LoginComponent = __decorate([
                    core_4.Component({
                        selector: 'app-login',
                        templateUrl: './login.component.html',
                        styleUrls: ['./login.component.css']
                    })
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_7("LoginComponent", LoginComponent);
        }
    };
});
System.register("models/events.model", [], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("models/index", ["models/events.model", "models/items.model", "models/user.model"], function (exports_9, context_9) {
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
System.register("user/register/register.component", ["@angular/core"], function (exports_10, context_10) {
    "use strict";
    var core_5, RegisterComponent;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (core_5_1) {
                core_5 = core_5_1;
            }
        ],
        execute: function () {
            RegisterComponent = /** @class */ (function () {
                function RegisterComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                    this.isDirty = true;
                }
                RegisterComponent.prototype.saveUser = function (formValues) {
                    var _this = this;
                    this.authService.userRegistration(formValues).subscribe(function () {
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
                    core_5.Component({
                        selector: 'app-register',
                        templateUrl: './register.component.html',
                        styleUrls: ['./register.component.scss']
                    })
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_10("RegisterComponent", RegisterComponent);
        }
    };
});
System.register("user/user.routes", ["user/profile/profile.component", "user/login/login.component", "user/register/register.component"], function (exports_11, context_11) {
    "use strict";
    var profile_component_1, login_component_1, register_component_1, userRoutes;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            }
        ],
        execute: function () {
            exports_11("userRoutes", userRoutes = [
                { path: 'profile', component: profile_component_1.ProfileComponent },
                { path: 'register', component: register_component_1.RegisterComponent },
                { path: 'login', component: login_component_1.LoginComponent }
            ]);
        }
    };
});
System.register("user/user.module", ["@angular/core", "@angular/common", "@angular/router", "@angular/forms", "user/user.routes", "user/profile/profile.component", "user/login/login.component", "user/register/register.component"], function (exports_12, context_12) {
    "use strict";
    var core_6, common_1, router_1, forms_3, user_routes_1, profile_component_2, login_component_2, register_component_2, UserModule;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_3_1) {
                forms_3 = forms_3_1;
            },
            function (user_routes_1_1) {
                user_routes_1 = user_routes_1_1;
            },
            function (profile_component_2_1) {
                profile_component_2 = profile_component_2_1;
            },
            function (login_component_2_1) {
                login_component_2 = login_component_2_1;
            },
            function (register_component_2_1) {
                register_component_2 = register_component_2_1;
            }
        ],
        execute: function () {
            UserModule = /** @class */ (function () {
                function UserModule() {
                }
                UserModule = __decorate([
                    core_6.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_3.FormsModule,
                            forms_3.ReactiveFormsModule,
                            router_1.RouterModule.forChild(user_routes_1.userRoutes)
                        ],
                        declarations: [
                            profile_component_2.ProfileComponent,
                            login_component_2.LoginComponent,
                            register_component_2.RegisterComponent
                        ],
                        providers: []
                    })
                ], UserModule);
                return UserModule;
            }());
            exports_12("UserModule", UserModule);
        }
    };
});
