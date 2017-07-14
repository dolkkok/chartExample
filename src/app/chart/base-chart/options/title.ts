import {Position, TextStyle} from './common';
export interface Title {
  show?: boolean;

  text?: String;

  link?: String;

  target?: String;

  textStyle?: TextStyle;

  textAlign?: Position;

  textBaseLine?: Position;

  subText?: String;

  subLink?: String;

  subTarget?: String;

  subtextStyle?: TextStyle;

  padding?: number;

  itemGap?: number;

  zlevel?: number;

  z?: number;

  left?: number;

  top?: number;

  right?: number;

  bottom?: number;

  backgroundColor?: string;

  borderColor?: string;

  borderWidth?: string;

  shadowBlur?: number;

  shadowColor?: string;

  shadowOffsetX?: number;

  shadowOffsetY?: number;
}
