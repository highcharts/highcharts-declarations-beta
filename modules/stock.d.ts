import * as globals from "../globals";
import * as Highcharts from "../highcharts";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts" {
    interface Axis {
        /**
         * Highstock only. Set the compare mode on all series belonging to an Y
         * axis after render time.
         *
         * @param compare
         *        The compare mode. Can be one of `null`, `"value"` or
         *        `"percent"`.
         *
         * @param redraw
         *        Whether to redraw the chart or to wait for a later call to
         *        Chart#redraw.
         *
         * @see https://api.highcharts.com/class-reference/Highcharts.Axis#setCompare
         */
        setCompare(compare: string, redraw?: boolean): void;
        /**
         * (Highstock) Highstock only. Force data grouping on all the axis'
         * series.
         *
         * @param dataGrouping
         *        A `dataGrouping` configuration. Use `false` to disable data
         *        grouping dynamically.
         *
         * @param redraw
         *        Whether to redraw the chart or wait for a later call to
         *        Chart#redraw.
         */
        setDataGrouping(dataGrouping?: (boolean|PlotSeriesDataGroupingOptions), redraw?: boolean): void;
    }
    interface Point {
        /**
         * Extend the tooltip formatter by adding support for the point.change
         * variable as well as the changeDecimals option.
         */
        tooltipFormatter(pointFormat: string): void;
    }
    interface Series {
        /**
         * Extend series.init by adding a method to modify the y value used for
         * plotting on the y axis. This method is called both from the axis when
         * finding dataMin and dataMax, and from the series.translate method.
         */
        init(): void;
        /**
         * Highstock only. Set the compare mode of the series after render time.
         * In most cases it is more useful running Axis#setCompare on the X axis
         * to update all its series.
         *
         * @param compare
         *        Can be one of `null`, `"percent"` or `"value"`.
         *
         * @see https://api.highcharts.com/class-reference/Highcharts.Series#setCompare
         */
        setCompare(compare: string): void;
    }
    /**
     * Factory function for creating new stock charts. Creates a new Chart
     * object with different default options than the basic Chart.
     *
     * @param options
     *        The chart options structure as described in the options reference.
     *
     * @param callback
     *        A function to execute when the chart object is finished loading
     *        and rendering. In most cases the chart is built in one thread, but
     *        in Internet Explorer version 8 or less the chart is sometimes
     *        initialized before the document is ready, and in these cases the
     *        chart object will not be finished synchronously. As a consequence,
     *        code that relies on the newly built Chart object should always run
     *        in the callback. Defining a chart.event.load handler is
     *        equivalent.
     *
     * @return The chart object.
     *
     * @see https://api.highcharts.com/class-reference/Highcharts#stockChart
     */
    function stockChart(options: Options, callback?: ChartCallbackFunction): Chart;
    /**
     * Factory function for creating new stock charts. Creates a new Chart
     * object with different default options than the basic Chart.
     *
     * @param renderTo
     *        The DOM element to render to, or its id.
     *
     * @param options
     *        The chart options structure as described in the options reference.
     *
     * @param callback
     *        A function to execute when the chart object is finished loading
     *        and rendering. In most cases the chart is built in one thread, but
     *        in Internet Explorer version 8 or less the chart is sometimes
     *        initialized before the document is ready, and in these cases the
     *        chart object will not be finished synchronously. As a consequence,
     *        code that relies on the newly built Chart object should always run
     *        in the callback. Defining a chart.event.load handler is
     *        equivalent.
     *
     * @return The chart object.
     *
     * @see https://api.highcharts.com/class-reference/Highcharts#stockChart
     */
    function stockChart(renderTo: (string|HTMLDOMElement), options: Options, callback?: ChartCallbackFunction): Chart;
    /**
     * When we have vertical scrollbar, rifles and arrow in buttons should be
     * rotated. The same method is used in Navigator's handles, to rotate them.
     *
     * @param path
     *        Path to be rotated.
     *
     * @param vertical
     *        If vertical scrollbar, swap x-y values.
     */
    function swapXY(path: Array<(number|string)>, vertical: boolean): Array<(number|string)>;
    /**
     * Return the other axis based on either the axis option or on related
     * series.
     */
    function getAxis(): void;
}
export default factory;
