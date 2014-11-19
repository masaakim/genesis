var marked = require("marked");
var hightlight = require("highlight.js");

marked.setOptions({
    highlight: function (code) {
        return hightlight.highlightAuto(code).value;
    }
});

module.exports = marked;
