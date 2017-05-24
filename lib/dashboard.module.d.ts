import { ModuleWithProviders } from '@angular/core';
import { WidgetList } from './services';
export declare class DashboardModule {
    static forRoot(widgets: WidgetList): ModuleWithProviders;
    static forChild(): ModuleWithProviders;
}
