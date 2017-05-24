var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
export var DashboardComponent = (function () {
    function DashboardComponent() {
        var _this = this;
        this.selectedItem = new EventEmitter();
        this.rightClick = new EventEmitter();
        this.dataCopy = new Array();
        this.resizedFlags = new Array();
        this.onDataChange = function (newData) {
            console.log("data has changed");
            _this.dataCopy = newData;
        };
    }
    DashboardComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        console.log("DashboardComponent -> ngOnChanges: changes = ", changes);
        if (changes["config"]) {
            changes["config"].currentValue.items.forEach(function (i) { return _this.resizedFlags.push(false); });
        }
        if (changes["data"]) {
            this.dataCopy = JSON.parse(JSON.stringify(changes["data"].currentValue));
        }
    };
    DashboardComponent.prototype.onGridItemChangeStop = function () {
        console.log("Grid item change stop");
    };
    DashboardComponent.prototype.onResizeAny = function (i) {
        console.log("resized elem: ", i);
        this.resizedFlags[i] = new Boolean(true);
    };
    DashboardComponent.prototype.onItemSelect = function (event, i) {
        var contextmenuEmit = {
            event: event,
            item: i
        };
        console.log("item selected: ", contextmenuEmit);
        this.selectedItem.emit(contextmenuEmit);
    };
    DashboardComponent.prototype.onRightClick = function (event, i) {
        // event.preventDefault();
        // event.stopPropagation();
        var contextmenuEmit = {
            event: event,
            item: i
        };
        console.log("right clicked: ", contextmenuEmit);
        this.rightClick.emit(contextmenuEmit);
    };
    DashboardComponent.prototype.onTooltipOn = function (tooltipConfig) {
        console.log("setting tooltip");
        this.tooltipConfig = tooltipConfig;
    };
    DashboardComponent.prototype.onTooltipOff = function (tooltipConfig) {
        this.tooltipConfig = null;
    };
    DashboardComponent.prototype.onResetData = function (event) {
        this.dataCopy = JSON.parse(JSON.stringify(this.data));
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], DashboardComponent.prototype, "config", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], DashboardComponent.prototype, "data", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], DashboardComponent.prototype, "selectedItem", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], DashboardComponent.prototype, "rightClick", void 0);
    DashboardComponent = __decorate([
        Component({
            selector: 'mm-dashboard',
            // templateUrl: './dashboard.component.html',
            // styleUrls: ['./dashboard.component.css'],
            template: "\n    <div class=\"mm-dashboard-container\">\n      <h2 class=\"mm-dashboard-title\">{{config.title}}</h2>\n      <div class=\"mm-dashboard-grid\" [ngGrid]=\"config.gridConfig\">\n        <div class=\"mm-dashboard-item\" *ngFor=\"let dashItem of config.items; let i = index\" [(ngGridItem)]=\"dashItem.gridConfig\"\n          (onGridItemChangeStop)=\"onGridItemChangeStop($event)\" (onResizeAny)=\"onResizeAny(i)\">\n          <div class=\"mm-widget\" id=\"{{i}}\" (click)=\"onItemSelect($event, i)\" (contextmenu)=\"onRightClick($event, i)\">\n            <div mm-widget [config]=\"dashItem.widgetConfig\" [data]=\"dataCopy\" [resized]=\"resizedFlags[i]\" \n            (dataChange)=\"onDataChange($event)\" (tooltipOn)=\"onTooltipOn($event)\" (tooltipOff)=\"onTooltipOff($event)\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"reset-btn\"><button (click)=\"onResetData($event)\">reset</button><div>\n      <mm-baloon *ngIf=\"tooltipConfig\" [config]=\"tooltipConfig\"></mm-baloon>\n    </div>\n  ",
            styles: [
                "\n      .mm-dashboard-title {\n          margin-top: 0px;\n      }\n\n      .mm-dashboard-item {\n          border: 1px solid #efefef;\n          display: flex;\n          flex-flow: column;\n          box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.5);\n      }\n\n      .mm-dashboard-item-title {\n          padding-left: 10px;\n          border-bottom: 1px dashed #cccccc; \n      }\n\n      .mm-widget {\n        width: 100%;\n        height: 100%;\n      }\n\n      .mm-line {\n            fill: none;\n            /*stroke: steelblue;*/\n            stroke-width: 1.5px;\n        }\n\n        div.tooltip {\n            position: absolute;\n            text-align: center;\n            width: 60px;\n            height: 28px;\n            padding: 2px;\n            font: 12px sans-serif;\n            background: lightsteelblue;\n            border: 0px;\n            border-radius: 8px;\n            pointer-events: none;\n        }\n\n    "
            ],
            encapsulation: ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard/src/dashboard.component.js.map