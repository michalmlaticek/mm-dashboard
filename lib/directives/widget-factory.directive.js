var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Directive, ViewContainerRef, ComponentFactoryResolver, Input, Inject, Output, EventEmitter } from '@angular/core';
import { Widgets, WIDGET_SERVICE } from '../services';
export var WidgetFactoryDirective = (function () {
    function WidgetFactoryDirective(widgets, vcRef, resolver) {
        this.widgets = widgets;
        this.vcRef = vcRef;
        this.resolver = resolver;
        this.dataChange = new EventEmitter();
        this.tooltipOn = new EventEmitter();
        this.tooltipOff = new EventEmitter();
        this.init = false;
    }
    WidgetFactoryDirective.prototype.ngOnChanges = function (changes) {
        console.log("WidgetFactoryDirective -> ngOnChanges", changes);
        if (!this.config || !this.widgets.getComponentById(this.config.widgetId)) {
            console.log("WidgetFactoryDirective -> ngOnChanges - returning without action");
            console.log("config: ", this.config);
            console.log("widget: ", this.widgets.getComponentById(this.config.widgetId));
            return;
        }
        if (!this.init) {
            this.ngOnDestroy();
            this.create(changes);
        }
        else {
            if (changes["config"]) {
                this.componentRef.instance.config = changes["config"].currentValue;
                this.resized = true;
            }
            if (changes["data"]) {
                this.componentRef.instance.data = changes["data"].currentValue;
                this.componentRef.instance.formatData();
                this.resized = true;
            }
            if (changes["resized"]) {
                this.componentRef.instance.resized = changes["resized"].currentValue;
                this.resized = new Boolean(false);
            }
            this.componentRef.instance.ngOnChanges(changes);
        }
    };
    WidgetFactoryDirective.prototype.ngOnDestroy = function () {
        console.log("WidgetFactoryDirective -> ngOnDestroy");
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    };
    WidgetFactoryDirective.prototype.create = function (changes) {
        var _this = this;
        console.log("WidgetFactoryDirective -> create");
        var factory = this.resolver.resolveComponentFactory(this.widgets.getComponentById(this.config.widgetId));
        var compRef = this.vcRef.createComponent(factory);
        console.log("WidgetFactoryDirective -> setInputAndListen: ", compRef);
        console.log("WidgetFactoryDirective -> setInputAndListen: ", this.config, this.data);
        compRef.instance.config = this.config;
        compRef.instance.data = this.data;
        compRef.instance.dataChange.subscribe(function (data) {
            console.log("WidgetFactoryDirective -> setInputAndListen: emitting changed data = ", data);
            _this.dataChange.emit(data);
        });
        compRef.instance.tooltipOn.subscribe(function (tooltipConfig) {
            console.log("WidgetFactoryDirective -> setInputAndListen: emitting tooltip config [on] = ", tooltipConfig);
            _this.tooltipOn.emit(tooltipConfig);
        });
        compRef.instance.tooltipOff.subscribe(function (tooltipConfig) {
            console.log("WidgetFactoryDirective -> setInputAndListen: emitting tooltip config [off] = ", tooltipConfig);
            _this.tooltipOff.emit(tooltipConfig);
        });
        compRef.instance.ngOnChanges(changes);
        this.componentRef = compRef;
        this.init = true;
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], WidgetFactoryDirective.prototype, "config", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], WidgetFactoryDirective.prototype, "data", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], WidgetFactoryDirective.prototype, "resized", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], WidgetFactoryDirective.prototype, "dataChange", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], WidgetFactoryDirective.prototype, "tooltipOn", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], WidgetFactoryDirective.prototype, "tooltipOff", void 0);
    WidgetFactoryDirective = __decorate([
        Directive({
            selector: '[mm-widget]'
        }),
        __param(0, Inject(WIDGET_SERVICE)), 
        __metadata('design:paramtypes', [Widgets, ViewContainerRef, ComponentFactoryResolver])
    ], WidgetFactoryDirective);
    return WidgetFactoryDirective;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard/src/directives/widget-factory.directive.js.map