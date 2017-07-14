import { Component, OnInit, ElementRef, Injector } from '@angular/core';
import {SeriesType} from '../base-chart/options/common';
import {Series} from '../base-chart/options/series';
import {BaseChart} from '../base-chart/base-chart';
import {getScatterChartBaseOption} from '../base-chart/scatter-chart-base-option';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterChartComponent extends BaseChart implements OnInit {
  constructor(elementRef: ElementRef, injector: Injector) {
    super(elementRef, injector);
  }

  ngOnInit() {
    // 차트 element 초기화
    this.initChart('chartCanvas');
    // 차트  option 초기화
    this.chartOption = getScatterChartBaseOption();
    const series: Series = {
      type: SeriesType.SCATTER,
      name: 'test',
      data: [[0, 1], [41, 52], [48, 66], [10, 20], [50, 40]]
    };

    delete this.chartOption.brush;
    delete this.chartOption.toolbox;

    this.chartOption.series.push(series);
    this.chartOption.legend.data = ['test'];

    // 차트 draw
    this.drawChart(this.chartOption, false);
  }

}
