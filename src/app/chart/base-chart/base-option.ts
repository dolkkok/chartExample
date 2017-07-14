import {Title} from './options/title';
import {Axis} from './options/axis';
import {Datazoom} from './options/datazoom';
import {Grid} from './options/grid';
import {Legend} from './options/legend';
import {Tooltip} from './options/tooltip';
import {Series} from './options/series';
import {Toolbox} from './options/toolbox';
import {Brush} from './options/brush';
import {ChartType} from './options/common';

export interface BaseOption {
  type: ChartType;

  title?: Title;

  grid?: Grid;

  legend?: Legend;

  xAxis?: Array<Axis>;

  yAxis?: Array<Axis>;

  dataZoom?: Array<Datazoom>;

  tooltip?: Tooltip;

  toolbox?: Toolbox;

  brush?: Brush;

  series?: Array<Series>;
}

