import { MdDesignServices } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { SiTypescript } from "react-icons/si";
import { DiReact, DiScrum } from "react-icons/di";

import logoSbSistemas from "assets/svg/sbsistemas.svg";
import logoCWI from "assets/svg/cwi.svg";
import logoUnisinos from "assets/svg/unisinos.svg";
import logoIFSUL from "assets/svg/ifsul.svg";
import logoAtitus from "assets/svg/atitus.svg";

const ROLES = ["Software", "Web", "Mobile", "Front-end"];

const PRESENTATION = `I've always been very interested in knowing: 
"how things work behind the scenes". At the age of 17, when I entered 
the technical high school in informatics at IFSUL - Passo Fundo, I saw 
that what caught my attention was technology, mainly the functioning 
of the programs. That's when I really started studying software development.`;
const BEHAVIORAL = `Working with programming, I learned that among many things 
it is necessary to be persistent, determined, adaptable, patient and enjoy solving problems.
`;
const CONTACT = `Any questions? I'm available to chat!  
`;

const COMPANIES = [
  {
    id: 0,
    name: "CWI Software",
    role: "Mobile Development Intern",
    description: `I do the development and maintenance of the mobile application for the Camicado stores, of the Renner Group, using React Native.`,
    period: "Jun 2022 - Present",
    link: "https://cwi.com.br/",
    image: logoCWI,
    highlights: [
      { title: "Mobile App", Icon: CiMobile3 },
      { title: "React Native", Icon: DiReact },
      { title: "Scrum", Icon: DiScrum },
    ],
  },
  {
    id: 1,
    name: "SBsistemas",
    role: "Front-end and Mobile Developer",
    description: `During the time I was at the company, I worked on creating and maintaining the company's internal Design System. In addition to having actively participated in the development of the Solarfy mobile application with React Native.`,
    period: "Dec 2021 - Jun 2022 · 7 months",
    link: "https://www.sbsistemas.com.br/",
    image: logoSbSistemas,
    highlights: [
      { title: "Design System", Icon: MdDesignServices },
      { title: "Mobile App", Icon: CiMobile3 },
      { title: "Typescript", Icon: SiTypescript },
    ],
  },
];

const EDUCATION = [
  {
    id: 1,
    name: "University of Vale do Rio dos Sinos",
    role: "Bachelor's Degree, Information Systems",
    description: `Some of the functions are: systems analyst, business analyst, 
    responsible for technological areas and consultant/auditor in the area of 
    information systems.`,
    period: "2022 - 2026",
    link: "https://www.unisinos.br/",
    image: logoUnisinos,
  },
  {
    id: 2,
    name: "IFSUL - Federal Institute Sul-rio-grandense",
    role: "Integrated High School, Computing",
    description: `Graduates of the course will be able to work in several business areas, carrying out computer maintenance activities, designing and configuring computer networks and developing desktop and web systems, with systems development being the main focus of the course.`,
    period: "2019 - 2022",
    link: "http://passofundo.ifsul.edu.br/",
    image: logoIFSUL,
  },
  {
    id: 3,
    name: "Atitus Education",
    role: "#TeuFuturo - Professional course in Computer Science",
    description: `The #TeuFuturo program provides high school students with opportunities to discover and develop talent to pursue a career in Computer Science, offering technical and behavioral training and connecting with internships or first jobs in companies that require these professionals.`,
    period: "Apr 2021 - Nov 2021",
    link: "https://www.atitus.edu.br/",
    image: logoAtitus,
  },
];

export { ROLES, PRESENTATION, BEHAVIORAL, CONTACT, COMPANIES, EDUCATION };
