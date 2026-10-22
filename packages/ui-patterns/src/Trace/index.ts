import { Bar, CollapsedChildren, Markers, Slowest } from './Bar'
import { Minimap } from './Minimap'
import { Cell, Duration, Lane, Rows } from './Rows'
import { Root } from './Trace'
import { Ruler, Waterfall } from './Waterfall'

export const Trace = {
  Root,
  Waterfall,
  Ruler,
  Rows,
  Cell,
  Lane,
  Duration,
  Bar,
  Markers,
  Slowest,
  CollapsedChildren,
  Minimap,
}

export { useView } from './Trace'

export type {
  RootProps,
  Span,
  SpanEvent,
  SpanStatus,
  TimeScale,
  TimeTick,
  TimeWindow,
  TraceData,
  TraceIndex,
  ViewContextValue,
  VisibleRow,
  WaterfallProps,
} from './types'
