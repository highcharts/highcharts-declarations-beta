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
     * Contains common information for a drag event on series points.
     */
    interface SeriesPointDragEventObject {
        /**
         * New points during drag.
         */
        newPoints: Dictionary<SeriesPointDragPointObject>;
        /**
         * Original data.
         */
        origin: object;
        /**
         * Prevent default drag action.
         */
        preventDefault: () => void;
        /**
         * Target point that caused the event.
         */
        target: Point;
        /**
         * Event type.
         */
        type: "drag";
    }
    /**
     * Contains information about a dragged points new values.
     */
    interface SeriesPointDragPointObject {
        /**
         * New values.
         */
        newValues: Dictionary<number>;
        /**
         * Dragged point.
         */
        point: Point;
    }
    /**
     * Contains common information for a drag event on series point.
     */
    interface SeriesPointDragStartEventObject {
        /**
         * Data property being dragged.
         */
        updateProp: Dictionary<number>;
    }
    /**
     * Contains common information for a drop event on series points.
     */
    interface SeriesPointDropEventObject {
        /**
         * New points after drop.
         */
        newPoints: Dictionary<SeriesPointDropPointObject>;
        /**
         * Number of new points.
         */
        numNewPoints: number;
        /**
         * Original data.
         */
        origin: object;
        /**
         * Prevent default drop action.
         */
        preventDefault: () => void;
        /**
         * Target point that caused the event.
         */
        target: Point;
        /**
         * Event type.
         */
        type: "drop";
    }
    /**
     * Contains information about a dropped points new values.
     */
    interface SeriesPointDropPointObject {
        /**
         * New values.
         */
        newValues: Dictionary<number>;
        /**
         * Dragged point.
         */
        point: Point;
    }
}
export default factory;
