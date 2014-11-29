#!/usr/bin/env node

var optimist = require("optimist");
var argv = optimist.alias("V", "versions")
                   .alias("h", "help")
                   .alias("s", "size")
                   .argv;

var pkg = require("../package.json");
var fs = require("fs");
var Genesis = require("../");


if (argv.V) {
    console.log(pkg.version);
}


if (argv.h) {
    console.log("Usage: genesis markdown-file [options]");
    console.log("");
    console.log("Options:");
    console.log("");
    console.log("  -s, --size           poster size(A0 ~ A4)");
    console.log("  -d, --direction      poster size(A0 ~ A4)");
    console.log("  -V, --versions       output the version number");
    console.log("  -h, --help           output usage information");
}


if (argv._) {
    var md = fs.readfileSync(argv._[0], "utf-8");
    var options = {};

    if (argv.s) {
        options.size = argv.s;
    }

    if (argv.d) {
        options.direction = argv.d;
    }

    var genesis = new Genesis(md, options);
    fs.writeFile("poster.html", genesis.generate(), function (err) {
        if (err) {
            throw err;
        }
        console.log("Compiled.");
    });
}
