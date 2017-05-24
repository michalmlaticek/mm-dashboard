import { ViewContainerRef, ComponentFactoryResolver, OnChanges, OnDestroy, EventEmitter, SimpleChanges } from '@angular/core';
import { IBaseWidgetConfig, ITooltipConfig } from 'mm-dashboard-core';
import { Widgets } from '../services';
export declare class WidgetFactoryDirective implements OnChanges, OnDestroy {
    private widgets;
    private vcRef;
    private resolver;
    config: IBaseWidgetConfig;
    data: Array<any>;
    resized: Boolean;
    dataChange: EventEmitter<any[]>;
    tooltipOn: EventEmitter<ITooltipConfig>;
    tooltipOff: EventEmitter<ITooltipConfig>;
    componentRef: any;
    init: boolean;
    constructor(widgets: Widgets, vcRef: ViewContainerRef, resolver: ComponentFactoryResolver);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private create(changes);
}
