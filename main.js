"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = require("process");
var fs = require("fs");
var path = require("path");
var inFile = process.argv[2];
var nameFilter = process.argv[3];
var outFile = process.argv[4];
var nameFilters = nameFilter === null || nameFilter === void 0 ? void 0 : nameFilter.split(",");
var inputFileContents = JSON.parse(fs.readFileSync(path.join(__dirname, inFile !== null && inFile !== void 0 ? inFile : "in.json"), "utf8"));
var days = [];
for (var _i = 0, inputFileContents_1 = inputFileContents; _i < inputFileContents_1.length; _i++) {
    var inputFileContent = inputFileContents_1[_i];
    days.push({
        date: inputFileContent.date,
        projects: inputFileContent.projects.map(function (project) { return ({
            name: project.name,
            branches: project.branches.map(function (_a) {
                var name = _a.name, minutes = _a.minutes, seconds = _a.seconds, total_seconds = _a.total_seconds, hours = _a.hours;
                return ({
                    name: name,
                    total_seconds: total_seconds,
                    hours: hours,
                    seconds: seconds,
                    minutes: minutes,
                });
            }),
        }); }),
    });
}
var filteredDays;
for (var _a = 0, days_1 = days; _a < days_1.length; _a++) {
    var day = days_1[_a];
    filteredDays = days
        .map(function (day) {
        day.projects = day.projects
            .map(function (project) {
            project.branches = project.branches.filter(function (branch) { return branch.total_seconds > 0; });
            return project;
        })
            .filter(function (project) {
            return project.branches.length > 0 &&
                (nameFilters === null || nameFilters === void 0 ? void 0 : nameFilters.includes(project.name));
        });
        return day;
    })
        .filter(function (day) { return day.projects.length > 0; });
}
fs.writeFileSync(path.join(__dirname, outFile !== null && outFile !== void 0 ? outFile : "out.json"), JSON.stringify(filteredDays, null, 2));
