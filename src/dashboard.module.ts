import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { BaloonComponent } from './components/baloon.component';
import { NgGridModule } from 'angular2-grid';
import { WidgetFactoryDirective } from './directives';
import { WidgetList, Widgets, WIDGET_SERVICE, NgGridConfigFactory, BaseDashboardConfigFactory } from './services';

@NgModule({
  imports: [
    CommonModule,
    NgGridModule
  ],
  declarations: [DashboardComponent, WidgetFactoryDirective, BaloonComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {
  static forRoot(widgets: WidgetList): ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: [
        { provide: WIDGET_SERVICE, useValue: new Widgets(widgets) },
        { provide: NgGridConfigFactory, useClass: NgGridConfigFactory },
        { provide: BaseDashboardConfigFactory, useClass: BaseDashboardConfigFactory }
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    // widget servce will need to be provided in the root module
    return {
      ngModule: DashboardModule,
      providers: [
        // { provide: WIDGET_SERVICE, useValue: new Widgets(widgets) }
        { provide: NgGridConfigFactory, useClass: NgGridConfigFactory },
        { provide: BaseDashboardConfigFactory, useClass: BaseDashboardConfigFactory }
      ]
    };
  }
}
