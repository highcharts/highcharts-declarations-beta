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
    interface AnnotationAnchorObject {
        /**
         * Absolute position
         */
        absolutePosition: AnnotationAnchorPositionObject;
        /**
         * Relative to the plot area position
         */
        relativePosition: AnnotationAnchorPositionObject;
    }
    /**
     * An object which denotes an anchor position
     */
    interface AnnotationAnchorPositionObject {
        height: any;
        width: any;
        x: any;
        y: any;
    }
    interface Chart {
        /**
         * Add an annotation to the chart after render time.
         *
         * @param options
         *        The series options for the new, detailed series.
         *
         * @return The newly generated annotation.
         */
        addAnnotation(options: AnnotationsOptions): Annotation;
        /**
         * Remove an annotation from the chart.
         *
         * @param id
         *        The annotation's id.
         */
        removeAnnotation(id: string): void;
    }
    /**
     * An annotation class which serves as a container for items like labels or
     * shapes. Created items are positioned on the chart either by linking them
     * to existing points or created mock points
     */
    class Annotation {
        /**
         * An annotation class which serves as a container for items like labels
         * or shapes. Created items are positioned on the chart either by
         * linking them to existing points or created mock points
         *
         * @param chart
         *        The chart object
         *
         * @param userOptions
         *        The options object
         */
        constructor(chart: Chart, userOptions: AnnotationsOptions);
        /**
         * The chart that the annotation belongs to.
         */
        chart: Chart;
        /**
         * The array of labels which belong to the annotation.
         */
        labels: Array<SVGElement>;
        /**
         * The options for the annotations. It contains user defined options
         * merged with the default options.
         */
        options: AnnotationsOptions;
        /**
         * The array of shapes which belong to the annotation.
         */
        shapes: Array<SVGElement>;
        /**
         * The user options for the annotations.
         */
        userOptions: AnnotationsOptions;
        /**
         * Destroy the annotation. This function does not touch the chart that
         * the annotation belongs to (all annotations are kept in the
         * chart.annotations array) - it is recommended to use
         * Highcharts.Chart#removeAnnotation instead.
         */
        destroy(): void;
        /**
         * Initialize the annotation.
         */
        init(): void;
        /**
         * Main method for drawing an annotation.
         */
        redraw(): void;
        /**
         * Render the annotation.
         */
        render(): void;
        /**
         * Set the annotation's visibility.
         *
         * @param visibility
         *        Whether to show or hide an annotation. If the param is
         *        omitted, the annotation's visibility is toggled.
         */
        setVisible(visibility?: boolean): void;
    }
}
export default factory;
