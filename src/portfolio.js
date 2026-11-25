/* Configuração pessoal do portfólio */

const settings = {
  isSplash: false,
};

const seo = {
  title: "Arthur Perozin | Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack com 4 anos de experiência, focado em IA aplicada, backends de alto desempenho e arquitetura limpa (DDD, TDD e Clean Architecture).",
  og: {
    title: "Arthur Perozin | Desenvolvedor Full Stack",
    type: "website",
    url: "https://artperozin.github.io/",
  },
};

const greeting = {
  title: "Arthur Perozin",
  logo_name: "ArthurPerozin",
  nickname: "artPerozin",
  subTitle:
    "Desenvolvedor Full Stack com 4 anos de experiência, focado em entregar soluções eficientes e bem arquitetadas. Cursando Ciência da Computação na UDESC e unindo engenharia de software sólida com IA aplicada.",
  resumeLink: "",
  portfolio_repository: "https://github.com/artPerozin/artPerozin.github.io",
  githubProfile: "https://github.com/artPerozin",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/artPerozin",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
];

const skills = {
  data: [
    {
      title: "IA Aplicada",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Projetos com LLMs (Large Language Models) e integração de IA em soluções reais",
        "⚡ Automação de processos e agentes de IA com RAG e busca vetorial",
        "⚡ Visão computacional e estudos práticos com Hugging Face",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { backgroundColor: "transparent", color: "#336791" },
        },
      ],
    },
    {
      title: "Backend e Arquitetura",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Otimização de backends, com foco em desempenho e confiabilidade",
        "⚡ DDD, TDD e Clean Architecture para código escalável, testável e de fácil manutenção",
        "⚡ APIs com autenticação JWT, Docker e bancos relacionais",
      ],
      softwareSkills: [
        {
          skillName: "Node.js",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: { color: "#339933" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { backgroundColor: "transparent", color: "#336791" },
        },
      ],
    },
    {
      title: "Full Stack",
      fileName: "FullStackImg",
      skills: [
        "⚡ Aplicações completas, do front ao back, com arquiteturas modernas",
        "⚡ Interfaces com React e Vue, e backends em TypeScript, Java, C# e PHP",
        "⚡ Projetos de ERP, CRM e dashboards para empresas reais",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "transparent", color: "#F7DF1E" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: { color: "#02569B" },
        },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "UDESC - Universidade do Estado de Santa Catarina (CCT)",
      subtitle: "Bacharelado em Ciência da Computação",
      alt_name: "UDESC",
      duration: "Cursando a 4ª fase",
      descriptions: [
        "⚡ Estruturas de dados, banco de dados, compiladores, linguagens formais e autômatos, sistemas operacionais e arquitetura de computadores.",
        "⚡ Programação em C, Java e Haskell, com foco em lógica, orientação a objetos e programação funcional.",
      ],
      website_link: "https://www.udesc.br/cct",
    },
  ],
};

const certifications = {
  certifications: [],
};

const experience = {
  title: "Experiência",
  subtitle: "",
  description: "",
  header_image_path: "experience.svg",
  sections: [],
};

const projectsHeader = {
  title: "Projetos",
  description:
    "Alguns dos projetos que mantenho no GitHub, de backends com Clean Architecture a aplicações com IA.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publicações",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

const contactPageData = {
  contactSection: {
    title: "Contato",
    profile_image_path: "contactMail.png",
    description:
      "Quer conversar sobre um projeto, IA aplicada ou arquitetura de software? Me chame pelo GitHub.",
  },
  blogSection: { title: "", subtitle: "", link: "", avatar_image_path: "blogs_image.svg" },
  addressSection: { title: "", subtitle: "", avatar_image_path: "address_image.svg", location_map_link: "" },
  phoneSection: { title: "", subtitle: "" },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
