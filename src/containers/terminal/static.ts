interface TerminalCommand {
  id: string;
  command: string;
  response: string;
  path: string;
}

export const INITIAL_COMMANDS: TerminalCommand[] = [
  {
    id: "1",
    command: "pwd",
    response: "c:/diogoizele/portfolio",
    path: "/portfolio",
  },
  {
    id: "2",
    command: "ls",
    response: "Home About Projects Contact",
    path: "/portfolio",
  },
  {
    id: "3",
    command: "cd ../",
    response: null,
    path: "/portfolio",
  },
  {
    id: "4",
    command: "echo Hello, my name is Diogo Izele",
    response: "Hello, my name is Diogo Izele",
    path: "~",
  },
  {
    id: "5",
    command: "echo I'm a Web developer",
    response: "I'm a Web developer",
    path: "~",
  },
];
