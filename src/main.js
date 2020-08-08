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
System.register("app/events/shared/events.model", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("app/events/shared/events.service", ["@angular/core", "rxjs", "@angular/common/http", "rxjs/operators"], function (exports_3, context_3) {
    "use strict";
    var core_2, rxjs_1, http_1, operators_1, EventsService;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (operators_1_1) {
                operators_1 = operators_1_1;
            }
        ],
        execute: function () {
            EventsService = /** @class */ (function () {
                function EventsService(http) {
                    this.http = http;
                }
                EventsService.prototype.getEvents = function () {
                    return this.http.get('/api/events')
                        .pipe(operators_1.catchError(this.handleError('getEvents', [])));
                };
                EventsService.prototype.getEvent = function (id) {
                    return this.http.get('/api/events/' + id)
                        .pipe(operators_1.catchError(this.handleError('getEvent')));
                };
                EventsService.prototype.saveEvent = function (event) {
                    var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post('/api/events', event, options)
                        .pipe(operators_1.catchError(this.handleError('saveEvent')));
                };
                EventsService.prototype.searchSessions = function (searchTerm) {
                    return this.http.get('/api/sessions/search?search=' + searchTerm)
                        .pipe(operators_1.catchError(this.handleError('searchSessions')));
                };
                EventsService.prototype.handleError = function (operation, result) {
                    if (operation === void 0) { operation = 'operation'; }
                    return function (error) {
                        console.error(error);
                        return rxjs_1.of(result);
                    };
                };
                EventsService = __decorate([
                    core_2.Injectable()
                ], EventsService);
                return EventsService;
            }());
            exports_3("EventsService", EventsService);
            // const EVENTS: IEvent[] = [
            //   {
            //     id: 1,
            //     name: 'Angular Connect',
            //     description: 'Angular Connect Description',
            //     date: '9/26/2036',
            //     time: '10:00 am',
            //     price: 599.99,
            //     imageUrl: '/assets/images/angularconnect-shield.png',
            //     location: {
            //       address: '1057 DT',
            //       city: 'London',
            //       country: 'England'
            //     },
            //     sessions: [
            //       {
            //         id: 1,
            //         name: "Using Angular 4 Pipes",
            //         presenter: "Peter Bacon Darwin",
            //         duration: 1,
            //         level: "Intermediate",
            //         abstract: `Learn all about the new pipes in Angular 4, both 
            //         how to write them, and how to get the new AI CLI to write 
            //         them for you. Given by the famous PBD, president of Angular 
            //         University (formerly Oxford University)`,
            //         voters: ['bradgreen', 'igorminar', 'martinfowler']
            //       },
            //       {
            //         id: 2,
            //         name: "Getting the most out of your dev team",
            //         presenter: "Jeff Cross",
            //         duration: 1,
            //         level: "Intermediate",
            //         abstract: `We all know that our dev teams work hard, but with 
            //         the right management they can be even more productive, without 
            //         overworking them. In this session I'll show you how to get the 
            //         best results from the talent you already have on staff.`,
            //         voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
            //       },
            //       {
            //         id: 3,
            //         name: "Angular 4 Performance Metrics",
            //         presenter: "Rob Wormald",
            //         duration: 2,
            //         level: "Advanced",
            //         abstract: `Angular 4 Performance is hot. In this session, we'll see 
            //         how Angular gets such great performance by preloading data on 
            //         your users devices before they even hit your site using the 
            //         new predictive algorithms and thought reading software 
            //         built into Angular 4.`,
            //         voters: []
            //       },
            //       {
            //         id: 4,
            //         name: "Angular 5 Look Ahead",
            //         presenter: "Brad Green",
            //         duration: 2,
            //         level: "Advanced",
            //         abstract: `Even though Angular 5 is still 6 years away, we all want 
            //         to know all about it so that we can spend endless hours in meetings 
            //         debating if we should use Angular 4 or not. This talk will look at 
            //         Angular 6 even though no code has yet been written for it. We'll 
            //         look at what it might do, and how to convince your manager to 
            //         hold off on any new apps until it's released`,
            //         voters: []
            //       },
            //       {
            //         id: 5,
            //         name: "Basics of Angular 4",
            //         presenter: "John Papa",
            //         duration: 2,
            //         level: "Beginner",
            //         abstract: `It's time to learn the basics of Angular 4. This talk 
            //         will give you everything you need to know about Angular 4 to 
            //         get started with it today and be building UI's for your self 
            //         driving cars and butler-bots in no time.`,
            //         voters: ['bradgreen', 'igorminar']
            //       }
            //     ]
            //   },
            //   {
            //     id: 2,
            //     name: 'ng-nl',
            //     description: 'ng-nl Description',
            //     date: '4/15/2037',
            //     time: '9:00 am',
            //     price: 950.00,
            //     imageUrl: '/assets/images/ng-nl.png',
            //     location: {
            //       address: 'The NG-NL Convention Center & Scuba Shop',
            //       city: 'Amsterdam',
            //       country: 'Netherlands'
            //     },
            //     sessions: [
            //       {
            //         id: 1,
            //         name: "Testing Angular 4 Workshop",
            //         presenter: "Pascal Precht & Christoph Bergdorf",
            //         duration: 4,
            //         level: "Beginner",
            //         abstract: `In this 6 hour workshop you will learn not only how to test Angular 4, 
            //         you will also learn how to make the most of your team's efforts. Other topics
            //         will be convincing your manager that testing is a good idea, and using the new
            //         protractor tool for end to end testing.`,
            //         voters: ['bradgreen', 'igorminar']
            //       },
            //       {
            //         id: 2,
            //         name: "Angular 4 and Firebase",
            //         presenter: "David East",
            //         duration: 3,
            //         level: "Intermediate",
            //         abstract: `In this workshop, David East will show you how to use Angular with the new
            //         ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.`,
            //         voters: ['bradgreen', 'igorminar', 'johnpapa']
            //       },
            //       {
            //         id: 3,
            //         name: "Reading the Angular 4 Source",
            //         presenter: "Patrick Stapleton",
            //         duration: 2,
            //         level: "Intermediate",
            //         abstract: `Angular 4's source code may be over 25 million lines of code, but it's really 
            //         a lot easier to read and understand then you may think. Patrick Stapleton will talk
            //         about his secretes for keeping up with the changes, and navigating around the code.`,
            //         voters: ['martinfowler']
            //       },
            //       {
            //         id: 4,
            //         name: "Hail to the Lukas",
            //         presenter: "Lukas Ruebbelke",
            //         duration: 1,
            //         level: "Beginner",
            //         abstract: `In this session, Lukas will present the 
            //         secret to being awesome, and how he became the President 
            //         of the United States through his amazing programming skills, 
            //         showing how you too can be success with just attitude.`, 
            //         voters: ['bradgreen']
            //       },
            //     ]
            //   },
            //   {
            //     id: 3,
            //     name: 'ng-conf 2037',
            //     description: 'ng-conf 2037 Description',
            //     date: '5/4/2037',
            //     time: '9:00 am',
            //     price: 759.00,
            //     imageUrl: '/assets/images/ng-conf.png',
            //     location: {
            //       address: 'The Palatial America Hotel',
            //       city: 'Salt Lake City',
            //       country: 'USA'
            //     },
            //     sessions: [
            //       {
            //         id: 1,
            //         name: "How Elm Powers Angular 4",
            //         presenter: "Murphy Randle",
            //         duration: 2,
            //         level: "Intermediate",
            //         abstract: `We all know that Angular is written in Elm, but did you
            //         know how the source code is really written? In this exciting look
            //         into the internals of Angular 4, we'll see exactly how Elm powers
            //         the framework, and what you can do to take advantage of this knowledge.`,
            //         voters: ['bradgreen', 'martinfowler', 'igorminar']
            //       },
            //       {
            //         id: 2,
            //         name: "Angular and React together",
            //         presenter: "Jamison Dance",
            //         duration: 2,
            //         level: "Intermediate",
            //         abstract: `React v449.6 has just been released. Let's see how to use 
            //         this new version with Angular to create even more impressive applications.`,
            //         voters: ['bradgreen', 'martinfowler']
            //       },
            //       {
            //         id: 3,
            //         name: "Redux Woes",
            //         presenter: "Rob Wormald",
            //         duration: 1,
            //         level: "Intermediate",
            //         abstract: `Everyone is using Redux for everything from Angular to React to 
            //         Excel macros, but you're still having trouble grasping it? We'll take a look
            //         at how farmers use Redux when harvesting grain as a great introduction to 
            //         this game changing technology.`,
            //         voters: ['bradgreen', 'martinfowler', 'johnpapa']
            //       },
            //       {
            //         id: 4,
            //         name: "ng-wat again!!",
            //         presenter: "Shai Reznik",
            //         duration: 1,
            //         level: "Beginner",
            //         abstract: `Let's take a look at some of the stranger pieces of Angular 4,
            //         including neural net nets, Android in Androids, and using pipes with actual pipes.`,
            //         voters: ['bradgreen', 'martinfowler', 'igorminar', 'johnpapa']
            //       },
            //       {
            //         id: 5,
            //         name: "Dressed for Success",
            //         presenter: "Ward Bell",
            //         duration: 2,
            //         level: "Beginner",
            //         abstract: `Being a developer in 2037 is about more than just writing bug-free code. 
            //         You also have to look the part. In this amazing expose, Ward will talk you through
            //         how to pick out the right clothes to make your coworkers and boss not only
            //         respect you, but also want to be your buddy.`,
            //         voters: ['bradgreen', 'martinfowler']
            //       },
            //       {
            //         id: 6,
            //         name: "These aren't the directives you're looking for",
            //         presenter: "John Papa",
            //         duration: 2,
            //         level: "Intermediate",
            //         abstract: `Coinciding with the release of Star Wars Episode 18, this talk will show how
            //         to use directives in your Angular 4 development while drawing lessons from the new movie,
            //         featuring all your favorite characters like Han Solo's ghost and Darth Jar Jar.`,
            //         voters: ['bradgreen', 'martinfowler']
            //       },
            //     ]
            //   },
            //   {
            //     id: 4,
            //     name: 'UN Angular Summit',
            //     description: 'UN Angular Summit Description',
            //     date: '6/10/2037',
            //     time: '8:00 am',
            //     price: 800.00,
            //     imageUrl: '/assets/images/basic-shield.png',
            //     location: {
            //       address: 'The UN Angular Center',
            //       city: 'New York',
            //       country: 'USA'
            //     },
            //     sessions: [
            //       {
            //         id: 1,
            //         name: "Diversity in Tech",
            //         presenter: "Sir Dave Smith",
            //         duration: 2,
            //         level: "Beginner",
            //         abstract: `Yes, we all work with cyborgs and androids and Martians, but 
            //         we probably don't realize that sometimes our internal biases can make it difficult for
            //         these well-designed coworkers to really feel at home coding alongside us. This talk will
            //         look at things we can do to recognize our biases and counteract them.`,
            //         voters: ['bradgreen', 'igorminar']
            //       },
            //       {
            //         id: 2,
            //         name: "World Peace and Angular",
            //         presenter: "US Secretary of State Zach Galifianakis",
            //         duration: 2,
            //         level: "Beginner",
            //         abstract: `Angular has been used in most of the major peace brokering that has
            //         happened in the last decade, but there is still much we can do to remove all
            //         war from the world, and Angular will be a key part of that effort.`,
            //         voters: ['bradgreen', 'igorminar', 'johnpapa']
            //       },
            //       {
            //         id: 3,
            //         name: "Using Angular with Androids",
            //         presenter: "Dan Wahlin",
            //         duration: 3,
            //         level: "Advanced",
            //         abstract: `Androids may do everything for us now, allowing us to spend all day playing 
            //         the latest Destiny DLC, but we can still improve the massages they give and the handmade
            //         brie they make using Angular 4. This session will show you how.`,
            //         voters: ['igorminar', 'johnpapa']
            //       },
            //     ]
            //   },
            //   {
            //     id: 5,
            //     name: 'ng-vegas',
            //     description: 'ng-vegas Description',
            //     date: '2/10/2037',
            //     time: '9:00 am',
            //     price: 400.00,
            //     imageUrl: '/assets/images/ng-vegas.png',
            //     location: {
            //       address: 'The Excalibur',
            //       city: 'Las Vegas',
            //       country: 'USA'
            //     },
            //     sessions: [
            //       {
            //         id: 1,
            //         name: "Gambling with Angular",
            //         presenter: "John Papa",
            //         duration: 1,
            //         level: "Intermediate",
            //         abstract: `No, this talk isn't about slot machines. We all know that 
            //         Angular is used in most waiter-bots and coke vending machines, but
            //         did you know that was also used to write the core engine in the majority
            //         of voting machines? This talk will look at how all presidential elections
            //         are now determined by Angular code.`,
            //         voters: ['bradgreen', 'igorminar']
            //       },
            //       {
            //         id: 2,
            //         name: "Angular 4 in 60ish Minutes",
            //         presenter: "Dan Wahlin",
            //         duration: 2,
            //         level: "Beginner",
            //         abstract: `Get the skinny on Angular 4 for anyone new to this great new technology.
            //         Dan Wahlin will show you how you can get started with Angular in 60ish minutes, 
            //         guaranteed!`,
            //         voters: ['bradgreen', 'igorminar', 'johnpapa']
            //       }
            //     ]
            //   }
            // ]
        }
    };
});
System.register("app/events/shared/restricted-words.validator", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    function restrictedWords(words) {
        return function (control) {
            if (!words)
                return null;
            var invalidWords = words
                .map(function (w) { return control.value.includes(w) ? w : null; })
                .filter(function (w) { return w != null; });
            return invalidWords && invalidWords.length > 0
                ? { 'restrictedWords': invalidWords.join(', ') }
                : null;
        };
    }
    exports_4("restrictedWords", restrictedWords);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("app/events/shared/index", ["app/events/shared/events.model", "app/events/shared/events.service", "app/events/shared/restricted-words.validator"], function (exports_5, context_5) {
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
            function (events_service_1_1) {
                exportStar_1(events_service_1_1);
            },
            function (restricted_words_validator_1_1) {
                exportStar_1(restricted_words_validator_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("app/main-sidebar/main-sidebar.component", ["@angular/core"], function (exports_6, context_6) {
    "use strict";
    var core_3, MainSidebarComponent;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
            }
        ],
        execute: function () {
            MainSidebarComponent = /** @class */ (function () {
                function MainSidebarComponent(eventService, route) {
                    this.eventService = eventService;
                    this.route = route;
                    this.searchTerm = "";
                }
                MainSidebarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.data.forEach(function (data) {
                        _this.event = data['event'];
                    });
                };
                MainSidebarComponent.prototype.searchSessions = function (searchTerm) {
                    var _this = this;
                    this.eventService.searchSessions(searchTerm).subscribe(function (sessions) {
                        _this.foundSessions = sessions;
                        console.log(_this.foundSessions);
                    });
                };
                MainSidebarComponent = __decorate([
                    core_3.Component({
                        selector: 'app-main-sidebar',
                        templateUrl: './main-sidebar.component.html',
                        styleUrls: ['./main-sidebar.component.scss']
                    })
                ], MainSidebarComponent);
                return MainSidebarComponent;
            }());
            exports_6("MainSidebarComponent", MainSidebarComponent);
        }
    };
});
System.register("app/functions/functions.component", ["@angular/core"], function (exports_7, context_7) {
    "use strict";
    var core_4, FunctionsComponent;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (core_4_1) {
                core_4 = core_4_1;
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
                    core_4.Component({
                        selector: 'app-functions',
                        templateUrl: './functions.component.html',
                        styleUrls: ['./functions.component.scss']
                    })
                ], FunctionsComponent);
                return FunctionsComponent;
            }());
            exports_7("FunctionsComponent", FunctionsComponent);
        }
    };
});
System.register("app/events/events.component", ["@angular/core"], function (exports_8, context_8) {
    "use strict";
    var core_5, EventsComponent;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [
            function (core_5_1) {
                core_5 = core_5_1;
            }
        ],
        execute: function () {
            EventsComponent = /** @class */ (function () {
                function EventsComponent(eventsService, route) {
                    this.eventsService = eventsService;
                    this.route = route;
                    this.searchTerm = "";
                }
                EventsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.eventsService.getEvents().subscribe(function (res) {
                        _this.events = res;
                    });
                };
                EventsComponent = __decorate([
                    core_5.Component({
                        selector: 'app-events',
                        templateUrl: './events.component.html',
                        styleUrls: ['./events.component.scss']
                    })
                ], EventsComponent);
                return EventsComponent;
            }());
            exports_8("EventsComponent", EventsComponent);
        }
    };
});
System.register("app/events/event-details/event-details.component", ["@angular/core"], function (exports_9, context_9) {
    "use strict";
    var core_6, EventDetailsComponent;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (core_6_1) {
                core_6 = core_6_1;
            }
        ],
        execute: function () {
            EventDetailsComponent = /** @class */ (function () {
                function EventDetailsComponent(eventService, route) {
                    this.eventService = eventService;
                    this.route = route;
                }
                EventDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        _this.eventService.getEvent(+params['id']).subscribe(function (event) {
                            _this.event = event;
                            _this.addMode = false;
                        });
                    });
                };
                EventDetailsComponent.prototype.addSession = function () {
                    this.addMode = true;
                };
                EventDetailsComponent.prototype.saveNewSession = function (session) {
                    var nextId = Math.max.apply(null, this.event.sessions.map(function (s) { return s.id; }));
                    session.id = nextId + 1;
                    this.event.sessions.push(session);
                    this.eventService.saveEvent(this.event).subscribe();
                    this.addMode = false;
                };
                EventDetailsComponent.prototype.cancelAddSession = function () {
                    this.addMode = false;
                };
                EventDetailsComponent = __decorate([
                    core_6.Component({
                        selector: 'app-event-details',
                        templateUrl: './event-details.component.html',
                        styleUrls: ['./event-details.component.scss']
                    })
                ], EventDetailsComponent);
                return EventDetailsComponent;
            }());
            exports_9("EventDetailsComponent", EventDetailsComponent);
        }
    };
});
System.register("app/events/create-event.component", ["@angular/core"], function (exports_10, context_10) {
    "use strict";
    var core_7, CreateEventComponent;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (core_7_1) {
                core_7 = core_7_1;
            }
        ],
        execute: function () {
            CreateEventComponent = /** @class */ (function () {
                function CreateEventComponent(router, eventsService) {
                    this.router = router;
                    this.eventsService = eventsService;
                    this.isDirty = true;
                }
                CreateEventComponent.prototype.saveEvent = function (formValues) {
                    var _this = this;
                    this.eventsService.saveEvent(formValues).subscribe(function () {
                        _this.isDirty = false;
                        _this.router.navigate(['/events']);
                    });
                };
                CreateEventComponent.prototype.cancel = function () {
                    this.router.navigate(['/events']);
                };
                CreateEventComponent = __decorate([
                    core_7.Component({
                        selector: 'app-create-event',
                        templateUrl: './create-event.component.html',
                        styleUrls: ['./create-event.component.scss']
                    })
                ], CreateEventComponent);
                return CreateEventComponent;
            }());
            exports_10("CreateEventComponent", CreateEventComponent);
        }
    };
});
System.register("app/user/user.model", [], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("app/user/auth.service", ["@angular/core", "@angular/common/http", "rxjs/operators", "rxjs"], function (exports_12, context_12) {
    "use strict";
    var core_8, http_2, operators_2, rxjs_2, AuthService;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (operators_2_1) {
                operators_2 = operators_2_1;
            },
            function (rxjs_2_1) {
                rxjs_2 = rxjs_2_1;
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
                    var options = { headers: new http_2.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post('/api/login', loginInfo, options)
                        .pipe(operators_2.tap(function (data) {
                        _this.currentUser = data['user'];
                    }))
                        .pipe(operators_2.catchError(function (err) {
                        return rxjs_2.of(false);
                    }));
                };
                AuthService.prototype.isAuthenticated = function () {
                    return !!this.currentUser;
                };
                AuthService.prototype.checkAuthenticationStatus = function () {
                    var _this = this;
                    this.http.get('/api/currentIdentity')
                        .pipe(operators_2.tap(function (data) {
                        if (data instanceof Object) {
                            _this.currentUser = data;
                        }
                    }))
                        .subscribe();
                };
                AuthService.prototype.updateCurrentUser = function (firstName, lastName) {
                    this.currentUser.firstName = firstName;
                    this.currentUser.lastName = lastName;
                    var options = { headers: new http_2.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.put("/api/users/" + this.currentUser.id, this.currentUser, options);
                };
                AuthService.prototype.logout = function () {
                    this.currentUser = undefined;
                    var options = { headers: new http_2.HttpHeaders({ 'Content-Type': 'application/json' }) };
                    return this.http.post('/api/logout', {}, options);
                };
                AuthService = __decorate([
                    core_8.Injectable()
                ], AuthService);
                return AuthService;
            }());
            exports_12("AuthService", AuthService);
        }
    };
});
System.register("app/user/profile.component", ["@angular/core", "@angular/forms"], function (exports_13, context_13) {
    "use strict";
    var core_9, forms_1, ProfileComponent;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (core_9_1) {
                core_9 = core_9_1;
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
                    core_9.Component({
                        selector: 'app-profile',
                        templateUrl: './profile.component.html',
                        styleUrls: ['./profile.component.scss']
                    })
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_13("ProfileComponent", ProfileComponent);
        }
    };
});
System.register("app/user/login.component", ["@angular/core"], function (exports_14, context_14) {
    "use strict";
    var core_10, LoginComponent;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [
            function (core_10_1) {
                core_10 = core_10_1;
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
                            _this.router.navigate(['events']);
                        }
                    });
                };
                LoginComponent.prototype.cancel = function () {
                    this.router.navigate(['events']);
                };
                LoginComponent = __decorate([
                    core_10.Component({
                        templateUrl: './login.component.html',
                        styleUrls: ['./login.component.scss']
                    })
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_14("LoginComponent", LoginComponent);
        }
    };
});
System.register("app/dashboard/dashboard.component", ["@angular/core", "@angular/common"], function (exports_15, context_15) {
    "use strict";
    var core_11, common_1, DashboardComponent;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }
        ],
        execute: function () {
            DashboardComponent = /** @class */ (function () {
                function DashboardComponent(auth) {
                    var _this = this;
                    this.auth = auth;
                    this.date = new Date();
                    setInterval(function () {
                        _this.today = common_1.formatDate(_this.date, 'dd-MM-yyyy hh:mm:ss a', 'en-US');
                    }, 1);
                }
                DashboardComponent.prototype.ngOnInit = function () {
                };
                DashboardComponent = __decorate([
                    core_11.Component({
                        selector: 'app-dashboard',
                        templateUrl: './dashboard.component.html',
                        styleUrls: ['./dashboard.component.scss']
                    })
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_15("DashboardComponent", DashboardComponent);
        }
    };
});
System.register("app/events/events-resolver.service", ["@angular/core"], function (exports_16, context_16) {
    "use strict";
    var core_12, EventsResolver;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [
            function (core_12_1) {
                core_12 = core_12_1;
            }
        ],
        execute: function () {
            EventsResolver = /** @class */ (function () {
                function EventsResolver(eventsService) {
                    this.eventsService = eventsService;
                }
                EventsResolver.prototype.resolve = function () {
                    return this.eventsService.getEvents();
                };
                EventsResolver = __decorate([
                    core_12.Injectable()
                ], EventsResolver);
                return EventsResolver;
            }());
            exports_16("EventsResolver", EventsResolver);
        }
    };
});
System.register("app/events/event-resolver.service", ["@angular/core"], function (exports_17, context_17) {
    "use strict";
    var core_13, EventResolver;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [
            function (core_13_1) {
                core_13 = core_13_1;
            }
        ],
        execute: function () {
            EventResolver = /** @class */ (function () {
                function EventResolver(eventsService) {
                    this.eventsService = eventsService;
                }
                EventResolver.prototype.resolve = function (route) {
                    return this.eventsService.getEvent(route.params['id']);
                };
                EventResolver = __decorate([
                    core_13.Injectable()
                ], EventResolver);
                return EventResolver;
            }());
            exports_17("EventResolver", EventResolver);
        }
    };
});
System.register("app/app-routing.module", ["app/main/main.component", "app/main-sidebar/main-sidebar.component", "app/functions/functions.component", "app/events/events.component", "app/events/event-details/event-details.component", "app/events/create-event.component", "app/user/profile.component", "app/user/login.component", "app/dashboard/dashboard.component", "app/events/events-resolver.service", "app/events/event-resolver.service"], function (exports_18, context_18) {
    "use strict";
    var main_component_1, main_sidebar_component_1, functions_component_1, events_component_1, event_details_component_1, create_event_component_1, profile_component_1, login_component_1, dashboard_component_1, events_resolver_service_1, event_resolver_service_1, routes, routingComponents;
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (main_sidebar_component_1_1) {
                main_sidebar_component_1 = main_sidebar_component_1_1;
            },
            function (functions_component_1_1) {
                functions_component_1 = functions_component_1_1;
            },
            function (events_component_1_1) {
                events_component_1 = events_component_1_1;
            },
            function (event_details_component_1_1) {
                event_details_component_1 = event_details_component_1_1;
            },
            function (create_event_component_1_1) {
                create_event_component_1 = create_event_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (events_resolver_service_1_1) {
                events_resolver_service_1 = events_resolver_service_1_1;
            },
            function (event_resolver_service_1_1) {
                event_resolver_service_1 = event_resolver_service_1_1;
            }
        ],
        execute: function () {
            exports_18("routes", routes = [
                { path: 'main', component: main_component_1.MainComponent },
                { path: 'functions', component: functions_component_1.FunctionsComponent },
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                { path: 'events/create-event', component: create_event_component_1.CreateEventComponent },
                { path: 'events/:id', component: event_details_component_1.EventDetailsComponent, resolve: [event_resolver_service_1.EventResolver] },
                { path: 'events', component: events_component_1.EventsComponent, resolve: { EventsResolver: events_resolver_service_1.EventsResolver } },
                //() => import('src/app/auth/auth.module').then(m => m.AuthModule)
                //'/src/app/user/user.module#UserModule'
                { path: 'user', loadChildren: function () { return context_18["import"]('src/app/user/user.module').then(function (m) { return m.UserModule; }); } },
                // Default routes
                { path: '', redirectTo: '/main', pathMatch: 'full' },
                { path: '**', redirectTo: '/main', pathMatch: 'full' },
            ]);
            exports_18("routingComponents", routingComponents = [
                main_component_1.MainComponent,
                main_sidebar_component_1.MainSidebarComponent,
                //Function Components
                functions_component_1.FunctionsComponent,
                // Events Components
                events_component_1.EventsComponent,
                event_details_component_1.EventDetailsComponent,
                create_event_component_1.CreateEventComponent,
                // User Components
                profile_component_1.ProfileComponent,
                login_component_1.LoginComponent,
            ]);
        }
    };
});
System.register("app/app.component", ["@angular/core"], function (exports_19, context_19) {
    "use strict";
    var core_14, AppComponent;
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [
            function (core_14_1) {
                core_14 = core_14_1;
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
                    core_14.Component({
                        selector: 'app-root',
                        templateUrl: './app.component.html',
                        styleUrls: ['./app.component.scss']
                    })
                ], AppComponent);
                return AppComponent;
            }());
            exports_19("AppComponent", AppComponent);
        }
    };
});
System.register("app/events/event.component", ["@angular/core"], function (exports_20, context_20) {
    "use strict";
    var core_15, EventComponent;
    var __moduleName = context_20 && context_20.id;
    return {
        setters: [
            function (core_15_1) {
                core_15 = core_15_1;
            }
        ],
        execute: function () {
            EventComponent = /** @class */ (function () {
                function EventComponent() {
                    this.eventDetailClick = new core_15.EventEmitter();
                }
                EventComponent.prototype.detailClick = function () {
                    this.eventDetailClick.emit(this.event.name);
                };
                EventComponent.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_15.Input()
                ], EventComponent.prototype, "event");
                __decorate([
                    core_15.Output()
                ], EventComponent.prototype, "eventDetailClick");
                EventComponent = __decorate([
                    core_15.Component({
                        selector: 'app-event',
                        templateUrl: './event.component.html',
                        styleUrls: ['./event.component.scss']
                    })
                ], EventComponent);
                return EventComponent;
            }());
            exports_20("EventComponent", EventComponent);
        }
    };
});
System.register("app/events/event-details/sessions.component", ["@angular/core"], function (exports_21, context_21) {
    "use strict";
    var core_16, SessionsComponent;
    var __moduleName = context_21 && context_21.id;
    return {
        setters: [
            function (core_16_1) {
                core_16 = core_16_1;
            }
        ],
        execute: function () {
            SessionsComponent = /** @class */ (function () {
                function SessionsComponent() {
                }
                SessionsComponent.prototype.reset = function ($event) {
                };
                __decorate([
                    core_16.Input()
                ], SessionsComponent.prototype, "sessions");
                SessionsComponent = __decorate([
                    core_16.Component({
                        selector: 'app-sessions',
                        templateUrl: './sessions.component.html',
                        styleUrls: ['./sessions.component.scss']
                    })
                ], SessionsComponent);
                return SessionsComponent;
            }());
            exports_21("SessionsComponent", SessionsComponent);
        }
    };
});
System.register("app/events/event-details/create-session.component", ["@angular/core", "@angular/forms", "app/events/shared/index"], function (exports_22, context_22) {
    "use strict";
    var core_17, forms_2, index_1, CreateSessionComponent;
    var __moduleName = context_22 && context_22.id;
    return {
        setters: [
            function (core_17_1) {
                core_17 = core_17_1;
            },
            function (forms_2_1) {
                forms_2 = forms_2_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            CreateSessionComponent = /** @class */ (function () {
                function CreateSessionComponent() {
                    this.saveNewSession = new core_17.EventEmitter();
                    this.cancelAddSession = new core_17.EventEmitter();
                }
                CreateSessionComponent.prototype.ngOnInit = function () {
                    this.name = new forms_2.FormControl('', forms_2.Validators.required);
                    this.presenter = new forms_2.FormControl('', forms_2.Validators.required);
                    this.duration = new forms_2.FormControl('', forms_2.Validators.required);
                    this.level = new forms_2.FormControl('', forms_2.Validators.required);
                    this.abstract = new forms_2.FormControl('', [forms_2.Validators.required, forms_2.Validators.maxLength(400), index_1.restrictedWords(['foo', 'bar'])]);
                    this.newSessionForm = new forms_2.FormGroup({
                        name: this.name,
                        presenter: this.presenter,
                        duration: this.duration,
                        level: this.level,
                        abstract: this.abstract
                    });
                };
                CreateSessionComponent.prototype.saveSession = function (formValues) {
                    var session = {
                        id: undefined,
                        name: formValues.name,
                        duration: +formValues.duration,
                        level: formValues.level,
                        presenter: formValues.presenter,
                        abstract: formValues.abstract,
                        voters: []
                    };
                    this.saveNewSession.emit(session);
                };
                CreateSessionComponent.prototype.cancel = function () {
                    this.cancelAddSession.emit();
                };
                __decorate([
                    core_17.Output()
                ], CreateSessionComponent.prototype, "saveNewSession");
                __decorate([
                    core_17.Output()
                ], CreateSessionComponent.prototype, "cancelAddSession");
                CreateSessionComponent = __decorate([
                    core_17.Component({
                        selector: 'app-create-session',
                        templateUrl: './create-session.component.html',
                        styleUrls: ['./create-session.component.scss']
                    })
                ], CreateSessionComponent);
                return CreateSessionComponent;
            }());
            exports_22("CreateSessionComponent", CreateSessionComponent);
        }
    };
});
System.register("app/common/jQuery.service", ["@angular/core"], function (exports_23, context_23) {
    "use strict";
    var core_18, JQ_TOKEN;
    var __moduleName = context_23 && context_23.id;
    return {
        setters: [
            function (core_18_1) {
                core_18 = core_18_1;
            }
        ],
        execute: function () {
            exports_23("JQ_TOKEN", JQ_TOKEN = new core_18.InjectionToken('jQuery'));
        }
    };
});
System.register("app/common/simple-modal.component", ["@angular/core", "app/common/jQuery.service"], function (exports_24, context_24) {
    "use strict";
    var core_19, jQuery_service_1, SimpleModalComponent;
    var __moduleName = context_24 && context_24.id;
    return {
        setters: [
            function (core_19_1) {
                core_19 = core_19_1;
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
                    core_19.Input()
                ], SimpleModalComponent.prototype, "title");
                __decorate([
                    core_19.Input()
                ], SimpleModalComponent.prototype, "elementId");
                __decorate([
                    core_19.Input()
                ], SimpleModalComponent.prototype, "closeOnBodyClick");
                __decorate([
                    core_19.ViewChild('modalcontainer')
                ], SimpleModalComponent.prototype, "containerEl");
                SimpleModalComponent = __decorate([
                    core_19.Component({
                        selector: 'app-simple-modal',
                        templateUrl: './simple-modal.component.html',
                        styleUrls: ['./simple-modal.component.scss']
                    }),
                    __param(0, core_19.Inject(jQuery_service_1.JQ_TOKEN))
                ], SimpleModalComponent);
                return SimpleModalComponent;
            }());
            exports_24("SimpleModalComponent", SimpleModalComponent);
        }
    };
});
System.register("app/common/filter.pipe", ["@angular/core"], function (exports_25, context_25) {
    "use strict";
    var core_20, FilterPipe;
    var __moduleName = context_25 && context_25.id;
    return {
        setters: [
            function (core_20_1) {
                core_20 = core_20_1;
            }
        ],
        execute: function () {
            FilterPipe = /** @class */ (function () {
                function FilterPipe() {
                }
                FilterPipe.prototype.transform = function (list, filters) {
                    var keys = Object.keys(filters).filter(function (key) { return filters[key]; });
                    var filterObject = function (object) { return keys.every(function (key) { return object[key] === filters[key]; }); };
                    console.log(filterObject);
                    return keys.length ? list.filter(filterObject) : list;
                };
                FilterPipe = __decorate([
                    core_20.Pipe({
                        name: 'filter'
                    })
                ], FilterPipe);
                return FilterPipe;
            }());
            exports_25("FilterPipe", FilterPipe);
        }
    };
});
System.register("app/common/modal-trigger.directive", ["@angular/core", "app/common/jQuery.service"], function (exports_26, context_26) {
    "use strict";
    var core_21, jQuery_service_2, ModalTriggerDirective;
    var __moduleName = context_26 && context_26.id;
    return {
        setters: [
            function (core_21_1) {
                core_21 = core_21_1;
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
                    core_21.Input('modal-trigger')
                ], ModalTriggerDirective.prototype, "modalId");
                ModalTriggerDirective = __decorate([
                    core_21.Directive({
                        selector: '[appModalTrigger]'
                    }),
                    __param(1, core_21.Inject(jQuery_service_2.JQ_TOKEN))
                ], ModalTriggerDirective);
                return ModalTriggerDirective;
            }());
            exports_26("ModalTriggerDirective", ModalTriggerDirective);
        }
    };
});
System.register("app/app.module", ["@angular/platform-browser", "@angular/core", "@angular/forms", "@angular/common/http", "app/app-routing.module", "@angular/router", "app/app.component", "app/main/main.component", "app/main-sidebar/main-sidebar.component", "app/functions/functions.component", "app/events/events.component", "app/events/event.component", "app/events/event-details/event-details.component", "app/events/create-event.component", "app/events/event-details/sessions.component", "app/events/event-details/create-session.component", "app/dashboard/dashboard.component", "app/common/simple-modal.component", "app/events/shared/events.service", "app/user/auth.service", "app/common/jQuery.service", "app/events/events-resolver.service", "app/events/event-resolver.service", "app/common/filter.pipe", "app/common/modal-trigger.directive"], function (exports_27, context_27) {
    "use strict";
    var platform_browser_1, core_22, forms_3, http_3, app_routing_module_1, router_1, app_component_1, main_component_2, main_sidebar_component_2, functions_component_2, events_component_2, event_component_1, event_details_component_2, create_event_component_2, sessions_component_1, create_session_component_1, dashboard_component_2, simple_modal_component_1, events_service_2, auth_service_1, jQuery_service_3, jQuery, events_resolver_service_2, event_resolver_service_2, filter_pipe_1, modal_trigger_directive_1, AppModule;
    var __moduleName = context_27 && context_27.id;
    return {
        setters: [
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_22_1) {
                core_22 = core_22_1;
            },
            function (forms_3_1) {
                forms_3 = forms_3_1;
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
            function (main_sidebar_component_2_1) {
                main_sidebar_component_2 = main_sidebar_component_2_1;
            },
            function (functions_component_2_1) {
                functions_component_2 = functions_component_2_1;
            },
            function (events_component_2_1) {
                events_component_2 = events_component_2_1;
            },
            function (event_component_1_1) {
                event_component_1 = event_component_1_1;
            },
            function (event_details_component_2_1) {
                event_details_component_2 = event_details_component_2_1;
            },
            function (create_event_component_2_1) {
                create_event_component_2 = create_event_component_2_1;
            },
            function (sessions_component_1_1) {
                sessions_component_1 = sessions_component_1_1;
            },
            function (create_session_component_1_1) {
                create_session_component_1 = create_session_component_1_1;
            },
            function (dashboard_component_2_1) {
                dashboard_component_2 = dashboard_component_2_1;
            },
            function (simple_modal_component_1_1) {
                simple_modal_component_1 = simple_modal_component_1_1;
            },
            function (events_service_2_1) {
                events_service_2 = events_service_2_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (jQuery_service_3_1) {
                jQuery_service_3 = jQuery_service_3_1;
            },
            function (events_resolver_service_2_1) {
                events_resolver_service_2 = events_resolver_service_2_1;
            },
            function (event_resolver_service_2_1) {
                event_resolver_service_2 = event_resolver_service_2_1;
            },
            function (filter_pipe_1_1) {
                filter_pipe_1 = filter_pipe_1_1;
            },
            function (modal_trigger_directive_1_1) {
                modal_trigger_directive_1 = modal_trigger_directive_1_1;
            }
        ],
        execute: function () {
            jQuery = window['$'];
            AppModule = /** @class */ (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_22.NgModule({
                        declarations: [
                            app_component_1.AppComponent,
                            main_component_2.MainComponent,
                            main_sidebar_component_2.MainSidebarComponent,
                            //Function Components
                            functions_component_2.FunctionsComponent,
                            // Events Components
                            events_component_2.EventsComponent,
                            event_component_1.EventComponent,
                            event_details_component_2.EventDetailsComponent,
                            create_event_component_2.CreateEventComponent,
                            sessions_component_1.SessionsComponent,
                            create_session_component_1.CreateSessionComponent,
                            dashboard_component_2.DashboardComponent,
                            simple_modal_component_1.SimpleModalComponent,
                            // Pipes
                            filter_pipe_1.FilterPipe,
                            // Directives
                            modal_trigger_directive_1.ModalTriggerDirective,
                        ],
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_3.FormsModule,
                            forms_3.ReactiveFormsModule,
                            router_1.RouterModule.forRoot(app_routing_module_1.routes),
                            http_3.HttpClientModule
                        ],
                        providers: [
                            events_service_2.EventsService,
                            auth_service_1.AuthService,
                            events_resolver_service_2.EventsResolver,
                            event_resolver_service_2.EventResolver,
                            { provide: jQuery_service_3.JQ_TOKEN, useValue: jQuery },
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_27("AppModule", AppModule);
        }
    };
});
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
System.register("environments/environment", [], function (exports_28, context_28) {
    "use strict";
    var environment;
    var __moduleName = context_28 && context_28.id;
    return {
        setters: [],
        execute: function () {// This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            exports_28("environment", environment = {
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
System.register("main", ["@angular/core", "@angular/platform-browser-dynamic", "app/app.module", "environments/environment"], function (exports_29, context_29) {
    "use strict";
    var core_23, platform_browser_dynamic_1, app_module_1, environment_1;
    var __moduleName = context_29 && context_29.id;
    return {
        setters: [
            function (core_23_1) {
                core_23 = core_23_1;
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
                core_23.enableProdMode();
            }
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)["catch"](function (err) { return console.error(err); });
        }
    };
});
