import { FaReact, FaSass, FaNode, FaDocker } from "react-icons/fa";
import { DiJavascript1, DiPostgresql } from "react-icons/di";
import { SiNextdotjs, SiRedux, SiTypescript } from "react-icons/si";
import { GiBeaver } from "react-icons/gi";
const projectist =
  [
    {
      titulo: "Preço interativo",
      preview: "Projeto utilizado para estudos do nextJs, Css3 e Javascript",
      src: "/asset/interactivecard.png",
      tecs: [
        SiNextdotjs,
        FaReact,
        DiJavascript1,
        FaSass,
      ],
      link: "https://interactive-price-zeta.vercel.app/",
      git: "https://github.com/breno-Ferrari/Interactive-price",
      build: false
    },
    {
      titulo: "Cardapio",
      preview: "Cardapio interativo feito em React para estudos de React, Css3 e JS",
      src: "/asset/Cardapio.png",
      tecs: [
        FaReact,
        FaSass,
        DiJavascript1,
        SiNextdotjs,
      ],
      link: "https://cardapio-breno-ferrari.vercel.app/",
      git: "https://github.com/breno-Ferrari/Cardapio",
      build: false
    },
    {
      titulo: "Portifolio",
      preview: "Portifolio profissional onde utilizo e estudos bibliotecas dentro outras tecnologias.",
      src: "/asset/portifolio.png",
      tecs: [
        SiNextdotjs,
        FaReact,
        DiJavascript1,
        FaSass,
      ],
      link: false,
      git: "https://github.com/breno-Ferrari/PortifolioV2",
      build: false
    },
    // {
    //   titulo: "Gerador de senha",
    //   preview: "Um gerador de senha com niveis de segurança, feito com algumas das novas funcionalidades do Next 13",
    //   src: "/asset/senha.png",
    //   tecs: [
    //     SiNextdotjs,
    //     FaReact,
    //     SiTypescript,
    //     FaSass,
    //   ],
    //   link: "https://password-generator-breno-ferrari.vercel.app/",
    //   git: "https://github.com/breno-Ferrari/passwordGenerator",
    //   build: false
    // },
    {
      titulo: "E-commerce",
      preview: "Loja e-commerce feita com react e reduz para gerenciamento de estados globais e a biblioteca 'react router dom' para gerenciamento de rotas",
      src: "/asset/ecommerce.png",
      tecs: [
        FaReact,
        SiRedux,
        DiJavascript1,
        FaSass,
      ],
      link: false,
      git: "https://github.com/breno-Ferrari/ecommerce",
      build: false
    },
    {
      titulo: "Blog-ensino",
      preview: "API em Node.js com PostgreSQL, gerenciada no DBeaver, simulando cadastro de alunos em uma aplicação web, tudo via Docker.",
      src: "",
      tecs: [
        FaNode,
        DiPostgresql,
        FaDocker,
        GiBeaver
      ],
      link: false,
      git: "https://github.com/breno-Ferrari/Blog-ensino",
      build: false
    },
    {
      titulo: "Em desenvolvimento",
      preview: "Em desenvolvimento",
      src: "/asset/bulldozer.gif",
      tecs: [
        SiNextdotjs,
        FaReact,
        DiJavascript1,
        FaSass,
      ],
      site: "#",
      git: "#",
      build: true
    },

  ]
export default projectist;