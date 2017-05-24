import { Type, OpaqueToken } from '@angular/core';
import { IWidgetDefinition } from '../interfaces';
export { Type, OpaqueToken };
export declare type WidgetList = IWidgetDefinition[];
export declare class Widgets {
    widgets: Map<string, Type<any>>;
    constructor(widgets: WidgetList);
    getComponentById(widgetId: string): Type<any>;
}
export declare let WIDGET_SERVICE: OpaqueToken;
