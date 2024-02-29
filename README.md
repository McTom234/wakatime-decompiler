# wakatime-decompiler

## How to use

### Export daily code stats

1. Go to https://wakatime.com/settings/account and look for the section `Export`.
2. Export your code stats, use the type `daily`.
3. Download and put this file in `./res/in.json`.

### Prepare the repo

1. Run `pnpm link --global` to make the repo available to the command line.
2. run `pnpm build`

### Prepare the stats file

1. Run `wakatime-clean`
2. Open the file using any editor you wish (file should be small enough for most editors)
