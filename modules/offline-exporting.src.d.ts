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
        exportChartLocal(exportingOptions: OfflineExportingOptionsObject, chartOptions: Options): void;
    }
    /**
     * Download options for offline exporting.
     */
    interface OfflineExportingOptionsObject extends ExportingOptionsObject {
        /**
         * URL pointing to location of dependency scripts to download on demand.
         * By default, the module will load these file from our server. Internet
         * Explorer requires the canvg library in order to export to PNG and to
         * export charts with embedded images. PDF export also requires the
         * jsPDF and svg2pdf for all browsers.
         */
        libURL?: string;
        /**
         * Scaling factor of downloaded image compared to source.
         */
        scale?: number;
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
    function downloadSVGLocal(svg: string, options: OfflineExportingOptionsObject, failCallback: () => void, successCallback: () => void): void;
}
export default factory;
