(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7UCR":function(t,n,e){"use strict";e.r(n),e.d(n,"UserModule",(function(){return K}));var o=e("ofXK"),r=e("tyNb"),l=e("3Pt+"),a=e("fXoL"),b=e("lGQG");function c(t,n){1&t&&(a.Kb(0,"em"),a.lc(1,"*"),a.Jb())}function s(t,n){1&t&&(a.Kb(0,"em"),a.lc(1,"Must start with a letter"),a.Jb())}function i(t,n){1&t&&(a.Kb(0,"em"),a.lc(1,"*"),a.Jb())}function m(t,n){1&t&&(a.Kb(0,"em"),a.lc(1,"*"),a.Jb())}function u(t,n){1&t&&(a.Kb(0,"em"),a.lc(1,"*"),a.Jb())}function d(t,n){1&t&&(a.Kb(0,"em"),a.lc(1,"*"),a.Jb())}const f=function(t){return{error:t}};function p(t,n){1&t&&(a.Kb(0,"em"),a.lc(1,"*"),a.Jb())}function g(t,n){1&t&&(a.Kb(0,"em"),a.lc(1,"*"),a.Jb())}function h(t,n){1&t&&(a.Kb(0,"p",15),a.lc(1,"Invalid Login Info"),a.Jb())}const J=[{path:"profile",component:(()=>{class t{constructor(t,n){this.router=t,this.authService=n}ngOnInit(){this.firstName=new l.b(this.authService.currentUser.firstName,[l.p.required,l.p.pattern("[a-zA-Z].*")]),this.lastName=new l.b(this.authService.currentUser.lastName,l.p.required),this.email=new l.b(this.authService.currentUser.email,l.p.required),this.username=new l.b(this.authService.currentUser.username,l.p.required),this.password=new l.b(this.authService.currentUser.password,l.p.required),this.profileForm=new l.d({firstName:this.firstName,lastName:this.lastName,email:this.email,username:this.username,password:this.password})}saveProfile(t){this.profileForm.valid&&(this.authService.updateCurrentUser(t.firstName,t.lastName,t.email,t.username,t.password),this.router.navigate(["main"]))}logout(){this.authService.logout().subscribe(()=>{this.router.navigate(["main"])})}validateFirstName(){return this.firstName.valid||this.firstName.untouched}validateLastName(){return this.lastName.valid||this.lastName.untouched}validateEmail(){return this.email.valid||this.email.untouched}validateUsername(){return this.username.valid||this.username.untouched}validatePassword(){return this.password.valid||this.password.untouched}cancel(){this.router.navigate(["main"])}}return t.\u0275fac=function(n){return new(n||t)(a.Hb(r.b),a.Hb(b.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-profile"]],decls:38,vars:22,consts:[[1,"col-md-4"],["autocomplete","off","novalidate","",3,"formGroup","ngSubmit"],[1,"form-group",3,"ngClass"],[4,"ngIf"],["for","firstName"],["formControlName","firstName","id","firstName","type","text","placeholder","First Name...",1,"form-control"],["for","lastName"],["formControlName","lastName","id","lastName","type","text","placeholder","Last Name...",1,"form-control"],["for","email"],["formControlName","email","id","email","type","text","placeholder","email",1,"form-control"],["for","username"],["formControlName","username","id","username","type","text","placeholder","Username",1,"form-control"],["for","password"],["formControlName","password","id","password","type","text","placeholder","Password",1,"form-control"],[1,"form-group"],["type","submit",1,"btn","btn-primary"],["type","button",1,"btn","btn-default",3,"click"]],template:function(t,n){1&t&&(a.Kb(0,"h1"),a.lc(1,"Edit Your Profile "),a.Jb(),a.Kb(2,"div",0),a.Kb(3,"form",1),a.Rb("ngSubmit",(function(){return n.saveProfile(n.profileForm.value)})),a.Kb(4,"div",2),a.kc(5,c,2,0,"em",3),a.Kb(6,"label",4),a.lc(7,"First Name:"),a.Jb(),a.Ib(8,"input",5),a.kc(9,s,2,0,"em",3),a.Jb(),a.Kb(10,"div",2),a.kc(11,i,2,0,"em",3),a.Kb(12,"label",6),a.lc(13,"Last Name:"),a.Jb(),a.Ib(14,"input",7),a.Jb(),a.Kb(15,"div",2),a.kc(16,m,2,0,"em",3),a.Kb(17,"label",8),a.lc(18,"Email:"),a.Jb(),a.Ib(19,"input",9),a.Jb(),a.Kb(20,"div",2),a.kc(21,u,2,0,"em",3),a.Kb(22,"label",10),a.lc(23,"Username:"),a.Jb(),a.Ib(24,"input",11),a.Jb(),a.Kb(25,"div",2),a.kc(26,d,2,0,"em",3),a.Kb(27,"label",12),a.lc(28,"Password:"),a.Jb(),a.Ib(29,"input",13),a.Jb(),a.Kb(30,"div",14),a.Kb(31,"button",15),a.lc(32,"Save"),a.Jb(),a.Kb(33,"button",16),a.Rb("click",(function(){return n.cancel()})),a.lc(34,"Cancel"),a.Jb(),a.Kb(35,"button",16),a.Rb("click",(function(){return n.logout()})),a.lc(36,"Logout"),a.Jb(),a.Jb(),a.Jb(),a.Ib(37,"div"),a.Jb()),2&t&&(a.xb(3),a.Zb("formGroup",n.profileForm),a.xb(1),a.Zb("ngClass",a.dc(12,f,!n.validateFirstName())),a.xb(1),a.Zb("ngIf",!n.validateFirstName()&&n.profileForm.controls.firstName.errors.required),a.xb(4),a.Zb("ngIf",!n.validateFirstName()&&n.profileForm.controls.firstName.errors.pattern),a.xb(1),a.Zb("ngClass",a.dc(14,f,!n.validateLastName())),a.xb(1),a.Zb("ngIf",!n.validateLastName()),a.xb(4),a.Zb("ngClass",a.dc(16,f,!n.validateEmail())),a.xb(1),a.Zb("ngIf",!n.validateEmail()),a.xb(4),a.Zb("ngClass",a.dc(18,f,!n.validateUsername())),a.xb(1),a.Zb("ngIf",!n.validateUsername()),a.xb(4),a.Zb("ngClass",a.dc(20,f,!n.validatePassword())),a.xb(1),a.Zb("ngIf",!n.validatePassword()))},directives:[l.r,l.h,l.e,o.i,o.k,l.a,l.g,l.c],styles:["@font-face{src:url(primary.f5622e8907f0bef2e016.ttf);font-family:primary}h1[_ngcontent-%COMP%]{color:#0385d2;font-family:primary;font-size:2.5em;padding:.5em;background:#000}form[_ngcontent-%COMP%]{padding:1em}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{clear:both;padding:.5em 0}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{float:left;color:red}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:10em;font-size:1em;font-family:Arial;color:#000;float:left}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]{background:transparent;display:block}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:calc(10em - .25em);font-size:1em;padding:0;font-family:Arial;color:#000;font-weight:900}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]{margin:0 .5em 0 0;background:#0385d2}"]}),t})()},{path:"login",component:(()=>{class t{constructor(t,n){this.authService=t,this.router=n,this.loginInvalid=!1}login(t){this.authService.loginUser(t.username,t.password).subscribe(t=>{t?(this.authService.isAuthenticated(),this.router.navigate(["main"])):this.loginInvalid=!0})}cancel(){this.router.navigate(["main"])}}return t.\u0275fac=function(n){return new(n||t)(a.Hb(b.a),a.Hb(r.b))},t.\u0275cmp=a.Bb({type:t,selectors:[["ng-component"]],decls:118,vars:22,consts:[[1,"col-md-4"],["autocomplete","off","novalidate","",3,"ngSubmit"],["loginForm","ngForm"],[1,"form-group"],[4,"ngIf"],["for","username"],["name","username","required","","id","username","type","text","placeholder","User Name...",1,"form-control",3,"ngModel"],["for","password"],["name","password","required","","id","password","type","password","placeholder","Password...",1,"form-control",3,"ngModel"],[3,"mouseenter","mouseleave"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-default",3,"click"],["class","alert alert-danger",4,"ngIf"],[1,"form-controls-table"],[1,"table","table-hover"],[1,"alert","alert-danger"]],template:function(t,n){if(1&t){const t=a.Lb();a.Kb(0,"h1"),a.lc(1,"Profile Login"),a.Jb(),a.Kb(2,"div",0),a.Kb(3,"form",1,2),a.Rb("ngSubmit",(function(){a.hc(t);const e=a.gc(4);return n.login(e.value)})),a.Kb(5,"div",3),a.kc(6,p,2,0,"em",4),a.Kb(7,"label",5),a.lc(8,"User Name:"),a.Jb(),a.Kb(9,"input",6),a.Rb("ngModel",(function(){return n.username})),a.Jb(),a.Jb(),a.Kb(10,"div",3),a.kc(11,g,2,0,"em",4),a.Kb(12,"label",7),a.lc(13,"Password:"),a.Jb(),a.Kb(14,"input",8),a.Rb("ngModel",(function(){return n.password})),a.Jb(),a.Jb(),a.Kb(15,"div",3),a.Kb(16,"span",9),a.Rb("mouseenter",(function(){return n.mouseoverLogin=!0}))("mouseleave",(function(){return n.mouseoverLogin=!1})),a.Kb(17,"button",10),a.lc(18,"Login"),a.Jb(),a.Jb(),a.Kb(19,"button",11),a.Rb("click",(function(){return n.cancel()})),a.lc(20,"Cancel"),a.Jb(),a.Jb(),a.kc(21,h,2,0,"p",12),a.Jb(),a.Jb(),a.Kb(22,"div",13),a.Kb(23,"h2"),a.lc(24,"Angular Form Control Data"),a.Jb(),a.Kb(25,"p"),a.lc(26,"Angular provides form control data to identify the current state of each field."),a.Jb(),a.Kb(27,"table",14),a.Kb(28,"thead"),a.Kb(29,"tr"),a.Kb(30,"th"),a.Kb(31,"p"),a.lc(32,"Field"),a.Jb(),a.Jb(),a.Kb(33,"th"),a.Kb(34,"p"),a.lc(35,"Valid"),a.Jb(),a.Jb(),a.Kb(36,"th"),a.Kb(37,"p"),a.lc(38,"Invalid"),a.Jb(),a.Jb(),a.Kb(39,"th"),a.Kb(40,"p"),a.lc(41,"Dirty"),a.Jb(),a.Jb(),a.Kb(42,"th"),a.Kb(43,"p"),a.lc(44,"Pristine"),a.Jb(),a.Jb(),a.Kb(45,"th"),a.Kb(46,"p"),a.lc(47,"Touched"),a.Jb(),a.Jb(),a.Kb(48,"th"),a.Kb(49,"p"),a.lc(50,"Untouched"),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Kb(51,"tbody"),a.Kb(52,"tr"),a.Kb(53,"td"),a.Kb(54,"p"),a.lc(55,"Form"),a.Jb(),a.Jb(),a.Kb(56,"td"),a.Kb(57,"p"),a.lc(58),a.Jb(),a.Jb(),a.Kb(59,"td"),a.Kb(60,"p"),a.lc(61),a.Jb(),a.Jb(),a.Kb(62,"td"),a.Kb(63,"p"),a.lc(64),a.Jb(),a.Jb(),a.Kb(65,"td"),a.Kb(66,"p"),a.lc(67),a.Jb(),a.Jb(),a.Kb(68,"td"),a.Kb(69,"p"),a.lc(70),a.Jb(),a.Jb(),a.Kb(71,"td"),a.Kb(72,"p"),a.lc(73),a.Jb(),a.Jb(),a.Jb(),a.Kb(74,"tr"),a.Kb(75,"td"),a.Kb(76,"p"),a.lc(77,"Username"),a.Jb(),a.Jb(),a.Kb(78,"td"),a.Kb(79,"p"),a.lc(80),a.Jb(),a.Jb(),a.Kb(81,"td"),a.Kb(82,"p"),a.lc(83),a.Jb(),a.Jb(),a.Kb(84,"td"),a.Kb(85,"p"),a.lc(86),a.Jb(),a.Jb(),a.Kb(87,"td"),a.Kb(88,"p"),a.lc(89),a.Jb(),a.Jb(),a.Kb(90,"td"),a.Kb(91,"p"),a.lc(92),a.Jb(),a.Jb(),a.Kb(93,"td"),a.Kb(94,"p"),a.lc(95),a.Jb(),a.Jb(),a.Jb(),a.Kb(96,"tr"),a.Kb(97,"td"),a.Kb(98,"p"),a.lc(99,"Password"),a.Jb(),a.Jb(),a.Kb(100,"td"),a.Kb(101,"p"),a.lc(102),a.Jb(),a.Jb(),a.Kb(103,"td"),a.Kb(104,"p"),a.lc(105),a.Jb(),a.Jb(),a.Kb(106,"td"),a.Kb(107,"p"),a.lc(108),a.Jb(),a.Jb(),a.Kb(109,"td"),a.Kb(110,"p"),a.lc(111),a.Jb(),a.Jb(),a.Kb(112,"td"),a.Kb(113,"p"),a.lc(114),a.Jb(),a.Jb(),a.Kb(115,"td"),a.Kb(116,"p"),a.lc(117),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Jb()}if(2&t){const t=a.gc(4);a.xb(6),a.Zb("ngIf",(null==t.controls.username?null:t.controls.username.invalid)&&((null==t.controls.username?null:t.controls.username.touched)||n.mouseoverLogin)),a.xb(5),a.Zb("ngIf",(null==t.controls.password?null:t.controls.password.invalid)&&((null==t.controls.password?null:t.controls.password.touched)||n.mouseoverLogin)),a.xb(6),a.Zb("disabled",t.invalid),a.xb(4),a.Zb("ngIf",n.loginInvalid),a.xb(37),a.mc(t.valid),a.xb(3),a.mc(t.invalid),a.xb(3),a.mc(t.dirty),a.xb(3),a.mc(t.pristine),a.xb(3),a.mc(t.touched),a.xb(3),a.mc(t.untouched),a.xb(7),a.mc(null==t.controls.username?null:t.controls.username.valid),a.xb(3),a.mc(null==t.controls.username?null:t.controls.username.invalid),a.xb(3),a.mc(null==t.controls.username?null:t.controls.username.dirty),a.xb(3),a.mc(null==t.controls.username?null:t.controls.username.pristine),a.xb(3),a.mc(null==t.controls.username?null:t.controls.username.touched),a.xb(3),a.mc(null==t.controls.username?null:t.controls.username.untouched),a.xb(7),a.mc(null==t.controls.password?null:t.controls.password.valid),a.xb(3),a.mc(null==t.controls.password?null:t.controls.password.invalid),a.xb(3),a.mc(null==t.controls.password?null:t.controls.password.dirty),a.xb(3),a.mc(null==t.controls.password?null:t.controls.password.pristine),a.xb(3),a.mc(null==t.controls.password?null:t.controls.password.touched),a.xb(3),a.mc(null==t.controls.password?null:t.controls.password.untouched)}},directives:[l.r,l.h,l.i,o.k,l.a,l.n,l.g,l.j],styles:["@font-face{src:url(primary.f5622e8907f0bef2e016.ttf);font-family:primary}h1[_ngcontent-%COMP%]{color:#0385d2;font-family:primary;font-size:2.5em;padding:.5em;background:#000}form[_ngcontent-%COMP%]{padding:1em}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{clear:both;padding:.5em 0}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{float:left;color:red}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:10em;font-size:1em;font-family:Arial;color:#000;float:left}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]{background:transparent;display:block}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:calc(10em - .25em);font-size:1em;padding:0;font-family:Arial;color:#000;font-weight:900}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]{margin:0 .5em 0 0;background:#0385d2}.form-controls-table[_ngcontent-%COMP%]{padding:1em}.form-controls-table[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.25em}.form-controls-table[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .form-controls-table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .form-controls-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{color:#000;font-family:Arial}.form-controls-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{background:#fff;width:calc(100% - 1em);border:.25em solid #000}.form-controls-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#000;color:#fff}.form-controls-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff}"]}),t})()}];let K=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(n){return new(n||t)},providers:[],imports:[[o.b,l.f,l.m,r.f.forChild(J)]]}),t})()}}]);