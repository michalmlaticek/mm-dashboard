import { NgGridItemConfig } from 'angular2-grid';
import { IBaseWidgetConfig } from 'mm-dashboard-core';

export interface IDashboardItemConfig {
    gridConfig: NgGridItemConfig;
    widgetConfig: IBaseWidgetConfig;
}
