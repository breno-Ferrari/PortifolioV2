import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3, TbBrandJavascript, TbBrandNextjs, TbBrandAngular, TbBrandVue } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

const Tec = [
    {

        Icon: <AiOutlineHtml5 />,
        Title: 'HTML5',
        Content: 'Estudo e utilizo HTML5 desde de 2020, foi um das primeira tecnologias Front-end que tive contato e é essencial para todo projeto Front-end.',
        Know: 80,
        color: "#E34F26", // Cor HTML5
    },
    {
        Icon: <TbBrandCss3 />,
        Title: 'CSS3',
        Content: "Assim como HTML5, CSS3 está presente em todos os meus projetos, sendo utilizada sozinha ou junto de algum pré-processador ou biblioteca, sempre pensando em performace e responsividade.",
        Know: 70,
        color: "#1572B6", // Cor CSS3
    },
    {
        Icon: <TbBrandJavascript />,
        Title: 'JavaScript',
        Content: 'Venho estudando javascrip desde meados de 2020, sendo ele a "engrenagem" de todas as minhas paginas, é com ele que mais gosto de trabalhar de trabalhar.',
        Know: 65,
        color: "#F7DF1E", // Cor JavaScript
    },
    {
        Icon: <FaReact />,
        Title: 'TypeScript',
        Content: "TypeScript é o superSet do Javascript, trazendo pra dentro do javascript novas funcionalidades e aplicabilidade de soluções, um dos grandes destaques dela é a tipagem dos dados.",
        Know: 50,
        color: "#007ACC", // Cor TypeScript
    },
    {
        Icon: <FaReact />,
        Title: 'React',
        Content: "Após estudar  HTML5, CSS3 e JavaScript, venho estudando algumas bibliotecas, dentre elas o React, que é a biblioteca utilizada nesse projeto juntamente com o NextJS.",
        Know: 60,
        color: "#61DAFB", // Cor React
    },
    {
        Icon: <TbBrandNextjs />,
        Title: 'NextJs',
        Content: "NextJs é o framework de React, onde ela é capaz de trazer uma melhor experiencia durante o desenvolvimento e fornecendo uma melhor experiencia para o usuario no final.",
        Know: 60,
        color: "#000000", // Cor Next.js
    },
    {
        Icon: <TbBrandAngular />,
        Title: 'Angular',
        Content: "Dentre outros frameworks me deparei com angular, com foco em orientação a objeto e criação de aplicações.",
        Know: 50,
        color: "#DD0031", // Cor Angular
    },
    {
        Icon: <TbBrandVue />,
        Title: 'VueJs',
        Content: "Uma das bibliotecas que comecei recentemente a estudar foi VueJs, que tem uma aplicabilidade muito similar ao react, mas com foco em aplicações e componentizações single page, onde todo o codigo fica disponivel numa mesma pagina. ",
        Know: 50,
        color: "#42B883", // Cor Vue.js
    },
];
export default Tec;
