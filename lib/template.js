var path = require("path");
var fs = require("fs");
var _ = require("lodash");
var mkdirp = require("mkdirp");
var config = require("node-prefix");
var nodePrefix = config.prefix();
var globalModulePath = config.global("genesis");


module.exports = function (html, options) {
    var size = options.size;
    var height = "1189mm";
    var width = "841mm";

    if (size === "A1" || size === "a1") {
        height = "841mm";
        width = "594mm";
    } else if (size === "A2" || size === "a2") {
        height = "594mm";
        width = "420mm";
    } else if (size === "A3" || size === "a3") {
        height = "420mm";
        width = "297mm";
    } else if (size === "A4" || size === "a4") {
        height = "297mm";
        width = "210mm";
    }

    var templatePath = globalModulePath + "/template";
    var poster = _.template(fs.readFileSync(templatePath + "/poster.html").toString());
    poster = poster({
        "yield": html,
        "height": height,
        "width": width
    });

    var res = {};
    res.poster = poster;

    return res;
}
