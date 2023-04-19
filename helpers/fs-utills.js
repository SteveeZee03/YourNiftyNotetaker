const express = require('express');
const fs = require('fs')
const util = require('util');

const readFromFile = util.promisify(fs.readFile);



const writeToFile = (path, content) => {
    fs.writeFile(path, JSON.stringify(content), (err) => {
        err ? console.log(err) : console.log(`content now printed to ${path}`);
        });
};


const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parseData = JSON.parse(data);
            parseData.push(content);
            writeToFile(file, parseData)
        }
    });
};

module.exports = { readFromFile, writeToFile, readAndAppend }