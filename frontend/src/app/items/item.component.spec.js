var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("models/items.model", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("items/item.component", ["@angular/core"], function (exports_2, context_2) {
    "use strict";
    var core_1, ItemComponent;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ItemComponent = /** @class */ (function () {
                function ItemComponent() {
                    this.itemDetailClick = new core_1.EventEmitter();
                }
                ItemComponent.prototype.detailClick = function () {
                    this.itemDetailClick.emit(this.item.name);
                };
                ItemComponent.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_1.Input()
                ], ItemComponent.prototype, "item");
                __decorate([
                    core_1.Output()
                ], ItemComponent.prototype, "itemDetailClick");
                ItemComponent = __decorate([
                    core_1.Component({
                        selector: 'app-item',
                        templateUrl: './item.component.html',
                        styleUrls: ['./item.component.scss']
                    })
                ], ItemComponent);
                return ItemComponent;
            }());
            exports_2("ItemComponent", ItemComponent);
        }
    };
});
System.register("items/item.component.spec", ["@angular/core/testing", "items/item.component"], function (exports_3, context_3) {
    "use strict";
    var testing_1, item_component_1;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (item_component_1_1) {
                item_component_1 = item_component_1_1;
            }
        ],
        execute: function () {
            describe('ItemComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [item_component_1.ItemComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(item_component_1.ItemComponent);
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
