var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
export var BaloonComponent = (function () {
    function BaloonComponent() {
    }
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], BaloonComponent.prototype, "config", void 0);
    BaloonComponent = __decorate([
        Component({
            selector: 'mm-baloon',
            template: "\n        <div class=\"mm-baloon\" [style.top]=\"config.event.clientY + 'px'\" [style.left]=\"config.event.clientX + 'px'\">\n            <ul>\n                <li *ngFor=\"let item of config.values; let i = index\">\n                    <span>{{item.key}}</span><span>:</span><span>{{item.value}}</span>\n                </li>\n            </ul>\n        </div>\n    ",
            styles: [
                "\n        .mm-baloon {\n            display: box;\n            position: absolute;\n        }\n\n        .mm-baloon ul {\n            margin: 0xp 0px;\n            padding: 3px 3px;\n            list-style-type: none;\n        }\n        \n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BaloonComponent);
    return BaloonComponent;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard/src/components/baloon.component.js.map