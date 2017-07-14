export interface DataStyle {
  // common
  color?: string;
  shadowBlur?: number;
  shadowColor?: string;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  opacity?: number;
  // Item DataStyle
  borderColor?: string;
  borderWidth?: string;
  borderType?: string;
  textPosition?: Position;
  textAlign?: Position;
  // Line DataStyle
  width?: number;
  type?: LineType;
  curveness?: number;
}

export interface GraphicStyle {
  text?: string;
  x?: string;
  y?: string;
  font?: string;
  textAlign?: number;
  textVerticalAlign?: number;
  fill?: number;
  stroke?: number;
  lineWidth?: number;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  shadowColor?: number;
}

export interface TextStyle {
  color?: string;
  fontStyle?: FontStyle;
  fontWeight?: FontWeight;
  fontFamily?: string;
  fontSize?: number;
}

export interface LabelStyle {
  color?: string;
  shadowBlur?: number;
  shadowColor?: string;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  opacity?: number;
  show: boolean;
  precision: boolean;
  formatter: boolean;
  margin: boolean;
  textStyle: this;
  padding: boolean;
  backgroundColor: boolean;
}

export interface ItemStyleSet {
  normal: DataStyle;
  emphasis?: DataStyle;
}

export interface LineStyleSet {
  normal: DataStyle;
}

export interface LabelStyleSet {
  normal: LabelStyle;
  emphasis?: LabelStyle;
}

// TODO
// enum으로 할지 type으로 할지.....
// export type LineType = 'solid' | 'dashed'| 'dotted';
export enum ChartType {
  BAR = <any>'bar',
  GRID = <any>'grid',
  LINE = <any>'line',
  SCATTER = <any>'scatter',
  HEATMAP = <any>'heatmap',
  PIE = <any>'pie',
  MAPVIEW = <any>'mapview',
  CONTROL = <any>'control',
  KPI = <any>'kpi',
  BOXPLOT = <any>'boxplot',
  WATERFALL = <any>'waterfall',
  WORDCLOUD = <any>'wordcloud',
  COMBINE = <any>'combine',
  TREEMAP = <any>'treemap',
  RARDAR = <any>'rardar',
  NETWORK = <any>'network'
}

export enum SeriesType {
  BAR = <any>'bar',
  LINE = <any>'line',
  SCATTER = <any>'scatter',
  HEATMAP = <any>'heatmap',
  PIE = <any>'pie',
  BOXPLOT = <any>'boxplot',
  WORDCLOUD = <any>'wordcloud',
  TREEMAP = <any>'treemap',
  RARDAR = <any>'rardar',
  GRAPH = <any>'graph'
}

export enum Position {
  AUTO = <any>'auto',
  START = <any>'start',
  END = <any>'end',
  LEFT = <any>'left',
  RIGHT = <any>'right',
  CENTER = <any>'center',
  TOP = <any>'top',
  MIDDLE = <any>'middle',
  BOTTOM = <any>'bottom'
}

export enum AxisType {
  CATEGORY = <any>'category',
  VALUE = <any>'value',
  LOG = <any>'log'
}

export enum LineType {
  SOLID = <any>'solid',
  DASHED = <any>'dashed',
  DOTTED = <any>'dotted',
}

export enum SymbolType {
  POLYGON = <any>'polygon',
  CIRCLE = <any>'circle',
  RECT = <any>'rect',
  ROUNDRECT = <any>'roundRect',
  TRIANGLE = <any>'triangle',
  DIAMOND = <any>'diamond',
  PIN = <any>'pin',
  ARROW = <any>'arrow',
}

export enum FontStyle {
  NORMAL = <any>'normal',
  ITALIC = <any>'italic',
  OBLIQUE = <any>'oblique'
}

export enum FontWeight {
  NORMAL = <any>'normal',
  BOLD = <any>'bold',
  BOLDER = <any>'bolder',
  LIGHTER = <any>'lighter'
}

export enum Orient {
  VERTICAL = <any>'vertical',
  HORIZONTAL = <any>'horizontal'
}

export enum TriggerType {
  ITEM = <any>'item',
  AXIS = <any>'axis',
  NONE = <any>'none'
}

export enum TriggerAction {
  MOUSEMOVE = <any>'mousemove',
  CLICK = <any>'click',
  NONE = <any>'none'
}

export enum ImageFormat {
  PNG = <any>'png',
  JPEG = <any>'jpeg',
}

export enum ToolboxMagicType {
  LINE = <any>'line',
  BAR = <any>'bar',
  STACK = <any>'stack',
  TILED = <any>'tiled'
}

export enum ThrottleType {
  DEBOUNCE = <any>'debounce',
  fixrate = <any>'fixRate'
}

export enum BrusheType {
  RECT = <any>'rect',
  POLYGON = <any>'polygon',
  LINEX = <any>'lineX',
  liney = <any>'lineY'
}

export enum BrusheMode {
  SINGLE = <any>'single',
  MULTIPLE = <any>'multiple'
}

export enum GraphicType {
  IMAGE = <any>'image',
  TEXT = <any>'text',
  CIRCLE = <any>'circle',
  SECTOR = <any>'sector',
  RING = <any>'ring',
  POLYGON = <any>'polygon',
  POLYLINE = <any>'polyline',
  RECT = <any>'rect',
  LINE = <any>'line',
  BEZIERCURVE = <any>'bezierCurve',
  ARC = <any>'arc',
  GROUP = <any>'group'
}

export enum GraphicAction {
  MERGE = <any>'merge',
  REPLACE = <any>'replace',
  REMOVE = <any>'remove'
}





