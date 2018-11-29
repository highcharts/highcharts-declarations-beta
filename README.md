
# TypeScript Declarations (Beta) for Highcharts v6

These declaration files are in a beta state and incomplete. They are not
necessary for Highcharts v7. Even though the type definitions help in developing
Highcharts-based solutions in TypeScript, in some circumstances a partial cast
to the `any` type is necessary because of missing declarations.

This beta version contains declarations for the following imports:

- highcharts
- highcharts/highcharts-3d
- highcharts/highcharts-more
- highcharts/highmaps
- highcharts/highstock
- highcharts/indicators/*
- highcharts/modules/*



## Requirements

You have to install Highcharts before installing the declarations, use the following command:
```sh
npm install highcharts@6.2
```



## Install, update & uninstall

- To install or update this package, use the following command:
  ```sh
  npm install https://github.com/highcharts/highcharts-declarations-beta
  ```
  **Note:** This will add declaration files to the highcharts module. If you
  install a new version of Highcharts v6, you have to update this package too.

- To uninstall this package, use the following command:
  ```sh
  npm uninstall highcharts-declarations-beta
  ```
  **Note:** This will remove declaration files in the highcharts module.

- To install a specific version (for example v0.7.0), use the following command:
  ```sh
  npm install https://github.com/highcharts/highcharts-declarations-beta#v0.7.0
  ```


## Configuration

There is no extra configuration required. TypeScript will automatically detect
the declaration files in the highcharts module.



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
// Module with any type:
import NewModule from 'highcharts/modules/new';

NewModule(Highcharts);
AccessibilityModule(Highcharts);

// Initiate the chart
(Highcharts as any).newChart('container', {

    series: [{
        type: 'new',
        data: [1, 2, 3, 4, 5]
    }]

});
```
