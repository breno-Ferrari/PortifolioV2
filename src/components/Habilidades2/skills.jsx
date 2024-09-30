import { AiOutlineHtml5 } from "react-icons/ai";
import {
    TbBrandCss3,
    TbBrandJavascript,
    TbBrandNextjs,
    TbBrandAngular,
    TbBrandVue,
    TbBrandDocker,

} from "react-icons/tb";

import {
    SiTypescript,
    SiPostgresql,
    SiJest,
} from "react-icons/si";

import { GiBeaver } from "react-icons/gi";
import { FaReact, FaGitAlt, FaGithub, FaInfinity } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
const Tec = [
    {
        Icon: <AiOutlineHtml5 />,
        Title: 'HTML5',
        Content: 'Estudo e utilizo HTML5 desde de 2020, foi um das primeira tecnologias Front-end que tive contato e é essencial para todo projeto Front-end.',
        Know: 80,
        color: "#E34F26",
        category: "lang"
    },
    {
        Icon: <TbBrandCss3 />,
        Title: 'CSS3',
        Content: "Assim como HTML5, CSS3 está presente em todos os meus projetos, sendo utilizada sozinha ou junto de algum pré-processador ou biblioteca, sempre pensando em performace e responsividade.",
        Know: 80,
        color: "#1572B6",
        category: "lang"
    },
    {
        Icon: <TbBrandJavascript />,
        Title: 'JavaScript',
        Content: 'Venho estudando javascrip desde meados de 2020, sendo ele a "engrenagem" de todas as minhas paginas, é com ele que mais gosto de trabalhar de trabalhar.',
        Know: 70,
        color: "#F7DF1E",
        category: "lang"
    },
    {
        Icon: <SiTypescript />,
        Title: 'TypeScript',
        Content: "TypeScript é o superSet do Javascript, trazendo pra dentro do javascript novas funcionalidades e aplicabilidade de soluções, um dos grandes destaques dela é a tipagem dos dados.",
        Know: 60,
        color: "#007ACC",
        category: "lang"
    },
    {
        Icon: <FaReact />,
        Title: 'React',
        Content: "Após estudar  HTML5, CSS3 e JavaScript, venho estudando algumas bibliotecas, dentre elas o React, que é a biblioteca utilizada nesse projeto juntamente com o NextJS.",
        Know: 60,
        color: "#61DAFB",
        category: "framework"
    },
    {
        Icon: <TbBrandNextjs />,
        Title: 'NextJs',
        Content: "NextJs é o framework de React, onde ela é capaz de trazer uma melhor experiencia durante o desenvolvimento e fornecendo uma melhor experiencia para o usuario no final.",
        Know: 60,
        color: "#138BFD",
        category: "framework"
    },
    {
        Icon: <TbBrandAngular />,
        Title: 'Angular',
        Content: "Dentre outros frameworks me deparei com angular, com foco em orientação a objeto e criação de aplicações.",
        Know: 60,
        color: "#DD0031",
        category: "framework"
    },
    {
        Icon: <TbBrandVue />,
        Title: 'VueJs',
        Content: "Uma das bibliotecas que comecei recentemente a estudar foi VueJs, que tem uma aplicabilidade muito similar ao react, mas com foco em aplicações e componentizações single page, onde todo o codigo fica disponivel numa mesma pagina. ",
        Know: 60,
        color: "#42B883",
        category: "framework"
    },
    {
        Icon: <TbBrandDocker />,
        Title: 'Docker',
        Content: "Docker é uma plataforma de software que permite criar, implantar e executar aplicações em contêineres. Ele proporciona um ambiente consistente para desenvolvimento e produção.",
        Know: 60,
        color: "#2496ED",
        category: "devops"
    },
    {
        Icon: <TbBrandDocker />,
        Title: 'Docker Compose',
        Content: "Docker Compose é uma ferramenta para definir e executar aplicações Docker com múltiplos contêineres. Com Compose, você pode usar um arquivo YAML para configurar os serviços da sua aplicação.",
        Know: 60,
        color: "#2496ED",
        category: "devops"
    },
    {
        Icon: <SiPostgresql />,
        Title: 'PostgreSQL',
        Content: "PostgreSQL é um sistema de gerenciamento de banco de dados relacional e objeto-Relacional, conhecido por sua robustez e suporte a complexas consultas SQL.",
        Know: 60,
        color: "#336791",
        category: "devops"
    },
    {
        Icon: <SiJest />,
        Title: 'Jest',
        Content: "Jest é um framework de testes em JavaScript que é amplamente utilizado com o React, permitindo que você escreva testes de unidade e de integração com facilidade.",
        Know: 60,
        color: "#99424F",
        category: "devops"
    },
    {
        Icon: <GiBeaver />,
        Title: 'DBeaver',
        Content: "DBeaver é uma ferramenta de gerenciamento de banco de dados universal que suporta todos os bancos de dados populares e fornece uma interface gráfica para interagir com os dados.",
        Know: 50,
        color: "#1D9B66",
        category: "devops"
    },
    {
        Icon: <FaGitAlt />,
        Title: 'Git',
        Content: "Git é um sistema de controle de versão distribuído que permite que múltiplos desenvolvedores colaborem em projetos, mantendo um histórico de alterações no código.",
        Know: 60,
        color: "#F05032",
        category: "devops"
    },
    {
        Icon: <FaGithub />,
        Title: 'GitHub',
        Content: "GitHub é uma plataforma de hospedagem de código-fonte que utiliza o Git para controle de versão e facilita a colaboração entre desenvolvedores.",
        Know: 60,
        color: "#181717",
        category: "devops"
    },
    {
        Icon: <FaInfinity />,
        Title: 'CI/CD',
        Content: "CI/CD refere-se à integração contínua e entrega contínua, práticas que permitem que as equipes desenvolvam, testem e implantem software de forma rápida e eficiente.",
        Know: 70,
        color: "#C0C0C0",
        category: "other"
    },
    {
        Icon: <DiScrum />,
        Title: 'Agile (Scrum)',
        Content: "Scrum é uma metodologia ágil para gerenciar projetos de desenvolvimento de software, focando na entrega rápida e na adaptação contínua às necessidades dos clientes.",
        Know: 70,
        color: "#F0AD4E",
        category: "other"
    }
];

export default Tec;
