const path = require('path');
const psd2json = require('psd2json');
const psd2sprite = require('psd2sprite');

// IN:/psd/sample.psd OUT:/assets/layouts
const psdFilePath = path.resolve('psd', 'sample.psd');
const outDir = path.resolve('assets', 'layouts');

psd2json(psdFilePath, outDir);
psd2sprite(psdFilePath, outDir);
