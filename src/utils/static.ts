import { BsMedium } from "react-icons/bs";
import { FaDev } from "react-icons/fa";
import {
  FiCodesandbox,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { SiReplit } from "react-icons/si";

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

export { ROLES, PRESENTATION, BEHAVIORAL, CONTACT };

export const SOCIAL_MEDIAS = [
  {
    href: "https://github.com/diogoizele",
    icon: FiGithub,
    title: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/diogoizele/",
    icon: FiLinkedin,
    title: "LinkedIn",
  },
  {
    href: "https://twitter.com/diogoizele",
    icon: FiTwitter,
    title: "Twitter",
  },
  {
    href: "https://www.youtube.com/@diogoizele",
    icon: FiYoutube,
    title: "YouTube",
  },
  {
    href: "https://dev.to/diogoizele",
    icon: FaDev,
    title: "Dev.to",
  },
  {
    href: "https://codesandbox.io/u/diogoizele",
    icon: FiCodesandbox,
    title: "Code Sandbox",
  },
  {
    href: "https://medium.com/@diogoizele",
    icon: BsMedium,
    title: "Medium",
  },
  {
    href: "https://replit.com/@diogoizele",
    icon: SiReplit,
    title: "Replit",
  },
];
