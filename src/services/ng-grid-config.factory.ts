import { Injectable } from '@angular/core';
import { NgGridConfig } from 'angular2-grid';
import { MmObjectFactory } from 'mm-dashboard-core';

@Injectable()
export class NgGridConfigFactory {
    private defaultConfig: NgGridConfig = {
        'margins': [10],            //  The size of the margins of each item. Supports up to four values in the same way as CSS margins. Can be updated using setMargins()
        'draggable': true,          //  Whether the items can be dragged. Can be updated using enableDrag()/disableDrag()
        'resizable': true,          //  Whether the items can be resized. Can be updated using enableResize()/disableResize()
        'max_cols': 0,              //  The maximum number of columns allowed. Set to 0 for infinite. Cannot be used with max_rows
        'max_rows': 0,              //  The maximum number of rows allowed. Set to 0 for infinite. Cannot be used with max_cols
        'visible_cols': 0,          //  The number of columns shown on screen when auto_resize is set to true. Set to 0 to not auto_resize. Will be overriden by max_cols
        'visible_rows': 0,          //  The number of rows shown on screen when auto_resize is set to true. Set to 0 to not auto_resize. Will be overriden by max_rows
        'min_cols': 0,              //  The minimum number of columns allowed. Can be any number greater than or equal to 1.
        'min_rows': 0,              //  The minimum number of rows allowed. Can be any number greater than or equal to 1.
        'col_width': 250,           //  The width of each column
        'row_height': 250,          //  The height of each row
        'cascade': 'up',            //  The direction to cascade grid items ('up', 'right', 'down', 'left')
        'min_width': 100,           //  The minimum width of an item. If greater than col_width, this will update the value of min_cols
        'min_height': 100,          //  The minimum height of an item. If greater than row_height, this will update the value of min_rows
        'fix_to_grid': false,       //  Fix all item movements to the grid
        'auto_style': true,         //  Automatically add required element styles at run-time
        'auto_resize': false,       //  Automatically set col_width/row_height so that max_cols/max_rows fills the screen. Only has effect is max_cols or max_rows is set
        'maintain_ratio': false,    //  Attempts to maintain aspect ratio based on the colWidth/rowHeight values set in the config
        'prefer_new': false,        //  When adding new items, will use that items position ahead of existing items
        'limit_to_screen': false   //  When resizing the screen, with this true and auto_resize false, the grid will re-arrange to fit the screen size. Please note, at present this only works with cascade direction up.
    }

    constructor(private objectFactory: MmObjectFactory<NgGridConfig>) { }

    init(config: NgGridConfig): NgGridConfig {
        return this.objectFactory.init(this.defaultConfig, config);
    }
}