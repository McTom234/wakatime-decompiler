import { Day } from "./types";
import { Interval, isWithinInterval } from "date-fns";

export const filterDays: (
  days: Day[],
  filters?: { interval?: Interval; projects?: string[] },
) => Day[] = (days, filters = {}) => {
  return days
    .filter(({ date }) =>
      filters.interval
        ? isWithinInterval(new Date(date), filters.interval)
        : true,
    )
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
            (filters.projects
              ? filters.projects?.includes(project.name)
              : true),
        );
      return day;
    })
    .filter((day) => day.projects.length > 0);
};
