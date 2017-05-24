import {
  Directive,
  ComponentFactory,
  ViewContainerRef,
  ComponentFactoryResolver,
  Input,
  Inject,
  Output,
  OnChanges,
  OnDestroy,
  EventEmitter,
  SimpleChanges,
  SimpleChange,
  Type
} from '@angular/core';
import { IBaseWidget, IBaseWidgetConfig, ITooltipConfig } from 'mm-dashboard-core';
import { Widgets, WIDGET_SERVICE } from '../services';


@Directive({
  selector: '[mm-widget]'
})
export class WidgetFactoryDirective implements OnChanges, OnDestroy {
  @Input() config: IBaseWidgetConfig;
  @Input() data: Array<any>;
  @Input() resized: Boolean;
  @Output() dataChange: EventEmitter<any[]> = new EventEmitter();
  @Output() tooltipOn: EventEmitter<ITooltipConfig> = new EventEmitter();
  @Output() tooltipOff: EventEmitter<ITooltipConfig> = new EventEmitter();

  componentRef;
  init = false;

  constructor(
    @Inject(WIDGET_SERVICE) private widgets: Widgets,
    private vcRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("WidgetFactoryDirective -> ngOnChanges", changes);
    if (!this.config || !this.widgets.getComponentById(this.config.widgetId)) {
      console.log("WidgetFactoryDirective -> ngOnChanges - returning without action");
      console.log("config: ", this.config);
      console.log("widget: ", this.widgets.getComponentById(this.config.widgetId));
      return;
    }

    if (!this.init) {
      this.ngOnDestroy();
      this.create(changes);
    } else {
      if (changes["config"]) {
        this.componentRef.instance.config = changes["config"].currentValue;
        this.resized = true;
      }
      if (changes["data"]) {
        this.componentRef.instance.data = changes["data"].currentValue;
        this.componentRef.instance.formatData();
        this.resized = true;
      }
      if (changes["resized"]) {
        this.componentRef.instance.resized = changes["resized"].currentValue;
        this.resized = new Boolean(false);
      }
      this.componentRef.instance.ngOnChanges(changes);
    }
  }

  ngOnDestroy() {
    console.log("WidgetFactoryDirective -> ngOnDestroy");
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  private create(changes: SimpleChanges) {
    console.log("WidgetFactoryDirective -> create");
    const factory = this.resolver.resolveComponentFactory(this.widgets.getComponentById(this.config.widgetId));
    const compRef = this.vcRef.createComponent(factory);

    console.log("WidgetFactoryDirective -> setInputAndListen: ", compRef);
    console.log("WidgetFactoryDirective -> setInputAndListen: ", this.config, this.data);
    (<any>compRef).instance.config = this.config;
    (<any>compRef).instance.data = this.data;
    (<any>compRef).instance.dataChange.subscribe(
      (data) => {
        console.log("WidgetFactoryDirective -> setInputAndListen: emitting changed data = ", data);
        this.dataChange.emit(data);
      }
    );
    (<any>compRef).instance.tooltipOn.subscribe(
      (tooltipConfig) => {
        console.log("WidgetFactoryDirective -> setInputAndListen: emitting tooltip config [on] = ", tooltipConfig);
        this.tooltipOn.emit(tooltipConfig);
      }
    );
    (<any>compRef).instance.tooltipOff.subscribe(
      (tooltipConfig) => {
        console.log("WidgetFactoryDirective -> setInputAndListen: emitting tooltip config [off] = ", tooltipConfig);
        this.tooltipOff.emit(tooltipConfig);
      }
    );
    (<any>compRef).instance.ngOnChanges(changes);

    this.componentRef = compRef;
    this.init = true;
  }
}
