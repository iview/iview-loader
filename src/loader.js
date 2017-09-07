"use strict";

const loaderUtils = require('loader-utils');
const { tag, prefixTag } = require('./tag-map');

module.exports = function (source) {
    const options = loaderUtils.getOptions(this);

    this.cacheable();

    let newSource = source;
    for(let i in tag) {
        const reg1 = new RegExp(`<${i}`, 'g');
        newSource = newSource.replace(reg1, `<${tag[i]}`);

        const reg2 = new RegExp(`<\/${i}>`, 'g');
        newSource = newSource.replace(reg2, `<\/${tag[i]}>`);
    }

    if ('prefix' in options && options.prefix) {
        for(let i in prefixTag) {
            const reg1 = new RegExp(`<${i}`, 'g');
            newSource = newSource.replace(reg1, `<${prefixTag[i]}`);

            const reg2 = new RegExp(`<\/${i}>`, 'g');
            newSource = newSource.replace(reg2, `<\/${prefixTag[i]}>`);
        }
    }

    return newSource;
};