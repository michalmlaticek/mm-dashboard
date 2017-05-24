import { IDashboardItemConfig } from './';
import { NgGridConfig } from 'angular2-grid';
export interface IDashboardConfig {
    title: string;
    gridConfig: NgGridConfig;
    items: Array<IDashboardItemConfig>;
}
