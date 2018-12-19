/*
 * Copyright (c) Highsoft AS. All rights reserved.
 */

const fs = require('fs');
const path = require('path');
const library = require('./library');

function uninstall(definitionPath, definitionPattern, highchartsPath) {
    try {

        const packagePath = path.join(highchartsPath, 'package.json');
        if (!fs.existsSync(packagePath)) {
            return;
        }

        const packageJSON = JSON.parse(fs.readFileSync(packagePath));
        if (!packageJSON.version ||
            !packageJSON.version.startsWith('6.')
        ) {
            return;
        }

        console.info(
            'Remove declarations from Highcharts v' + packageJSON.version +
            ' package...'
        );
        let copyPath,
            copyStat,
            fileStat,
            mainDeleted = false;
        library
            .getFiles(definitionPath, definitionPattern)
            .forEach(filePath => {
                copyPath = path.resolve(
                    highchartsPath, filePath.substr(definitionPath.length + 1)
                );
                if (!fs.existsSync(copyPath)) {
                    return;
                }
                fileStat = fs.statSync(filePath);
                copyStat = fs.statSync(copyPath);
                if (copyStat.size !== fileStat.size) {
                    return;
                }
                fs.unlinkSync(copyPath);
                mainDeleted = (
                    mainDeleted ||
                    library.endsWith(copyPath, 'highcharts.d.ts')
                );
                console.info(
                    'Deleted',
                    path.relative(library.targetPath, copyPath)
                );
            });

        if (mainDeleted &&
            packageJSON.types
        ) {
            delete packageJSON.types;
            fs.writeFileSync(
                packagePath,
                JSON.stringify(packageJSON, undefined, '  ')
            );
            console.info(
                'Modified',
                path.relative(library.targetPath, packagePath)
            );
        }
    }
    catch (err) {
        console.error(err);
    }
}

if (library.isNpmMode(library.definitionPath, library.highchartsPath)) {
    uninstall(
        library.definitionPath,
        library.definitionPattern,
        library.highchartsPath
    );
}
