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
    interface Chart {
        /**
         * Exporting and offline-exporting modules required. Export a chart to
         * an image locally in the user's browser. Requires the regular
         * exporting module.
         *
         * @param exportingOptions
         *        Exporting options, the same as in
         *        Highcharts.Chart#exportChart.
         *
         * @param chartOptions
         *        Additional chart options for the exported chart. For example a
         *        different background color can be added here, or `dataLabels`
         *        for export only.
         */
        exportChartLocal(exportingOptions: ExportingOptions, chartOptions: Options): void;
    }
    /**
     * Get data URL to an image of an SVG and call download on it options
     * object:
     *
     * - **filename:** Name of resulting downloaded file without extension.
     * Default is `chart`.
     *
     * - **type:** File type of resulting download. Default is `image/png`.
     *
     * - **scale:** Scaling factor of downloaded image compared to source.
     * Default is `1`.
     *
     * - **libURL:** URL pointing to location of dependency scripts to download
     * on demand. Default is the exporting.libURL option of the global
     * Highcharts options pointing to our server.
     *
     *
     *
     *
     */
    function downloadSVGLocal(svg: string, options: ExportingOptions, failCallback: () => void, successCallback: () => void): void;
}
export default factory;
