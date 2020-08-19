var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("keyword-filter.pipe", ["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var core_1, KeywordFilterPipe;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            KeywordFilterPipe = /** @class */ (function () {
                function KeywordFilterPipe() {
                }
                KeywordFilterPipe.prototype.transform = function (value, args) {
                    if (!value)
                        return null;
                    if (!args)
                        return value;
                    args = args.toLowerCase();
                    return value.filter(function (item) {
                        return JSON.stringify(item).toLowerCase().includes(args);
                    });
                };
                KeywordFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'keyword-filter'
                    })
                ], KeywordFilterPipe);
                return KeywordFilterPipe;
            }());
            exports_1("KeywordFilterPipe", KeywordFilterPipe);
        }
    };
});
System.register("keyword-filter.pipe.spec", ["keyword-filter.pipe"], function (exports_2, context_2) {
    "use strict";
    var keyword_filter_pipe_1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (keyword_filter_pipe_1_1) {
                keyword_filter_pipe_1 = keyword_filter_pipe_1_1;
            }
        ],
        execute: function () {
            describe('KeywordFilterPipe', function () {
                it('create an instance', function () {
                    var pipe = new keyword_filter_pipe_1.KeywordFilterPipe();
                    expect(pipe).toBeTruthy();
                });
            });
        }
    };
});
