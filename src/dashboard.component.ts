import { Component, Input, Output, ViewEncapsulation, SimpleChanges, OnChanges, EventEmitter } from '@angular/core';
import { IDashboardConfig } from './interfaces';
import { ITooltipConfig } from 'mm-dashboard-core';

@Component({
  selector: 'mm-dashboard',
  // templateUrl: './dashboard.component.html',
  // styleUrls: ['./dashboard.component.css'],
  template:
  `
    <div class="mm-dashboard-container">
      <h2 class="mm-dashboard-title">{{config.title}}</h2>
      <div class="mm-dashboard-grid" [ngGrid]="config.gridConfig">
        <div class="mm-dashboard-item" *ngFor="let dashItem of config.items; let i = index" [(ngGridItem)]="dashItem.gridConfig"
          (onGridItemChangeStop)="onGridItemChangeStop($event)" (onResizeAny)="onResizeAny(i)">
          <div class="mm-widget" id="{{i}}" (click)="onItemSelect($event, i)" (contextmenu)="onRightClick($event, i)">
            <div mm-widget [config]="dashItem.widgetConfig" [data]="dataCopy" [resized]="resizedFlags[i]" 
            (dataChange)="onDataChange($event)" (tooltipOn)="onTooltipOn($event)" (tooltipOff)="onTooltipOff($event)"></div>
          </div>
        </div>
      </div>
      <div class="reset-btn"><button (click)="onResetData($event)">reset</button><div>
      <mm-baloon *ngIf="tooltipConfig" [config]="tooltipConfig"></mm-baloon>
    </div>
  `,
  styles: [
    `
      .mm-dashboard-title {
          margin-top: 0px;
      }

      .mm-dashboard-item {
          border: 1px solid #efefef;
          display: flex;
          flex-flow: column;
          box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.5);
      }

      .mm-dashboard-item-title {
          padding-left: 10px;
          border-bottom: 1px dashed #cccccc; 
      }

      .mm-widget {
        width: 100%;
        height: 100%;
      }

      .mm-line {
            fill: none;
            /*stroke: steelblue;*/
            stroke-width: 1.5px;
        }

        div.tooltip {
            position: absolute;
            text-align: center;
            width: 60px;
            height: 28px;
            padding: 2px;
            font: 12px sans-serif;
            background: lightsteelblue;
            border: 0px;
            border-radius: 8px;
            pointer-events: none;
        }

    `
  ],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnChanges {

  @Input() config: IDashboardConfig;
  @Input() data: Array<any>;
  @Output() selectedItem: EventEmitter<{ event: Event, item: number }> = new EventEmitter();
  @Output() rightClick: EventEmitter<{ event: Event, item: number }> = new EventEmitter();

  private dataCopy: Array<any> = new Array<any>();

  private resizedFlags: Array<Boolean> = new Array<Boolean>();
  private tooltipConfig: ITooltipConfig;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("DashboardComponent -> ngOnChanges: changes = ", changes);
    if (changes["config"]) {
      changes["config"].currentValue.items.forEach(i => this.resizedFlags.push(false));
    }
    if (changes["data"]) {
      this.dataCopy = JSON.parse(JSON.stringify(changes["data"].currentValue));
    }
  }

  onGridItemChangeStop() {
    console.log("Grid item change stop")
  }

  private onDataChange = (newData: Array<any>) => {
    console.log("data has changed");
    this.dataCopy = newData;
  }

  private onResizeAny(i: number) {
    console.log("resized elem: ", i);
    this.resizedFlags[i] = new Boolean(true);
  }

  private onItemSelect(event: Event, i: number) {
    let contextmenuEmit = {
      event: event,
      item: i
    };
    console.log("item selected: ", contextmenuEmit);
    this.selectedItem.emit(contextmenuEmit);
  }

  private onRightClick(event: Event, i: number) {
    // event.preventDefault();
    // event.stopPropagation();
    let contextmenuEmit = {
      event: event,
      item: i
    };
    console.log("right clicked: ", contextmenuEmit);
    this.rightClick.emit(contextmenuEmit);
  }

  private onTooltipOn(tooltipConfig: ITooltipConfig) {
    console.log("setting tooltip");
    this.tooltipConfig = tooltipConfig;
  }

  private onTooltipOff(tooltipConfig: ITooltipConfig) {
    this.tooltipConfig = null;
  }

  private onResetData(event: Event) {
    this.dataCopy = JSON.parse(JSON.stringify(this.data));
  }

}
