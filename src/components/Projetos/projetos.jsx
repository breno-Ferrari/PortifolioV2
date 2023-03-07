import styles from "./projetos.module.scss"
import projectist from "./projectList.jsx";
import React, { useEffect, useState, useRef} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Navigation } from "swiper";

import Image from "next/image";
import Sliders from "../Sliders/slider";
import Slide from "../Sliders/Slide/slide";



export default function Projetos() {   
    const [size, setSize] = useState(null);
    const [start ,setStart] = useState(0);
    const [end ,setEnd] = useState(0);
    const [win ,setWin] = useState(null);
    const [id ,setId] = useState(null);
    
    const effectRan = useRef(false)
    const listLenght = projectist.length // atualmente 6



    // primeira iteração
    // let start = 0;
    // let end = listLenght /6  + end ;;   6/6 = 1 + 0 
    // segunda iteração
    // let start = end+1;     1+1 = 2
    // let end = (listLenght /6) + end;   1 + 2 = 3

    // primeira iteração
    // let start = 0;
    // let end = listLenght /4 + end ;   6/3 = 1,5 + 0 = 2
    // segunda iteração
    // let start = end+1;     2+1 = 3
    // let end = (listLenght /4) + end;   2 + 3 = 5 

    // primeira iteração
    // let start = 0;
    // let end = listLenght /2;   6/2 = 3
    // segunda iteração
    // let start = end+1;     3+1 = 4
    // let end = (listLenght /2) + end;   3 + 3 = 6 



  

    useEffect(()=>{
        setWin(window.innerWidth)
        if(win <= 1000){
            setSize(listLenght);
        }else if(win > 1000 && win <= 2000){
            setSize((listLenght / 4).toFixed());
        }else if(win > 2000){
            setSize((listLenght / 2).toFixed());
        }
    },[win,listLenght,end,start])
    
    function handleChange() {
        setStart(end+1);   
        setEnd((listLenght /4) + end);
    }

    return (
        <section className={styles.sectionProjeto} id="projetos">
            <div className={styles.sectionProjeto__containerTitle}>
                <p className={styles.sectionProjeto__containerTitle__text} >
                    Essas são alguns dos 
                </p>
                <p className={styles.sectionProjeto__containerTitle__text}>
                    meus projetos
                </p>
            </div>
            <Sliders>
            {projectist.map((item,id)=>(
                <Slide key={id}>
                      {item.build ?  
                         <div className={styles.sectionProjeto__cardWrapperConstruction} >
                            <Image 
                                alt="gif de uma trator dormindo" 
                                src={item.src} 
                                height={200} 
                                width={200} 
                                className={styles.sectionProjeto__cardWrapperConstruction__imagePrev}>
                    
                                </Image>
                         <h2 className={styles.sectionProjeto__cardWrapperConstruction__projectTitle}>
                             {item.titulo}
                         </h2>
                         <div className={styles.sectionProjeto__cardWrapperConstruction__description}>
                             {item.preview}
                         </div>
                         <div className={styles.sectionProjeto__cardWrapperConstruction__tecs}>
                             <p>Tecnologias que serão utilizadas:</p>
                         </div>
                         <div className={styles.sectionProjeto__cardWrapperConstruction__tec}>
                             {item.tec1}
                             {item.tec2}
                             {item.tec3}
                             {item.tec4}
                         </div>
                         <div className={styles.sectionProjeto__cardWrapperConstruction__container}>
                             <div className={styles.sectionProjeto__cardWrapperConstruction__container__anchor}>
                                 {/* <a href={item.link} className={styles.sectionProjeto__cardWrapperConstruction__container__anchor__button} target="_blank" rel="noopener noreferrer">
                                     Visualizar projeto
                                 </a> */}
                             </div>  
                             <div className={styles.sectionProjeto__cardWrapperConstruction__container__anchor}>
                                 {/* <a href={item.git} className={styles.sectionProjeto__cardWrapperConstruction__container__anchor__button} target="_blank" rel="noopener noreferrer">
                                     Visualizar github
                                 </a> */}
                             </div>  
                         </div>
                     </div>
                        : 
                        <div className={styles.sectionProjeto__cardWrapper} >
                            <Image 
                            alt="miniatura Home"
                            src={item.src} 
                            height={200} 
                            width={200} 
                            className={styles.sectionProjeto__cardWrapper__imagePrev}>

                            </Image>
                            <h2 className={styles.sectionProjeto__cardWrapper__projectTitle}>
                                {item.titulo}
                            </h2>
                            <div className={styles.sectionProjeto__cardWrapper__description}>
                                {item.preview}
                            </div>
                            <div className={styles.sectionProjeto__cardWrapper__tecs}>
                                <p>Principais tecnologias utilizadas:</p>
                            </div>
                            <div className={styles.sectionProjeto__cardWrapper__tec}>
                                {item.tec1}
                                {item.tec2}
                                {item.tec3}
                                {item.tec4}
                            </div>
                            <div className={styles.sectionProjeto__cardWrapper__container}>
                                {item.link ? 
                                        <div className={styles.sectionProjeto__cardWrapper__container__anchor}>
                                        <a href={item.link} className={styles.sectionProjeto__cardWrapper__container__anchor__button} target="_blank" rel="noopener noreferrer">
                                            Visualizar projeto
                                        </a>
                                    </div>  
                                    :""
                                }
                                
                                <div className={styles.sectionProjeto__cardWrapper__container__anchor}>
                                    <a href={item.git} className={styles.sectionProjeto__cardWrapper__container__anchor__button} target="_blank" rel="noopener noreferrer">
                                        Visualizar github
                                    </a>
                                </div>  
                            </div>
                        </div> 
                       
                        }
                    </Slide>
                ))}
                </Sliders>
        </section>   
    )
  }
  