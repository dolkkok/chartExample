import {BaseOption} from './base-option';
import {AxisType, ChartType, FontWeight, Orient, Position, TextStyle, TriggerType} from './options/common';
import {Title} from './options/title';
import {Legend} from './options/legend';
import {Grid} from './options/grid';
import {Axis} from './options/axis';
import {Datazoom, DatazoomType} from './options/datazoom';
import {Tooltip} from './options/tooltip';
import {Series} from './options/series';
import {Toolbox} from './options/toolbox';
import {Brush} from './options/brush';

const axisTitleStyle: TextStyle = {
  fontSize: 13,
  fontWeight: FontWeight.BOLD
};

// 차트초기화시 공통옵션 설정
const title: Title = {
  show: false,
  text: ''
};

const legend: Legend = {
  show: false,
  seriesSync: false,
};

const grid: Grid = {
  left: 0,
  right: 0,
  bottom: 0,
  containLabel: true
};

const xAxis: Array<Axis> = [
  {
    show: true,
    type: AxisType.CATEGORY,
    nameTextStyle: axisTitleStyle,
    nameLocation: Position.CENTER,
    data: []
  }
];

const yAxis: Array<Axis> = [
  {
    show: true,
    type: AxisType.VALUE,
    nameLocation: Position.MIDDLE
  }
];

const dataZoom: Array<Datazoom> = [
  {
    top: 0,
    left: 0,
    right: 5,
    type: DatazoomType.SLIDER,
    show: true,
    orient: Orient.HORIZONTAL
  }
];

const tooltip: Tooltip = {
  trigger: TriggerType.ITEM
};

const toolbox: Toolbox = {
};

const brush: Brush = {
};

const series: Array<Series> = [];

export function getBarChartBaseOption() {
  const options: BaseOption = {
    type: ChartType.BAR,
    title: title,
    grid: grid,
    legend: legend,
    xAxis: xAxis,
    yAxis: yAxis,
    dataZoom: dataZoom,
    tooltip: tooltip,
    toolbox: toolbox,
    brush: brush,
    series: series
  };
  return options;
}
