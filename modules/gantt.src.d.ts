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
    /**
     * Factory function for Gantt charts.
     *
     * @param options
     *        The chart options structure.
     *
     * @param callback
     *        Function to run when the chart has loaded and and all external
     *        images are loaded. Defining a chart.event.load handler is
     *        equivalent.
     *
     * @return Returns the Chart object.
     *
     * @see https://api.highcharts.com/class-reference/Highcharts#ganttChart
     */
    function ganttChart(options: Options, callback?: ChartCallbackFunction): Chart;
    /**
     * Factory function for Gantt charts.
     *
     * @param renderTo
     *        The DOM element to render to, or its id.
     *
     * @param options
     *        The chart options structure.
     *
     * @param callback
     *        Function to run when the chart has loaded and and all external
     *        images are loaded. Defining a chart.event.load handler is
     *        equivalent.
     *
     * @return Returns the Chart object.
     *
     * @see https://api.highcharts.com/class-reference/Highcharts#ganttChart
     */
    function ganttChart(renderTo: (string|HTMLDOMElement), options: Options, callback?: ChartCallbackFunction): Chart;
    /**
     * getLevelOptions - Creates a map from level number to its given options.
     *
     * @param params
     *        Object containing parameters.
     *
     * @param defaults
     *        Object containing default options. The default options are merged
     *        with the userOptions to get the final options for a specific
     *        level.
     *
     * @param from
     *        The lowest level number.
     *
     * @param levels
     *        User options from series.levels.
     *
     * @param to
     *        The highest level number.
     *
     * @return Returns a map from level number to its given options. Returns
     *         null if invalid input parameters.
     */
    function getLevelOptions(params: object, defaults: object, from: number, levels: any[], to: number): (object|null);
    /**
     * Update the rootId property on the series. Also makes sure that it is
     * accessible to exporting.
     *
     * @param series
     *        The series to operate on.
     *
     * @return Returns the resulting rootId after update.
     */
    function updateRootId(series: object): void;
}
export default factory;
