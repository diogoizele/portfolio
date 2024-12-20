import * as enStrings from "./en-us";

export const strings: typeof enStrings.strings = {
  header: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    blog: "Blog",
    contact: "Contato",
    mobile: {
      view: {
        open: "Abrir Menu",
        close: "Fechar Menu",
      },
    },
    actions: {
      change: {
        theme: "Mudar tema para",
        language: "Mudar idioma para",
      },
      theme: {
        light: "Modo Claro",
        dark: "Modo Escuro",
      },
      lang: {
        en: "Inglês",
        pt: "Português",
      },
    },
  },
  home: {
    terminal: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      blog: "Blog",
      contact: "Contato",
      greetings: "Olá, me chamo Diogo Izele",
      subtitle: "Sou um desenvolvedor Full Stack",
      typing: {
        first: "E este é meu site pessoal",
        second: "Sejam bem-vindos",
      },
    },
  },
  about: {
    title: "Sobre mim.",
    greetings: {
      first: "Olá! 👋",
      second: "Me chamo",
      third: "Diogo Izele",
      fourth: "E sou um",
      fifth: {
        roles: [
          "Desenvolvedor Full Stack",
          "Analista de Sistemas",
          "Entusiasta de Tecnologia",
          "Solucionador de Problemas",
        ],
      },
    },
    presentation: {
      first: `Sempre tive muito interesse em saber como as coisas funcionavam "por
      debaixo dos panos”. Ao ingressar no ensino médio técnico em informática pelo
      Instituto Federal Sul Rio-Grandense, percebi que a computação me chamava mais
      atenção do que eu imaginava, especialmente a criação de aplicativos e sistemas. 
      Foi aí que decidi seguir carreira na área de tecnologia e me tornar um desenvolvedor.`,
      second: `Dentre as muitas coisas que aprendi trabalhando com Tecnologia da Informação
      reconheço que é essencial ter um bom raciocínio lógico, ser persistente, determinado,
      adaptável, paciente e gostar de resolver problemas.`,
      third: "Ficou com alguma dúvida? Entre em contato comigo!",
      download: {
        title: "Baixar currículo",
        description: "Baixar currículo de Diogo Izele em formato PDF",
      },
    },
  },
  projects: {},
  contact: {},
};
