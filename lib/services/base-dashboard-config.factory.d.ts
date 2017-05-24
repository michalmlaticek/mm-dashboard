import { NgGridConfigFactory } from './ng-grid-config.factory';
import { IBaseDashboardConfig } from '../interfaces';
export declare class BaseDashboardConfigFactory {
    private ngGridConfigFactory;
    defaultConfig: IBaseDashboardConfig;
    constructor(ngGridConfigFactory: NgGridConfigFactory);
    init(config: IBaseDashboardConfig): IBaseDashboardConfig;
}
