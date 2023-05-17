export const logs = (...message: any[]) => {
  process.env.APP_ENV && console.log(`[LOG] -`, ...message);
};
