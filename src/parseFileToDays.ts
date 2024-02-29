import { Day, ExportFile } from "./types";

export const parseFileToDays: (file: ExportFile) => Day[] = (file) => {
  const days: Day[] = [];

  for (const inputFileContent of file.days) {
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
  return days;
};
