/*
 * Copyright (c) Highsoft AS. All rights reserved.
 */

const fs = require('fs');
const path = require('path');
const library = require('./library');

function install(definitionPath, definitionPattern, highchartsPath) {
    try {

        const packagePath = path.join(highchartsPath, 'package.json');
        if (!fs.existsSync(packagePath)) {
            throw new Error(
                'Highcharts v6 not found.'
            );
        }

        const packageJSON = JSON.parse(fs.readFileSync(packagePath));
        if (!packageJSON.version ||
            !packageJSON.version.startsWith('6.')
        ) {
            throw new Error(
                'Highcharts Declarations (Beta) requires Highcharts v6.'
            );
        }

        console.info(
            'Install declarations into Highcharts v' + packageJSON.version +
            ' package...'
        );
        let copyPath;
        library
            .getFiles(definitionPath, definitionPattern)
            .forEach(filePath => {
                copyPath = path.join(
                    highchartsPath, filePath.substr(definitionPath.length + 1)
                );
                library.makeDirectory(path.dirname(copyPath));
                fs.writeFileSync(
                    copyPath,
                    fs.readFileSync(filePath, ''),
                    { encoding: '', flag: 'w' }
                );
                console.info(
                    'Created',
                    path.relative(library.targetPath, copyPath)
                );
            });

        if (!packageJSON.types) {
            packageJSON.types = 'highcharts.d.ts';
            fs.writeFileSync(
                packagePath,
                JSON.stringify(packageJSON, undefined, '  ')
            );
            console.info(
                'Modified',
                path.relative(library.targetPath, copyPath)
            );
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

if (library.isNpmMode(library.definitionPath, library.highchartsPath)) {
    install(
        library.definitionPath,
        library.definitionPattern,
        library.highchartsPath
    );
}
