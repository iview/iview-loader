const compiler = require('vue-template-compiler');

module.exports = function (source) {
    this.cacheable();
    return source;
};