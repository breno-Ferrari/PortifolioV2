import { FaReact,FaSass } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

const projectist = 
    [
      {
        titulo:"Preço interativo",
        preview:"Projeto utilizado para estudos do nextJs, Css3 e Javascript",
        src:"/asset/interactivecard.png",
        tec1: <SiNextdotjs />,
        tec2: <FaReact />,
        tec3: <DiJavascript1 />,
        tec4: <FaSass />,
        link:"https://interactive-price-zeta.vercel.app/",
        git:"https://github.com/breno-Ferrari/Interactive-price",
        build:false
      },
      {
        titulo:"Cardapio",
        preview:"Cardapio interativo feito em React para estudos de React, Css3 e JS",
        src:"/asset/Cardapio.png",
        tec1: <FaReact />,
        tec2: <FaSass />,
        tec3: <DiJavascript1 />,
        tec4: <SiNextdotjs />,
        link:"https://cardapio-breno-ferrari.vercel.app/",
        git:"https://github.com/breno-Ferrari/Cardapio",
        build:false
      },
      {
        titulo:"Portifolio",
        preview:"Portifolio profissional onde utilizo e estudos bibliotecas dentro outras tecnologias.",
        src:"/asset/portifolio.png",
        tec1: <SiNextdotjs />,
        tec2: <FaReact />,
        tec3: <DiJavascript1 />,
        tec4: <FaSass />,
        link:false,
        git:"https://github.com/breno-Ferrari/PortifolioV2",
        build:false
      },
      {
        titulo:"Gerador de senha",
        preview:"Um gerador de senha com niveis de segurança, feito com algumas das novas funcionalidades do Next 13",
        src:"/asset/senha.png",
        tec1: <SiNextdotjs />,
        tec2: <FaReact />,
        tec3: <DiJavascript1 />,
        tec4: <FaSass />,
        link:"https://password-generator-breno-ferrari.vercel.app/",
        git:"https://github.com/breno-Ferrari/passwordGenerator",
        build:false
      },
      {
        titulo:"Em desenvolvimento",
        preview:"Em desenvolvimento",
        src:"/asset/bulldozer.gif",
        tec1: <SiNextdotjs />,
        tec2: <FaReact />,
        tec3: <DiJavascript1 />,
        tec4: <FaSass />,
        site:"#",
        git:"#",
        build:true
      },
      
    ]
    export default projectist;