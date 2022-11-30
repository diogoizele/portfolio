import logoSbSistemas from "assets/svg/sbsistemas.svg";
import logoCWI from "assets/svg/cwi.svg";

const ROLES = ["Software", "Web", "Mobile", "Front-end"];

const PRESENTATION = `I've always been very interested in knowing: 
"how things work behind the scenes". At the age of 17, when I entered 
the technical high school in informatics at IFSUL - Passo Fundo, I saw 
that what caught my attention was technology, mainly the functioning 
of the programs. That's when I really started studying software development.`;
const BEHAVIORAL = `Working with programming, I learned that among many things 
it is necessary to be persistent, determined, adaptable, patient and enjoy solving problems.
`;
const CONTACT = `Any questions? I'm available to share thoughts! 
`;

const COMPANIES = [
  {
    id: 1,
    name: "SBSistemas",
    role: "Front-end and Mobile Developer",
    description: `During the time I was at the company, I worked on creating and maintaining the company's internal Design System. In addition to having actively participated in the development of the Solarfy mobile application with React Native.`,
    period: "Dec 2021 - Jun 2022 · 7 months",
    link: "https://www.sbsistemas.com.br/",
    image: logoSbSistemas,
  },
  {
    id: 2,
    name: "CWI Software",
    role: "Mobile Development Intern",
    description: `I do the development and maintenance of the mobile application for the Camicado stores, of the Renner Group, using React Native.`,
    period: "Jun 2022 - Present",
    link: "https://cwi.com.br/",
    image: logoCWI,
  },
];

export { ROLES, PRESENTATION, BEHAVIORAL, CONTACT, COMPANIES };
