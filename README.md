
# Type definitions (beta) for Highcharts v6

These declaration files are in a beta state and incomplete. Even though they
help in developing Highcharts-based solutions, in some circumstances a partial
cast to the `any` type is necessary because of missing declarations.

This beta contains declarations for the following imports:

- highcharts
- highcharts/modules/accessibility
- highcharts/modules/export-data
- highcharts/modules/exporting
- highcharts/modules/offline-exporting
- highcharts/modules/series-label
- highcharts/modules/vector



## Workaround for missing declarations

To combine these existing declarations with missing ones, you have to cast
modules and unknown functions to the `any` type. At first you have to create a
'global.d.ts' file in your root folder with the following file content:

```TypeScript
declare module '*';
```

Now you can use all JavaScript modules and cast the Highcharts namespace as
required. For example:

```TypeScript
import * as Highcharts from 'highcharts';
// Module with declaration:
import AccessibilityModule from 'highcharts/modules/accessibility';
// Modules with any type:
import BoostModule from 'highcharts/modules/boost';
import StockModule from 'highcharts/modules/stock';

StockModule(Highcharts);
BoostModule(Highcharts);
AccessibilityModule(Highcharts);

(Highcharts as any).stockChart('container', {
    chart: {
        borderWidth: 1
    },
    plotOptions: {
        series: {
            boostThreshold: 1
        }
    },
    rangeSelector: {
        selected: 1
    },
    series: [{
        type: 'line',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        tooltip: {
            valueDecimals: 2
        }
    } as Highcharts.SeriesLineOptions]
} as Highcharts.Options);
```
