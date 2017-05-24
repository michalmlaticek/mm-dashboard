import { Type, OpaqueToken } from '@angular/core';
import { IWidgetDefinition } from '../interfaces';
export { Type, OpaqueToken };

export declare type WidgetList = IWidgetDefinition[];

export class Widgets {
    widgets: Map<string, Type<any>>;

    constructor(widgets: WidgetList) {
        this.widgets = new Map();
        widgets.forEach(w => {
            this.widgets[w.widgetId] = w.widgetComponent;
        });
        console.log("Widgets -> constructor: this.widgets: ", this.widgets);
    }

    getComponentById(widgetId: string): Type<any> {
        return this.widgets[widgetId];
    }
}

export let WIDGET_SERVICE = new OpaqueToken("mm-widget-service");