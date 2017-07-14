import { Component, OnInit, ElementRef, Injector } from '@angular/core';
import {SeriesType} from '../base-chart/options/common';
import {Series} from '../base-chart/options/series';
import {BaseChart} from '../base-chart/base-chart';
import {getLineChartBaseOption} from '../base-chart/line-chart-base-option';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent extends BaseChart implements OnInit {
  constructor(elementRef: ElementRef, injector: Injector) {
    super(elementRef, injector);
  }

  ngOnInit() {
    // 차트 element 초기화
    this.initChart('chartCanvas');
    // 차트  option 초기화
    this.chartOption = getLineChartBaseOption();
    const series: Series = {
      type: SeriesType.LINE,
      name: 'test',
      data: [13, 22, 43, 47, 15, 36, 67, 78]
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
