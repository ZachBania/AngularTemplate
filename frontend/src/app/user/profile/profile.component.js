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
                function AuthService(http) {
                    this.http = http;
                    this.server_url = "https://zrbania.uwmsois.com";
                }
                AuthService.prototype.loginUser = function (username, password) {
                    var _this = this;
                    var loginInfo = { username: username, password: password };
                    var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post(this.server_url + '/backend/admin/auth/login.php', loginInfo, options)
                        .pipe(operators_1.tap(function (data) {
                        _this.currentUser = data['user'];
                    }))
                        .pipe(operators_1.catchError(function (err) {
                        return rxjs_1.of(false);
                    }));
                };
                AuthService.prototype.userRegistration = function (firstName, lastName, email, username, password) {
                    return this.http.post(this.server_url + '/backend/admin/auth/register.php', { firstName: firstName, lastName: lastName, email: email, username: username, password: password }).pipe(operators_1.map(function (Users) { return Users; }));
                };
                AuthService.prototype.isAuthenticated = function () {
                    return !!this.currentUser;
                };
                AuthService.prototype.updateCurrentUser = function (firstName, lastName, email, username, password) {
                    this.currentUser.firstName = firstName;
                    this.currentUser.lastName = lastName;
                    this.currentUser.email = email;
                    this.currentUser.username = username;
                    this.currentUser.password = password;
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
                    this.firstName = new forms_1.FormControl(this.authService.currentUser.firstName, [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z].*')]);
                    this.lastName = new forms_1.FormControl(this.authService.currentUser.lastName, forms_1.Validators.required);
                    this.email = new forms_1.FormControl(this.authService.currentUser.email, forms_1.Validators.required);
                    this.username = new forms_1.FormControl(this.authService.currentUser.username, forms_1.Validators.required);
                    this.password = new forms_1.FormControl(this.authService.currentUser.password, forms_1.Validators.required);
                    this.profileForm = new forms_1.FormGroup({
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        username: this.username,
                        password: this.password
                    });
                };
                ProfileComponent.prototype.saveProfile = function (formValues) {
                    if (this.profileForm.valid) {
                        this.authService.updateCurrentUser(formValues.firstName, formValues.lastName, formValues.email, formValues.username, formValues.password);
                        this.router.navigate(['main']);
                    }
                };
                ProfileComponent.prototype.logout = function () {
                    var _this = this;
                    this.authService.logout().subscribe(function () {
                        _this.router.navigate(['main']);
                    });
                };
                ProfileComponent.prototype.validateFirstName = function () {
                    return this.firstName.valid || this.firstName.untouched;
                };
                ProfileComponent.prototype.validateLastName = function () {
                    return this.lastName.valid || this.lastName.untouched;
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
