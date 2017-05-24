var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { BaloonComponent } from './components/baloon.component';
import { NgGridModule } from 'angular2-grid';
import { WidgetFactoryDirective } from './directives';
import { Widgets, WIDGET_SERVICE, NgGridConfigFactory, BaseDashboardConfigFactory } from './services';
export var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule.forRoot = function (widgets) {
        return {
            ngModule: DashboardModule,
            providers: [
                { provide: WIDGET_SERVICE, useValue: new Widgets(widgets) },
                { provide: NgGridConfigFactory, useClass: NgGridConfigFactory },
                { provide: BaseDashboardConfigFactory, useClass: BaseDashboardConfigFactory }
            ]
        };
    };
    DashboardModule.forChild = function () {
        // widget servce will need to be provided in the root module
        return {
            ngModule: DashboardModule,
            providers: [
                // { provide: WIDGET_SERVICE, useValue: new Widgets(widgets) }
                { provide: NgGridConfigFactory, useClass: NgGridConfigFactory },
                { provide: BaseDashboardConfigFactory, useClass: BaseDashboardConfigFactory }
            ]
        };
    };
    DashboardModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                NgGridModule
            ],
            declarations: [DashboardComponent, WidgetFactoryDirective, BaloonComponent],
            exports: [DashboardComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard/src/dashboard.module.js.map