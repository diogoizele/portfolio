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
    description: `I'm currently working as a Software Developer at Casa do Código,
        a company that develops and sells books and courses on the subject of software development.
        `,
    period: "2020 - Present",
    link: "https://www.sbsistemas.com.br/",
    image: logoSbSistemas,
  },
  {
    id: 2,
    name: "CWI Software",
    role: "Mobile Development Intern",
    description: `I'm currently studying at IFSUL - Passo Fundo, a technical high school in informatics.
        `,
    period: "2017 - Present",
    link: "https://cwi.com.br/",
    image: logoCWI,
  },
];

export { ROLES, PRESENTATION, BEHAVIORAL, CONTACT, COMPANIES };
