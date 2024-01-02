import * as process from "process";
import * as fs from "fs";
import * as path from "path";
import { Day } from "./types";

const inFile = process.argv[2];
const nameFilter = process.argv[3];
const outFile = process.argv[4];

const nameFilters = nameFilter?.split(",");

const inputFileContents = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../res", inFile ?? "in.json"), "utf8"),
) as Day[];

const days: Day[] = [];

for (const inputFileContent of inputFileContents) {
  days.push({
    date: inputFileContent.date,
    projects: inputFileContent.projects.map((project) => ({
      name: project.name,
      branches: project.branches.map(
        ({ name, minutes, seconds, total_seconds, hours }) => ({
          name,
          total_seconds,
          hours,
          seconds,
          minutes,
        }),
      ),
    })),
  });
}

let filteredDays: Day[] = days
  .map((day) => {
    day.projects = day.projects
      .map((project) => {
        project.branches = project.branches.filter(
          (branch) => branch.total_seconds > 0,
        );
        return project;
      })
      .filter(
        (project) =>
          project.branches.length > 0 &&
          (nameFilters ? nameFilters?.includes(project.name) : true),
      );
    return day;
  })
  .filter((day) => day.projects.length > 0);

fs.writeFileSync(
  path.join(__dirname, "../res", outFile ?? "out.json"),
  JSON.stringify(filteredDays, null, 2),
);
