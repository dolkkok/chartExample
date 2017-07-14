import {GraphicAction, GraphicStyle, GraphicType} from "./common";
export interface Graphic {
  type?: GraphicType;

  id?: string;

  $action?: GraphicAction;

  left?: number;

  right?: number;

  top?: number;

  bottom?: number;

  bounding?: string;

  z?: number;

  zlevel?: number;

  silent?: boolean;

  invisible?: boolean;

  cursor?: string;

  draggable?: boolean;

  progressive?: boolean;

  style?: GraphicStyle;

  onclick?: any;

  onmouseover?: any;

  onmouseout?: any;

  onmousemove?: any;

  onmousewheel?: any;

  onmousedown?: any;

  onmouseup?: any;

  ondrag?: any;

  ondragstart?: any;

  ondragend?: any;

  ondragenter?: any;

  ondragleave?: any;

  ondragover?: any;

  ondrop?: any;
}
