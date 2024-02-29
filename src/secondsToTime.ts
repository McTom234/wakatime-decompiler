export const secondsToTime = (seconds: number) => {
    const d = new Date(0);
    d.setSeconds(seconds);
    return d.toISOString().substring(11, 19);
};