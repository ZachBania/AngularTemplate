var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("shared/events.model", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("shared/events.service", ["@angular/core", "rxjs", "@angular/common/http", "rxjs/operators"], function (exports_2, context_2) {
    "use strict";
    var core_1, rxjs_1, http_1, operators_1, EventsService, EVENTS;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
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
                    return this.http.get('/api/events/search?search=' + searchTerm)
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
                    core_1.Injectable()
                ], EventsService);
                return EventsService;
            }());
            exports_2("EventsService", EventsService);
            EVENTS = [
                {
                    id: 1,
                    name: 'Angular Connect',
                    description: 'Angular Connect Description',
                    date: '9/26/2036',
                    time: '10:00 am',
                    price: 599.99,
                    imageUrl: '/assets/images/angularconnect-shield.png',
                    location: {
                        address: '1057 DT',
                        city: 'London',
                        country: 'England'
                    },
                    sessions: [
                        {
                            id: 1,
                            name: "Using Angular 4 Pipes",
                            presenter: "Peter Bacon Darwin",
                            duration: 1,
                            level: "Intermediate",
                            abstract: "Learn all about the new pipes in Angular 4, both \n        how to write them, and how to get the new AI CLI to write \n        them for you. Given by the famous PBD, president of Angular \n        University (formerly Oxford University)",
                            voters: ['bradgreen', 'igorminar', 'martinfowler']
                        },
                        {
                            id: 2,
                            name: "Getting the most out of your dev team",
                            presenter: "Jeff Cross",
                            duration: 1,
                            level: "Intermediate",
                            abstract: "We all know that our dev teams work hard, but with \n        the right management they can be even more productive, without \n        overworking them. In this session I'll show you how to get the \n        best results from the talent you already have on staff.",
                            voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
                        },
                        {
                            id: 3,
                            name: "Angular 4 Performance Metrics",
                            presenter: "Rob Wormald",
                            duration: 2,
                            level: "Advanced",
                            abstract: "Angular 4 Performance is hot. In this session, we'll see \n        how Angular gets such great performance by preloading data on \n        your users devices before they even hit your site using the \n        new predictive algorithms and thought reading software \n        built into Angular 4.",
                            voters: []
                        },
                        {
                            id: 4,
                            name: "Angular 5 Look Ahead",
                            presenter: "Brad Green",
                            duration: 2,
                            level: "Advanced",
                            abstract: "Even though Angular 5 is still 6 years away, we all want \n        to know all about it so that we can spend endless hours in meetings \n        debating if we should use Angular 4 or not. This talk will look at \n        Angular 6 even though no code has yet been written for it. We'll \n        look at what it might do, and how to convince your manager to \n        hold off on any new apps until it's released",
                            voters: []
                        },
                        {
                            id: 5,
                            name: "Basics of Angular 4",
                            presenter: "John Papa",
                            duration: 2,
                            level: "Beginner",
                            abstract: "It's time to learn the basics of Angular 4. This talk \n        will give you everything you need to know about Angular 4 to \n        get started with it today and be building UI's for your self \n        driving cars and butler-bots in no time.",
                            voters: ['bradgreen', 'igorminar']
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'ng-nl',
                    description: 'ng-nl Description',
                    date: '4/15/2037',
                    time: '9:00 am',
                    price: 950.00,
                    imageUrl: '/assets/images/ng-nl.png',
                    location: {
                        address: 'The NG-NL Convention Center & Scuba Shop',
                        city: 'Amsterdam',
                        country: 'Netherlands'
                    },
                    sessions: [
                        {
                            id: 1,
                            name: "Testing Angular 4 Workshop",
                            presenter: "Pascal Precht & Christoph Bergdorf",
                            duration: 4,
                            level: "Beginner",
                            abstract: "In this 6 hour workshop you will learn not only how to test Angular 4, \n        you will also learn how to make the most of your team's efforts. Other topics\n        will be convincing your manager that testing is a good idea, and using the new\n        protractor tool for end to end testing.",
                            voters: ['bradgreen', 'igorminar']
                        },
                        {
                            id: 2,
                            name: "Angular 4 and Firebase",
                            presenter: "David East",
                            duration: 3,
                            level: "Intermediate",
                            abstract: "In this workshop, David East will show you how to use Angular with the new\n        ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.",
                            voters: ['bradgreen', 'igorminar', 'johnpapa']
                        },
                        {
                            id: 3,
                            name: "Reading the Angular 4 Source",
                            presenter: "Patrick Stapleton",
                            duration: 2,
                            level: "Intermediate",
                            abstract: "Angular 4's source code may be over 25 million lines of code, but it's really \n        a lot easier to read and understand then you may think. Patrick Stapleton will talk\n        about his secretes for keeping up with the changes, and navigating around the code.",
                            voters: ['martinfowler']
                        },
                        {
                            id: 4,
                            name: "Hail to the Lukas",
                            presenter: "Lukas Ruebbelke",
                            duration: 1,
                            level: "Beginner",
                            abstract: "In this session, Lukas will present the \n        secret to being awesome, and how he became the President \n        of the United States through his amazing programming skills, \n        showing how you too can be success with just attitude.",
                            voters: ['bradgreen']
                        },
                    ]
                },
                {
                    id: 3,
                    name: 'ng-conf 2037',
                    description: 'ng-conf 2037 Description',
                    date: '5/4/2037',
                    time: '9:00 am',
                    price: 759.00,
                    imageUrl: '/assets/images/ng-conf.png',
                    location: {
                        address: 'The Palatial America Hotel',
                        city: 'Salt Lake City',
                        country: 'USA'
                    },
                    sessions: [
                        {
                            id: 1,
                            name: "How Elm Powers Angular 4",
                            presenter: "Murphy Randle",
                            duration: 2,
                            level: "Intermediate",
                            abstract: "We all know that Angular is written in Elm, but did you\n        know how the source code is really written? In this exciting look\n        into the internals of Angular 4, we'll see exactly how Elm powers\n        the framework, and what you can do to take advantage of this knowledge.",
                            voters: ['bradgreen', 'martinfowler', 'igorminar']
                        },
                        {
                            id: 2,
                            name: "Angular and React together",
                            presenter: "Jamison Dance",
                            duration: 2,
                            level: "Intermediate",
                            abstract: "React v449.6 has just been released. Let's see how to use \n        this new version with Angular to create even more impressive applications.",
                            voters: ['bradgreen', 'martinfowler']
                        },
                        {
                            id: 3,
                            name: "Redux Woes",
                            presenter: "Rob Wormald",
                            duration: 1,
                            level: "Intermediate",
                            abstract: "Everyone is using Redux for everything from Angular to React to \n        Excel macros, but you're still having trouble grasping it? We'll take a look\n        at how farmers use Redux when harvesting grain as a great introduction to \n        this game changing technology.",
                            voters: ['bradgreen', 'martinfowler', 'johnpapa']
                        },
                        {
                            id: 4,
                            name: "ng-wat again!!",
                            presenter: "Shai Reznik",
                            duration: 1,
                            level: "Beginner",
                            abstract: "Let's take a look at some of the stranger pieces of Angular 4,\n        including neural net nets, Android in Androids, and using pipes with actual pipes.",
                            voters: ['bradgreen', 'martinfowler', 'igorminar', 'johnpapa']
                        },
                        {
                            id: 5,
                            name: "Dressed for Success",
                            presenter: "Ward Bell",
                            duration: 2,
                            level: "Beginner",
                            abstract: "Being a developer in 2037 is about more than just writing bug-free code. \n        You also have to look the part. In this amazing expose, Ward will talk you through\n        how to pick out the right clothes to make your coworkers and boss not only\n        respect you, but also want to be your buddy.",
                            voters: ['bradgreen', 'martinfowler']
                        },
                        {
                            id: 6,
                            name: "These aren't the directives you're looking for",
                            presenter: "John Papa",
                            duration: 2,
                            level: "Intermediate",
                            abstract: "Coinciding with the release of Star Wars Episode 18, this talk will show how\n        to use directives in your Angular 4 development while drawing lessons from the new movie,\n        featuring all your favorite characters like Han Solo's ghost and Darth Jar Jar.",
                            voters: ['bradgreen', 'martinfowler']
                        },
                    ]
                },
                {
                    id: 4,
                    name: 'UN Angular Summit',
                    description: 'UN Angular Summit Description',
                    date: '6/10/2037',
                    time: '8:00 am',
                    price: 800.00,
                    imageUrl: '/assets/images/basic-shield.png',
                    location: {
                        address: 'The UN Angular Center',
                        city: 'New York',
                        country: 'USA'
                    },
                    sessions: [
                        {
                            id: 1,
                            name: "Diversity in Tech",
                            presenter: "Sir Dave Smith",
                            duration: 2,
                            level: "Beginner",
                            abstract: "Yes, we all work with cyborgs and androids and Martians, but \n        we probably don't realize that sometimes our internal biases can make it difficult for\n        these well-designed coworkers to really feel at home coding alongside us. This talk will\n        look at things we can do to recognize our biases and counteract them.",
                            voters: ['bradgreen', 'igorminar']
                        },
                        {
                            id: 2,
                            name: "World Peace and Angular",
                            presenter: "US Secretary of State Zach Galifianakis",
                            duration: 2,
                            level: "Beginner",
                            abstract: "Angular has been used in most of the major peace brokering that has\n        happened in the last decade, but there is still much we can do to remove all\n        war from the world, and Angular will be a key part of that effort.",
                            voters: ['bradgreen', 'igorminar', 'johnpapa']
                        },
                        {
                            id: 3,
                            name: "Using Angular with Androids",
                            presenter: "Dan Wahlin",
                            duration: 3,
                            level: "Advanced",
                            abstract: "Androids may do everything for us now, allowing us to spend all day playing \n        the latest Destiny DLC, but we can still improve the massages they give and the handmade\n        brie they make using Angular 4. This session will show you how.",
                            voters: ['igorminar', 'johnpapa']
                        },
                    ]
                },
                {
                    id: 5,
                    name: 'ng-vegas',
                    description: 'ng-vegas Description',
                    date: '2/10/2037',
                    time: '9:00 am',
                    price: 400.00,
                    imageUrl: '/assets/images/ng-vegas.png',
                    location: {
                        address: 'The Excalibur',
                        city: 'Las Vegas',
                        country: 'USA'
                    },
                    sessions: [
                        {
                            id: 1,
                            name: "Gambling with Angular",
                            presenter: "John Papa",
                            duration: 1,
                            level: "Intermediate",
                            abstract: "No, this talk isn't about slot machines. We all know that \n        Angular is used in most waiter-bots and coke vending machines, but\n        did you know that was also used to write the core engine in the majority\n        of voting machines? This talk will look at how all presidential elections\n        are now determined by Angular code.",
                            voters: ['bradgreen', 'igorminar']
                        },
                        {
                            id: 2,
                            name: "Angular 4 in 60ish Minutes",
                            presenter: "Dan Wahlin",
                            duration: 2,
                            level: "Beginner",
                            abstract: "Get the skinny on Angular 4 for anyone new to this great new technology.\n        Dan Wahlin will show you how you can get started with Angular in 60ish minutes, \n        guaranteed!",
                            voters: ['bradgreen', 'igorminar', 'johnpapa']
                        }
                    ]
                }
            ];
        }
    };
});
System.register("event-resolver.service", ["@angular/core"], function (exports_3, context_3) {
    "use strict";
    var core_2, EventResolver;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
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
                    core_2.Injectable()
                ], EventResolver);
                return EventResolver;
            }());
            exports_3("EventResolver", EventResolver);
        }
    };
});
System.register("event-resolver.service.spec", ["@angular/core/testing", "event-resolver.service"], function (exports_4, context_4) {
    "use strict";
    var testing_1, event_resolver_service_1;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (event_resolver_service_1_1) {
                event_resolver_service_1 = event_resolver_service_1_1;
            }
        ],
        execute: function () {
            describe('EventResolverService', function () {
                var service;
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({});
                    service = testing_1.TestBed.inject(event_resolver_service_1.EventResolverService);
                });
                it('should be created', function () {
                    expect(service).toBeTruthy();
                });
            });
        }
    };
});
