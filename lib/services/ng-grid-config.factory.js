var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { MmObjectFactory } from 'mm-dashboard-core';
export var NgGridConfigFactory = (function () {
    function NgGridConfigFactory(objectFactory) {
        this.objectFactory = objectFactory;
        this.defaultConfig = {
            'margins': [10],
            'draggable': true,
            'resizable': true,
            'max_cols': 0,
            'max_rows': 0,
            'visible_cols': 0,
            'visible_rows': 0,
            'min_cols': 0,
            'min_rows': 0,
            'col_width': 250,
            'row_height': 250,
            'cascade': 'up',
            'min_width': 100,
            'min_height': 100,
            'fix_to_grid': false,
            'auto_style': true,
            'auto_resize': false,
            'maintain_ratio': false,
            'prefer_new': false,
            'limit_to_screen': false //  When resizing the screen, with this true and auto_resize false, the grid will re-arrange to fit the screen size. Please note, at present this only works with cascade direction up.
        };
    }
    NgGridConfigFactory.prototype.init = function (config) {
        return this.objectFactory.init(this.defaultConfig, config);
    };
    NgGridConfigFactory = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [MmObjectFactory])
    ], NgGridConfigFactory);
    return NgGridConfigFactory;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard/src/services/ng-grid-config.factory.js.map