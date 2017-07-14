import {AxisPointer} from './axis';
import {TextStyle, TriggerAction, TriggerType} from './common';
export interface Tooltip {
  show?: boolean;

  trigger?: TriggerType;

  axisPointer?: AxisPointer;

  showContent?: boolean;

  alwaysShowContent?: boolean;

  triggerOn?: TriggerAction;

  showDelay?: number;

  hideDelay?: number;

  enterable?: boolean;

  confine?: boolean;

  transitionDuration?: number;

  position?: Array<any>;

  formatter?: any;

  backgroundColor?: string;

  borderColor?: string;

  borderWidth?: number;

  padding?: number;

  textStyle?: TextStyle;

  extraCssText?: string;
}
