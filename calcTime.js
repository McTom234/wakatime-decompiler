"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var inFile = process.argv[2];
var inputFileContents = JSON.parse(fs.readFileSync(path.join(__dirname, inFile !== null && inFile !== void 0 ? inFile : "out.json"), "utf8"));
var times = {};
for (var _i = 0, inputFileContents_1 = inputFileContents; _i < inputFileContents_1.length; _i++) {
    var _a = inputFileContents_1[_i], date = _a.date, projects = _a.projects;
    var total = projects.reduce(function (total, project) {
        return (total +
            project.branches.reduce(function (totalOfBranches, branch) {
                return totalOfBranches + branch.total_seconds;
            }, 0));
    }, 0);
    var d = new Date(0);
    d.setSeconds(total);
    times[date] = d.toISOString().substring(11, 19);
}
console.log(times);
var totalTime = 0;
for (var _b = 0, _c = Object.values(times); _b < _c.length; _b++) {
    var time = _c[_b];
    var _d = time.split(":"), hours = _d[0], minutes = _d[1], seconds = _d[2];
    totalTime += parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
}
console.log(totalTime / 3600);
