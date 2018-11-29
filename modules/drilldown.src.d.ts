import * as globals from "../globals";
import * as Highcharts from "../highcharts.src";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts.src" {
    interface Chart {
        /**
         * Add a series to the chart as drilldown from a specific point in the
         * parent series. This method is used for async drilldown, when clicking
         * a point in a series should result in loading and displaying a more
         * high-resolution series. When not async, the setup is simpler using
         * the drilldown.series options structure.
         *
         * @param point
         *        The point from which the drilldown will start.
         *
         * @param options
         *        The series options for the new, detailed series.
         *
         * @see https://api.highcharts.com/class-reference/Highcharts.Chart#addSeriesAsDrilldown
         */
        addSeriesAsDrilldown(point: Point, options: SeriesOptionsType): void;
        /**
         * When the chart is drilled down to a child series, calling
         * `chart.drillUp()` will drill up to the parent series. Requires the
         * drilldown module.
         */
        drillUp(): void;
    }
    interface SVGElement {
        /**
         * A general fadeIn method.
         */
        fadeIn(animation?: AnimationOptionsObject): void;
    }
}
export default factory;
