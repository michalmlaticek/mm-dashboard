import { Injectable } from '@angular/core';
import { MmObjectFactory } from 'mm-dashboard-core';
import { NgGridConfigFactory } from './ng-grid-config.factory';
import { IBaseDashboardConfig } from '../interfaces';

@Injectable()
export class BaseDashboardConfigFactory {

    defaultConfig: IBaseDashboardConfig;

    constructor(private ngGridConfigFactory: NgGridConfigFactory) {
        this.defaultConfig = {
            title: ""
        }
    }

    init(config: IBaseDashboardConfig): IBaseDashboardConfig {
        config.title = config.title ? config.title : this.defaultConfig.title;
        config.gridConfig = this.ngGridConfigFactory.init(config.gridConfig);
        return config;
    }
}