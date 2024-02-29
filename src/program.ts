import { Command } from "commander";
import { argv } from "process";

export const program = new Command("wakatime-decompiler");
program
  .version("0.0.1")
  .description("A CLI for analyzing wakatime stats.")
  .option(
    "-i, --in <inFile>",
    "input file. must be relative to './res'",
    "in.json",
  )
  .option(
    "-n, --names <names>",
    "project name filter. multiple separated by ','",
  )
  .option(
    "-t, --time <time>",
    "date range name filter. format: 'YYYY-MM-DD,YYYY-MM-DD'",
  )
  .option(
    "-o, --out <outFile>",
    "output file. must be relative to './res'",
    "out.json",
  )
  .parse(argv);
