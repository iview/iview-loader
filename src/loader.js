"use strict";

const loaderUtils = require("loader-utils");

module.exports = function (source) {
    const options = loaderUtils.getOptions(this);

    this.cacheable();

    return source.replace('<Select', '<select');
};