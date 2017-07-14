import {ImageFormat, ItemStyleSet, Orient, ToolboxMagicType} from './common';
export interface Toolbox {
  show?: boolean;

  orient?: Orient;

  itemSize?: number;

  itemGap?: number;

  showTitle?: boolean;

  feature?: Position;

  iconStyle?: ItemStyleSet;

  zlevel?: number;

  z?: number;

  left?: number;

  top?: number;

  right?: number;

  bottom?: number;

  width?: number;

  height?: number;
}


export interface ToolboxFeature {
  saveAsImage?: SaveAsImage;

  restore?: Restore;

  dataView?: DataView;

  dataZoom?: Datazoom;

  magicType?: MagicType;

  brush?: Brush;
}

export interface SaveAsImage {
  type?: ImageFormat;

  name?: string;

  backgroundColor?: string;

  excludeComponents?: Array<string>;

  show?: boolean;

  title?: string;

  icon?: string;

  iconStyle?: ItemStyleSet;

  pixelRatio?: number;
}

export interface Restore {
  show?: boolean;

  title?: string;

  icon?: string;

  iconStyle?: ItemStyleSet;
}

export interface DataView {
  show?: boolean;

  title?: string;

  icon?: string;

  iconStyle?: ItemStyleSet;

  readOnly?: boolean;

  optionToContent?: any;

  contentToOption?: any;

  lang?: Array<string>;

  backgroundColor?: string;

  textareaColor?: string;

  textareaBorderColor?: string;

  textColor?: string;

  buttonColor?: string;

  buttonTextColor?: string;
}

export interface Datazoom {
  show?: boolean;

  title?: string;

  icon?: string;

  iconStyle?: ItemStyleSet;

  xAxisIndex?: any;

  iyAxisIndexcon?: any;
}

export interface MagicType {
  show?: boolean;

  type?: Array<string>;

  title?: ToolboxMagicType;

  icon?: string;

  iconStyle?: ItemStyleSet;
}

export interface Brush {
  type?: Array<string>;

  icon?: string;

  title?: BrushTitle;
}

export interface BrushTitle {
  rect?: string;

  polygon?: string;

  lineX?: string;

  lineY?: string;

  keep?: string;

  clear?: string;
}

