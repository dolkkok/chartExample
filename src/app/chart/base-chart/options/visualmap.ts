export interface Visualmap {
  // common, continuous
  type?: VisualMapType;

  min?: number;

  max?: number;

  range?: Array<number>;

  calculable?: boolean;

  realTime?: boolean;

  inverse?: number;

  precision?: number;

  itemWidth?: number;

  itemHeight?: number;

  align?: Position;

  text?: Array<string>;

  textGap?: Array<number>;

  show?: boolean;

  dimension?: number;

  seriesIndex?: any;

  hoverLink?: boolean;

  inRange?: SymbolStatus;

  outOfRange?: SymbolStatus;

  controller?: VisualMapController;

  zlevel?: number;

  z?: number;

  left?: number;

  top?: number;

  right?: number;

  bottom?: number;

  orient?: number;

  padding?: number;

  backgroundColor?: number;

  borderColor?: number;

  borderWidth?: number;

  color?: number;

  textStyle?: number;

  formatter?: number;

  // piecewise

  splitNumber?: boolean;

  pieces?: boolean;

  categories?: boolean;

  minOpen?: boolean;

  maxOpen?: string;

  selectedMode?: boolean;

  showLabel?: number;

  itemGap?: boolean;

  itemSymbol?: number;
}

export interface SymbolStatus {
  symbol?: string;

  symbolSize?: any;

  color?: any;

  colorAlpha?: string;

  opacity?: string;

  colorLightness?: string;

  colorSaturation?: string;

  colorHue?: string;
}

export interface VisualMapController {
  inRange?: SymbolStatus;

  outOfRange?: SymbolStatus;
}

export enum VisualMapType {
  CONTINUOUS = <any>'continuous',
  PIECEWISE = <any>'piecewise'
}
