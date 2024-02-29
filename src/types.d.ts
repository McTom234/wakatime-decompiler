export interface ExportFile {
  user: WakaTimeUser;
  range: {
    start: number;
    end: number;
  };
  days: Day[];
}

interface WakaTimeUser {
  bio: unknown;
  city: unknown;
  color_scheme: "Dark" | unknown;
  created_at: "2022-04-13T21:36:26Z" | Date | unknown;
  date_format: "YYYY-MM-DD" | unknown;
  default_dashboard_range: "Last 7 Days" | unknown;
  display_name: "Anonymous User" | unknown;
  durations_slice_by: "Language" | unknown;
  email: "mc_tom234@gmx.de" | unknown;
  full_name: null | unknown;
  github_username: null | unknown;
  has_basic_features: false | unknown;
  has_premium_features: false | unknown;
  human_readable_website: null | unknown;
  id: "1f8ae749-316a-491c-b33c-08670af5c4ac" | unknown;
  invoice_id_format: "Inv#{y}-{m}-{ii}" | unknown;
  is_email_confirmed: true | unknown;
  is_email_public: false | unknown;
  is_hireable: false | unknown;
  is_onboarding_finished: true | unknown;
  languages_used_public: false | unknown;
  last_branch: "main" | unknown;
  last_heartbeat_at: "2024-02-29T15:04:18Z" | unknown;
  last_plugin:
    | "wakatime/v1.90.0 (linux-6.7.6-zen1-1-zen-unknown) go1.22.0 webstorm/2023.3.4 webstorm-wakatime/14.3.11"
    | unknown;
  last_plugin_name: "Webstorm" | unknown;
  last_project: "wakatime-decompiler" | unknown;
  linkedin_username: null | unknown;
  location: null | unknown;
  logged_time_public: false | unknown;
  meetings_over_coding: false | unknown;
  modified_at: "2024-02-28T09:37:10Z" | unknown;
  needs_payment_method: false | unknown;
  photo:
    | "https://wakatime.com/photo/1f8ae749-316a-491c-b33c-08670af5c4ac"
    | unknown;
  photo_public: true | unknown;
  plan: "free" | unknown;
  profile_url:
    | "https://wakatime.com/@1f8ae749-316a-491c-b33c-08670af5c4ac"
    | unknown;
  profile_url_escaped:
    | "https://wakatime.com/@1f8ae749-316a-491c-b33c-08670af5c4ac"
    | unknown;
  public_email: null | unknown;
  public_profile_time_range: "last_7_days" | unknown;
  share_all_time_badge: null | unknown;
  share_last_year_days: null | unknown;
  show_machine_name_ip: false | unknown;
  time_format_24hr: true | unknown;
  time_format_display: "text" | unknown;
  timeout: 5 | unknown;
  timezone: "Europe/Berlin" | unknown;
  twitter_username: null | unknown;
  username: null | unknown;
  website: null | unknown;
  weekday_start: 1 | unknown;
  wonderfuldev_username: null | unknown;
  writes_only: false | unknown;
}

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

export interface TimeOutput {
  [date: string]: [DateTimeOutput, string];
}

export interface DateTimeOutput {
  [project: string]: [DateProjectTimeOutput, string];
}

export interface DateProjectTimeOutput {
  [branch: string]: string;
}

export interface ProgramOptions {
  inFile?: string;
  outFile?: string;
  names?: string;
  time?: string;
}
