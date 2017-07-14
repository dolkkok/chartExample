import {SymbolStatus} from './visualmap';
import {BrusheMode, BrusheType, DataStyle, ThrottleType} from './common';
export interface Brush {
  toolbox?: Array<string>;

  brushLink?: any;

  seriesIndex?: number;

  geoIndex?: number;

  xAxisIndex?: number;

  yAxisIndex?: number;

  brushType?: BrusheType;

  brushMode?: BrusheMode;

  transformable?: boolean;

  brushStyle?: DataStyle;

  throttleType?: ThrottleType;

  throttleDelay?: number;

  removeOnClick?: boolean;

  inBrush?: SymbolStatus;

  outOfBrush?: SymbolStatus;

  z?: number;
}
