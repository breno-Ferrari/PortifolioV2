import { FaReact,FaSass } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiNextdotjs,SiTypescript } from "react-icons/si";

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
        site:"https://cardapio-breno-ferrari.vercel.app/",
        git:"https://github.com/breno-Ferrari/Cardapio",
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