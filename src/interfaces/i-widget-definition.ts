import { Type } from '@angular/core';
import { IBaseWidgetConfig } from 'mm-dashboard-core';

export interface IWidgetDefinition extends IBaseWidgetConfig {
    widgetComponent: Type<any>;
}