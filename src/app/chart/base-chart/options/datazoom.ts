import {Orient, DataStyle, TextStyle} from './common';
export interface Datazoom {
  // common
  type?: DatazoomType;

  xAxisIndex?: number;

  yAxisIndex?: number;

  radiusAxisIndex?: number;

  angleAxisIndex?: number;

  filterMode?: FilterMode;

  start?: number;

  end?: number;

  startValue?: any;

  endValue?: any;

  minSpan?: number;

  maxSpan?: number;

  minValueSpan?: any;

  maxValueSpan?: any;

  orient?: Orient;

  zoomLock?: boolean;

  throttle?: number;

  // inside
  disabled?: boolean;

  zoomOnMouseWheel?: boolean;

  moveOnMouseMove?: boolean;

  preventDefaultMouseMove?: boolean;

  // slider
  show?: boolean;

  backgroundColor?: string;

  dataBackground?: DataBackground;

  fillerColor?: string;

  borderColor?: string;

  handleIcon?: string;

  handleSize?: number;

  handleStyle?: DataStyle;

  labelPrecision?: number;

  labelFormatter?: any;

  showDetail?: boolean;

  showDataShadow?: string;

  realtime?: boolean;

  textStyle?: TextStyle;

  zlevel ?: number;

  z ?: number;

  left ?: number;

  top ?: number;

  right ?: number;

  bottom ?: number;
}

export interface DataBackground {
  lineStyle?: DataStyle;

  areaStyle?: DataStyle;
}

export enum DatazoomType {
  INSIDE = <any>'inside',
  SLIDER = <any>'slider'
}

export enum FilterMode {
  FILTER = <any>'filter',
  WEAKFILTER = <any>'weakfilter',
  EMPTY = <any>'empty',
  NONE = <any>'none',
}
