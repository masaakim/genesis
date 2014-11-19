var md_parse = require("./parse-markdown");
var template = require("./template");

module.exports = Genesis;

function Genesis (md, options) {
    if (!(this instanceof Genesis)) {
        return new Genesis(str, options);
    }

    options = options || {};

    this.md = md;
}

Genesis.prototype.generate = function () {
    var html = md_parse(this.md);
    return template(html, options);
};
