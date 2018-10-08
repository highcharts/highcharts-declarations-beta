/*
 * Copyright (c) Highsoft AS. All rights reserved.
 */

const fs = require('fs');
const path = require('path');

const definitionPath = process.cwd();
const definitionPattern = '.d.ts';
const highchartsPath = path.resolve(definitionPath, '../highcharts');

function endsWith(str, pattern) {
    return (str.lastIndexOf(pattern) === (str.length - pattern.length));
}

function getFiles(directoryPath, endPattern) {
    const files = [];
    let itemPath = [],
        itemStat = null;
    fs.readdirSync(directoryPath).forEach(item => {
        itemPath = path.join(directoryPath, item);
        itemStat = fs.statSync(itemPath);
        if (itemStat.isFile() &&
            endsWith(itemPath, endPattern)
        ) {
            files.push(itemPath);
        } else if (itemStat.isDirectory()) {
            files.push(...getFiles(itemPath, endPattern));
        }
    });
    return files;
}

function isNpmMode(definitionPath, highchartsPath) {
    return (
        endsWith(definitionPath, '/node_modules/highcharts-typescript-beta') ||
        endsWith(highchartsPath, '/node_modules/highcharts')
    );
}

function makeDirectory(directoryPath) {
    if (!fs.existsSync(directoryPath)) {
        makeDirectory(path.dirname(directoryPath));
        fs.mkdirSync(directoryPath);
    }
}

module.exports = {
    // constants
    definitionPath: definitionPath,
    definitionPattern: definitionPattern,
    highchartsPath: highchartsPath,
    // functions
    endsWith: endsWith,
    getFiles: getFiles,
    isNpmMode: isNpmMode,
    makeDirectory: makeDirectory
}
