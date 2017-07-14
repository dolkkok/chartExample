import { Component, OnInit, ElementRef, Injector } from '@angular/core';
import {BaseChart} from '../base-chart/base-chart';
import {ChartType, SeriesType} from '../base-chart/options/common';
import * as $ from 'jquery';
import {Series} from '../base-chart/options/series';
import {getBarChartBaseOption} from '../base-chart/bar-chart-base-option';

declare const echarts: any;

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent extends BaseChart implements OnInit {
  constructor(elementRef: ElementRef, injector: Injector) {
    super(elementRef, injector);
  }

  ngOnInit() {
    // 차트 element 초기화
    this.initChart('chartCanvas');
    // 차트  option 초기화
    this.chartOption = getBarChartBaseOption();
    const series: Series = {
      type: SeriesType.BAR,
      name: 'test',
      data: [1, 2, 3, 4, 5, 6, 7, 8]
    };

    delete this.chartOption.brush;
    delete this.chartOption.toolbox;

    this.chartOption.series.push(series);
    this.chartOption.xAxis[0].data = ['1', '2', '3', '4', '5', '6', '7', '8'];
    this.chartOption.legend.data = ['test'];

    // 차트 draw
    this.drawChart(this.chartOption, false);
  }

}
