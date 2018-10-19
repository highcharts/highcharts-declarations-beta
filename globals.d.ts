/**
 * Reference to the global SVGElement class as a workaround for a name conflict
 * in the Highcharts namespace.
 */
export type GlobalSVGElement = SVGElement;
export interface AjaxSettings {
    /**
     * The payload to send
     */
    data: object;
    /**
     * The data type expected
     */
    dataType: ('json'|'octet'|'text'|'xml');
    /**
     * Function to call on error
     */
    error: () => void;
    /**
     * The headers; keyed on header name
     */
    headers: object;
    /**
     * Function to call on success
     */
    success: () => void;
    /**
     * The verb to use
     */
    type: ('delete'|'get'|'post'|'update');
    /**
     * The URL to call
     */
    url: string;
}
