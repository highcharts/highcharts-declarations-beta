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
     * A dictionary with formulas for calculating number of bins based on the
     * base series
     */
    let binsNumberFormulas: any;
    /**
     * Returns a function for mapping number to the closed (right opened) bins
     *
     * @param binWidth
     *        width of the bin
     */
    function fitToBinLeftClosed(binWidth: number): () => void;
    /**
     * ***************************************************************************
     *
     * BELL CURVE
     */
    function mean(): void;
}
export default factory;
