import babelIcon from "assets/devicons/babel.svg";
import cssIcon from "assets/devicons/css3.svg";
import bashIcon from "assets/devicons/bash.svg";
import gitIcon from "assets/devicons/git.svg";
import htmlIcon from "assets/devicons/html5.svg";
import javaIcon from "assets/devicons/java.svg";
import javascriptIcon from "assets/devicons/javascript.svg";
import jetbrainsIcon from "assets/devicons/jetbrains.svg";
import linuxIcon from "assets/devicons/linux.svg";
import markdownIcon from "assets/devicons/markdown.svg";
import materialuiIcon from "assets/devicons/materialui.svg";
import nextjsIcon from "assets/devicons/nextjs.svg";
import nodejsIcon from "assets/devicons/nodejs.svg";
import pythonIcon from "assets/devicons/python.svg";
import reactIcon from "assets/devicons/react.svg";
import reduxIcon from "assets/devicons/redux.svg";
import sassIcon from "assets/devicons/sass.svg";
import tailwindIcon from "assets/devicons/tailwindcss.svg";
import typescriptIcon from "assets/devicons/typescript.svg";
import vscodeIcon from "assets/devicons/vscode.svg";
import vuejsIcon from "assets/devicons/vuejs.svg";
import webpackIcon from "assets/devicons/webpack.svg";
import yarnIcon from "assets/devicons/yarn.svg";

export const TOOLS_AND_TECHS = [
  { title: "HTML5", src: htmlIcon },
  { title: "Babel", src: babelIcon },
  { title: "CSS3", src: cssIcon },
  { title: "Bash", src: bashIcon },
  { title: "Git", src: gitIcon },
  { title: "Java", src: javaIcon },
  { title: "JavaScript", src: javascriptIcon },
  { title: "JetBrains", src: jetbrainsIcon },
  { title: "Linux", src: linuxIcon },
  { title: "Markdown", src: markdownIcon },
  { title: "Material UI", src: materialuiIcon },
  { title: "NextJS", src: nextjsIcon },
  { title: "NodeJS", src: nodejsIcon },
  { title: "Python", src: pythonIcon },
  { title: "React", src: reactIcon },
  { title: "Redux", src: reduxIcon },
  { title: "Sass", src: sassIcon },
  { title: "TailwindCSS", src: tailwindIcon },
  { title: "Typescript", src: typescriptIcon },
  { title: "VSCode", src: vscodeIcon },
  { title: "Vue.js", src: vuejsIcon },
  { title: "Webpack", src: webpackIcon },
  { title: "Yarn", src: yarnIcon },
].sort((a, b) => a.title.localeCompare(b.title));
