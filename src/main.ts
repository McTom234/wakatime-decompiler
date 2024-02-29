import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import {
  DateProjectTimeOutput,
  DateTimeOutput,
  ExportFile,
  ProgramOptions,
  TimeOutput,
} from "./types";
import { parseFileToDays } from "./parseFileToDays";
import { filterDays } from "./filterDays";
import { parse } from "date-fns";
import { program } from "./program";
import { secondsToTime } from "./secondsToTime";

const { inFile, outFile, names, time } = program.opts<ProgramOptions>();

const projects = names?.split(",");

const dates = time?.split(",");

if (dates && dates.length !== 2) {
  console.error("Invalid date range");
  process.exit(1);
}

const startDate = dates ? parse(dates[0], "yyyy-MM-dd", new Date()) : undefined;
const endDate = dates ? parse(dates[1], "yyyy-MM-dd", new Date()) : undefined;

const inputFile = JSON.parse(
  readFileSync(join(__dirname, "../res", inFile ?? "in.json"), "utf8"),
) as ExportFile;

const days = filterDays(parseFileToDays(inputFile), {
  projects,
  interval:
    startDate && endDate
      ? {
          start: startDate,
          end: endDate,
        }
      : undefined,
});

const times: TimeOutput = {};

// iterate days and story day times in times
for (const { date, projects } of days) {
  const day: DateTimeOutput = {};
  let total: number = 0;
  // iterate projects of day
  for (const { branches, name } of projects) {
    let projectTotal = 0;
    const project: DateProjectTimeOutput = {};
    // iterate branches of project and store in project
    for (const { name: branchName, total_seconds } of branches) {
      projectTotal += total_seconds;
      project[branchName] = secondsToTime(total_seconds);
    }
    // store project and project total in day
    total += projectTotal;
    day[name] = [project, secondsToTime(projectTotal)];
  }
  // store day and day total
  times[date] = [day, secondsToTime(total)];
}

writeFileSync(
  join(__dirname, "../res", outFile ?? "out.json"),
  JSON.stringify(times, null, 2),
);
