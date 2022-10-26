function getLsCommandPath(path: string) {
  switch (path) {
    case "/":
      return "portfolio";
    case "/portfolio":
      return "Home About Projects Contact";
  }
}

function setNewPath(path: string, handleNewPath: (path: string) => void) {
  switch (path) {
    case "/":
      handleNewPath("/");
      break;
    case "/portfolio":
      handleNewPath("/portfolio");
      break;
    case "../":
      handleNewPath("/");
      break;
    default:
      return "Invalid path";
  }
}

export function terminalCommandReader(command: string, ...args) {
  if (command.startsWith("ls")) {
    return getLsCommandPath(args[0]);
  } else if (command.startsWith("cd")) {
    let path = command.substring(3);

    if (!path.startsWith("/") && !path.startsWith("../")) {
      path = `/${path}`;
    }

    return setNewPath(path, args[1]);
  } else if (command.startsWith("echo")) {
    return command.substring(5);
  }

  return "Command not found";
}
