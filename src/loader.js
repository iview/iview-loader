"use strict";

const loaderUtils = require('loader-utils');
const { tag, prefixTag } = require('./tag-map');

module.exports = function (source) {
    const options = loaderUtils.getOptions(this);

    this.cacheable();

    if ('prefix' in options && options.prefix) {

    }

    return source.replace('<Select', '<select');
};