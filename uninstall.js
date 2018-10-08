/*
 * Copyright (c) Highsoft AS. All rights reserved.
 */

const fs = require('fs');
const path = require('path');
const library = require('./library');

function uninstall(definitionPath, definitionPattern, highchartsPath) {
    try {
        let fileCopy,
            fileCopyStat,
            fileStat;
        library
            .getFiles(definitionPath, definitionPattern)
            .forEach(file => {
                fileStat = fs.statSync(file);
                fileCopy = path.resolve(
                    highchartsPath, file.substr(definitionPath.length + 1)
                );
                if (!fs.existsSync(fileCopy)) {
                    return;
                }
                fileCopyStat = fs.statSync(fileCopy);
                if (fileCopyStat.size === fileStat.size) {
                    fs.unlinkSync(file);
                }
                console.info(
                    'Deleted ',
                    fileCopy.substr(highchartsPath.length + 1)
                );
            });
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
