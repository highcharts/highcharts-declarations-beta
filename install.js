/*
 * Copyright (c) Highsoft AS. All rights reserved.
 */

const fs = require('fs');
const path = require('path');
const library = require('./library');

function install(definitionPath, definitionPattern, highchartsPath) {
    try {
        let fileCopy;
        library
            .getFiles(definitionPath, definitionPattern)
            .forEach(file => {
                fileCopy = path.resolve(
                    highchartsPath, file.substr(definitionPath.length + 1)
                );
                library.makeDirectory(path.dirname(fileCopy));
                fs.writeFileSync(
                    fileCopy,
                    fs.readFileSync(file, ''),
                    { encoding: '', flag: 'w' }
                );
                console.info(
                    'Created',
                    fileCopy.substr(highchartsPath.length + 1)
                );
            });
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
