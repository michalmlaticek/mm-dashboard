import { Type, OpaqueToken } from '@angular/core';
export { Type, OpaqueToken };
export var Widgets = (function () {
    function Widgets(widgets) {
        var _this = this;
        this.widgets = new Map();
        widgets.forEach(function (w) {
            _this.widgets[w.widgetId] = w.widgetComponent;
        });
        console.log("Widgets -> constructor: this.widgets: ", this.widgets);
    }
    Widgets.prototype.getComponentById = function (widgetId) {
        return this.widgets[widgetId];
    };
    return Widgets;
}());
export var WIDGET_SERVICE = new OpaqueToken("mm-widget-service");
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard/src/services/widget.service.js.map