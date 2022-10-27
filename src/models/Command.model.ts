import {
  PATHS,
  pwdPaths,
  terminalPaths,
} from "containers/terminal/tarminal.paths";

export type CommandType = "ls" | "cd" | "echo" | "pwd" | "clear";

export class Command {
  command: string;
  path: string;
  response: string | null | void;
  id: string;

  onChangePath: (path: string) => void;
  onClear: () => void;
  onNavigate: (path: string) => void;

  constructor(
    command: string,
    path: string,
    onChangePath: (path: string) => void,
    onClear: () => void,
    onNavigate: (path: string) => void
  ) {
    this.id = `${Math.random()}${new Date().getTime()}`;
    this.command = command;
    this.path = path;
    this.response = null;

    this.onChangePath = onChangePath;
    this.onClear = onClear;
    this.onNavigate = onNavigate;

    this.response = this.exec();
  }

  commandType() {
    const commandType = this.command.split(" ")[0].trim() as CommandType;

    return commandType;
  }

  exec() {
    const command = this.commandType();

    switch (command) {
      case "ls":
        return this.ls();
      case "cd":
        return this.cd();
      case "echo":
        return this.echo();
      case "pwd":
        return this.pwd();
      case "clear":
        return this.clear();
      default:
        return "Command not found";
    }
  }

  ls() {
    const argumentPath = this.command.split(" ")[1];

    const lsPath = argumentPath ? argumentPath : this.path;

    switch (lsPath) {
      case PATHS.HOME:
        return "portfolio";
      case PATHS.PORTFOLIO:
        return "Home About Projects Contact";
      case PATHS.ROOT:
        return "bin dev";
      case PATHS.BIN:
        return "ls cd echo pwd clear";
      case PATHS.DEV:
        return "";
      default:
        return `cannot access ${argumentPath ?? ""}: No such file or directory`;
    }
  }

  cd() {
    let path = this.command.substring(3);
    if (!path) {
      path = PATHS.HOME.toString();
    } else if (PATHS.HOME === path) {
      path = PATHS.HOME;
    } else if (PATHS.HOME === this.path && path.startsWith("./portfolio")) {
      path = PATHS.PORTFOLIO;
    } else if (this.path === PATHS.PORTFOLIO && path.startsWith("./")) {
      switch (path) {
        case "./Home":
          this.onNavigate("/");
          return;
        case "./About":
          this.onNavigate("/about");
          break;
        case "./Projects":
          this.onNavigate("/projects");
          break;
        case "./Contact":
          this.onNavigate("/contact");
          break;
        default:
          return `cannot access ${path}: No such file or directory`;
      }
    } else if (
      !path.startsWith("~") &&
      !path.startsWith("/") &&
      !path.startsWith("../")
    ) {
      path = `/${path}`;
    }

    const pathExists = terminalPaths[path];

    if (!pathExists) {
      return "No such file or directory";
    }

    this.onChangePath(path);

    return null;
  }

  echo() {
    return this.command.substring(5);
  }

  pwd() {
    return pwdPaths[this.path];
  }

  clear() {
    this.onClear();
  }
}
