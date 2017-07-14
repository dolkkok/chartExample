import {
  AxisType, DataStyle, SymbolType, TextStyle, LineStyleSet, LabelStyle,
  TriggerAction, Position
} from './common';

export interface Axis {
  show?: boolean;

  gridIndex?: number;

  position?: Position;

  offset?: number;

  type?: AxisType;

  name?: string;

  nameLocation?: Position;

  nameTextStyle?: TextStyle;

  nameGap?: number;

  nameRotate?: number;

  inverse?: boolean;

  boundaryGap?: number;

  min?: number;

  max?: number;

  scale?: number;

  splitNumber?: number;

  minInterval?: number;

  interval?: number;

  logBase?: number;

  silent?: boolean;

  triggerEvent?: boolean;

  axisLine?: AxisLine;

  axisTick?: AxisTick;

  axisLabel?: AxisLabel;

  splitLine?: SplitLine;

  splitArea?: SplitArea;

  data?: Array<Object>;

  axisPointer?: AxisPointer;

  zlevel?: number;

  z?: number;
}

export interface Radar {
  zlevel?: number;

  z?: number;

  center?: number;

  radius?: number;

  startAngle?: number;

  name?: any;

  nameGap?: number;

  splitNumber?: number;

  shape?: SymbolType;

  scale?: boolean;

  silent?: boolean;

  triggerEvent?: boolean;

  axisLine?: AxisLine;

  axisTick?: AxisTick;

  axisLabel?: AxisLabel;

  splitLine?: SplitLine;

  splitArea?: SplitArea;

  indicator?: Indicator[];
}

export interface AxisLine {
  show?: boolean;

  lineStyle?: LineStyleSet;
}

export interface AxisTick {
  show?: boolean;

  alignWithLabel?: boolean;

  interval?: number;

  inside?: boolean;

  length?: number;

  lineStyle?: LineStyleSet;
}

export interface AxisLabel {
  show?: boolean;

  interval?: number;

  inside?: boolean;

  rotate?: number;

  margin?: number;

  formatter?: any;

  showMinLabel?: boolean;

  showMaxLabel?: boolean;

  textStyle?: TextStyle;
}

export interface SplitLine {
  show?: boolean;

  interval?: number;

  lineStyle?: LineStyleSet;
}

export interface SplitArea {
  show?: boolean;

  interval?: number;

  areaStyle?: DataStyle;
}


export interface AxisPointer {
  show?: boolean;

  type?: AxisPointerType;

  snap?: boolean;

  z?: number;

  label?: LabelStyle;

  lineStyle?: DataStyle;

  shadowStyle?: DataStyle;

  crossStyle?: DataStyle;

  triggerTooltip?: number;

  value?: number;

  status?: boolean;

  handle?: AxisPointerHandle;

  triggerOn?: TriggerAction;
}

interface AxisPointerHandle {
  show?: boolean;

  icon?: string;

  size?: number;

  margin?: number;

  color?: string;

  throttle?: number;

  shadowBlur?: number;

  shadowColor?: string;

  shadowOffsetX?: number;

  shadowOffsetY?: number;
}

export interface Indicator {
  name?: string;

  max?: number;

  min?: number;
}

export enum AxisPointerType {
  LINE = <any>'line',
  SHADOW = <any>'shadow'
}



