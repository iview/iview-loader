"use strict";

const loaderUtils = require('loader-utils');
const { tag, prefixTag } = require('./tag-map');

function replaceTag(source, tagMap) {
    for (let i in tagMap) {
        const reg1 = new RegExp(`<${i}(?!-)`, 'g');
        source = source.replace(reg1, `<${tagMap[i]}`);

        const reg2 = new RegExp(`<\/${i}>`, 'g');
        source = source.replace(reg2, `<\/${tagMap[i]}>`);
    }
    return source
}

module.exports = function (source) {
    const options = loaderUtils.getOptions(this);

    this.cacheable();

    let newSource = source;
    newSource = replaceTag(newSource, tag)

    if ('prefix' in options && options.prefix) {
        newSource = replaceTag(newSource, prefixTag)
    }

    console.log(newSource)
    return newSource;
};