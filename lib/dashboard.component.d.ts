import { SimpleChanges, OnChanges, EventEmitter } from '@angular/core';
import { IDashboardConfig } from './interfaces';
export declare class DashboardComponent implements OnChanges {
    config: IDashboardConfig;
    data: Array<any>;
    selectedItem: EventEmitter<{
        event: Event;
        item: number;
    }>;
    rightClick: EventEmitter<{
        event: Event;
        item: number;
    }>;
    private dataCopy;
    private resizedFlags;
    private tooltipConfig;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    onGridItemChangeStop(): void;
    private onDataChange;
    private onResizeAny(i);
    private onItemSelect(event, i);
    private onRightClick(event, i);
    private onTooltipOn(tooltipConfig);
    private onTooltipOff(tooltipConfig);
    private onResetData(event);
}
