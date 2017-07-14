import {ChartType, DataStyle, ItemStyleSet, LineStyleSet, SeriesType} from './common';
import {Tooltip} from './tooltip';
export class Series {
  type?: SeriesType;

  name?: string;

  coordinateSystem?: string;

  xAxisIndex?: number;

  yAxisIndex?: number;

  symbol?: string;

  symbolSize?: number;

  symbolRotate?: number;

  symbolOffset?: Array<number>;

  showSymbol?: boolean;

  showAllSymbol?: boolean;

  hoverAnimation?: boolean;

  legendHoverLink?: boolean;

  stack?: string;

  cursor?: string;

  connectNulls?: boolean;

  selected?: boolean;

  clipOverflow?: boolean;

  step?: boolean;

  itemStyle?: ItemStyleSet;

  lineStyle?: LineStyleSet;

  areaStyle?: DataStyle;

  smooth?: boolean;

  smoothMonotone?: string;

  sampling?: string;

  dimensions?: Array<string>;

  encode?: Object;

  data?: Array<any>;

  markPoint?: any;

  markLine?: any;

  markArea?: any;

  zlevel?: number;

  z?: number;

  silent?: boolean;

  animation?: boolean;

  animationThreshold?: number;

  animationDuration?: number;

  animationEasing?: string;

  animationDelay?: number;

  animationDurationUpdate?: number;

  animationEasingUpdate?: string;

  animationDelayUpdate?: number;

  tooltip?: Tooltip;

  barWidth?: number;

  barMaxWidth?: number;

  barMinHeight?: number;

  barGap?: number;

  barCategoryGap?: number;
}
