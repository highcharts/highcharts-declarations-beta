/*
 * Copyright (c) Highsoft AS. All rights reserved.
 */

const fs = require('fs');
const path = require('path');

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

function makeDirectory(directoryPath) {
    if (!fs.existsSync(directoryPath)) {
        makeDirectory(path.dirname(directoryPath));
        fs.mkdirSync(directoryPath);
    }
}

function install(definitionPath, highchartsPath) {
    try {
        let fileCopy = null;
        getFiles(definitionPath, '.d.ts').forEach(file => {
            fileCopy = path.join(
                highchartsPath, file.substr(definitionPath.length)
            );
            makeDirectory(path.dirname(fileCopy));
            fs.writeFileSync(
                fileCopy,
                fs.readFileSync(file, ''),
                ''
            );
            console.info('Created ', fileCopy);
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

function isInstallMode(definitionPath, highchartsPath) {
    return (
        endsWith(definitionPath, '/node_modules/highcharts-typescript-beta') ||
        endsWith(highchartsPath, '/node_modules/highcharts')
    );
}

const definitionPath = process.cwd();
const highchartsPath = path.resolve(definitionPath, '../highcharts');

if (isInstallMode(definitionPath, highchartsPath)) {
    install(definitionPath, highchartsPath);
}
