import {Orient, TextStyle} from './common';
export interface Legend {
  show?: boolean;

  zlevel?: number;

  z?: number;

  left?: number;

  top?: number;

  right?: number;

  bottom?: number;

  width?: number;

  height?: number;

  orient?: Orient;

  align?: Position;

  padding?: number;

  itemGap?: number;

  itemWidth?: number;

  itemHeight?: number;

  selectedMode?: boolean;

  inactiveColor?: string;

  selected?: Object;

  textStyle?: TextStyle;

  tooltip?: any;

  data?: Object;

  seriesSync: boolean;

  color?: string;
}
