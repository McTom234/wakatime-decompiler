import * as fs from "fs";
import * as path from "path";
import { Day } from "./types";

const inFile = process.argv[2];

const inputFileContents = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../res", inFile ?? "out.json"), "utf8"),
) as Day[];

const times: { [date: string]: string } = {};

for (const { date, projects } of inputFileContents) {
  const total = projects.reduce((total, project) => {
    return (
      total +
      project.branches.reduce((totalOfBranches, branch) => {
        return totalOfBranches + branch.total_seconds;
      }, 0)
    );
  }, 0);
  const d = new Date(0);
  d.setSeconds(total);
  times[date] = d.toISOString().substring(11, 19);
}

console.log(times);

let totalTime = 0;
for (const time of Object.values(times)) {
  const [hours, minutes, seconds] = time.split(":");
  totalTime +=
    parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
}
console.log(totalTime / 3600);
