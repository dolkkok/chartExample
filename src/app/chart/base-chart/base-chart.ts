import {ElementRef, Injector} from '@angular/core';
import {BaseOption} from './base-option';
import * as $ from 'jquery';

declare const echarts: any;
export class BaseChart {

  protected $element: any;

  protected chart: any;

  protected chartOption: BaseOption;

  protected filedInfop: Object;

  protected pivotInfo: Object;

  // 생성자
  constructor(
    protected elementRef: ElementRef,
    protected injector: Injector ) {
  }

  public initChart(selector) {
    this.$element = $(this.elementRef.nativeElement);
    this.chart = echarts.init( this.$element.find('#' + selector)[0] );
  }

  public drawChart(option, isInit) {

   this.chart.setOption( option );
   this.chart.resize();
  }

  //
  // public destroyChart() {
  //
  // };
}

export interface ChartInterFace {
  draw(data: any): void;
}
