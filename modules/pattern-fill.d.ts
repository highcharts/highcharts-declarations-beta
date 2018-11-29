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
     * Holds a pattern definition.
     */
    interface PatternObject {
        /**
         * Animation options for the image pattern loading.
         */
        animation?: (boolean|AnimationOptionsObject);
        /**
         * Pattern options
         */
        pattern: PatternOptionsObject;
    }
    /**
     * Pattern options
     */
    interface PatternOptionsObject {
        /**
         * For automatically calculated width and height on images, it is
         * possible to set an aspect ratio. The image will be zoomed to fill the
         * bounding box, maintaining the aspect ratio defined.
         */
        aspectRatio: number;
        /**
         * Pattern color, used as default path stroke.
         */
        color: ColorString;
        /**
         * Analogous to pattern.width.
         */
        height: number;
        /**
         * ID to assign to the pattern. This is automatically computed if not
         * added, and identical patterns are reused. To refer to an existing
         * pattern for a Highcharts color, use `color: "url(#pattern-id)"`.
         */
        id: string;
        /**
         * URL to an image to use as the pattern.
         */
        image: string;
        /**
         * Opacity of the pattern as a float value from 0 to 1.
         */
        opacity: number;
        /**
         * Either an SVG path as string, or an object. As an object, supply the
         * path string in the `path.d` property. Other supported properties are
         * standard SVG attributes like `path.stroke` and `path.fill`. If a path
         * is supplied for the pattern, the `image` property is ignored.
         */
        path: (string|SVGAttributes);
        /**
         * Width of the pattern. For images this is automatically set to the
         * width of the element bounding box if not supplied. For non-image
         * patterns the default is 32px. Note that automatic resizing of image
         * patterns to fill a bounding box dynamically is only supported for
         * patterns with an automatically calculated ID.
         */
        with: number;
        /**
         * Horizontal offset of the pattern. Defaults to 0.
         */
        x?: number;
        /**
         * Vertical offset of the pattern. Defaults to 0.
         */
        y?: number;
    }
}
export default factory;
