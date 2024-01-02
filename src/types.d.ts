export interface Day {
  date: string;
  projects: Project[];
}

export interface Project {
  branches: Branch[];
  name: string;
}

export interface Branch {
  hours: number;
  minutes: number;
  seconds: number;
  name: string;
  total_seconds: number;
}
