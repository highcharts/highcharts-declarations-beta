/*
 * Copyright (c) Highsoft AS. All rights reserved.
 */

const fs = require('fs');
const path = require('path');

export const definitionPath = process.cwd();
export const definitionPattern = '.d.ts';
export const highchartsPath = path.resolve(definitionPath, '../highcharts');

export function endsWith(str, pattern) {
    return (str.lastIndexOf(pattern) === (str.length - pattern.length));
}

export function getFiles(directoryPath, endPattern) {
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

export function makeDirectory(directoryPath) {
    if (!fs.existsSync(directoryPath)) {
        makeDirectory(path.dirname(directoryPath));
        fs.mkdirSync(directoryPath);
    }
}

export function isNpmMode(definitionPath, highchartsPath) {
    return (
        endsWith(definitionPath, '/node_modules/highcharts-typescript-beta') ||
        endsWith(highchartsPath, '/node_modules/highcharts')
    );
}
