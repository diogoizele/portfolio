export enum PATHS {
  ROOT = "/",
  HOME = "~",
  PORTFOLIO = "~/portfolio",
  BIN = "/bin",
  DEV = "/dev",
}

export const terminalPaths = {
  [PATHS.ROOT]: PATHS.ROOT,
  [PATHS.HOME]: PATHS.HOME,
  [PATHS.PORTFOLIO]: PATHS.PORTFOLIO,
  [PATHS.BIN]: PATHS.BIN,
  [PATHS.DEV]: PATHS.DEV,
};

export const pwdPaths = {
  [PATHS.ROOT]: PATHS.ROOT,
  [PATHS.HOME]: "/Users/diogoizele",
  [PATHS.PORTFOLIO]: "/Users/diogoizele/portfolio",
  [PATHS.BIN]: PATHS.BIN,
  [PATHS.DEV]: PATHS.DEV,
};
