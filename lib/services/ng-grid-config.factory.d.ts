import { NgGridConfig } from 'angular2-grid';
import { MmObjectFactory } from 'mm-dashboard-core';
export declare class NgGridConfigFactory {
    private objectFactory;
    private defaultConfig;
    constructor(objectFactory: MmObjectFactory<NgGridConfig>);
    init(config: NgGridConfig): NgGridConfig;
}
