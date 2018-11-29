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
    /**
     * draw - Handles the drawing of a point. TODO: add type checking.
     *
     * @param params
     *        Parameters.
     *
     * @return Returns undefined.
     */
    function draw(params: object): undefined;
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
