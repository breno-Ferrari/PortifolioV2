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

import { FaReact,FaSass } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";


export default function Projetos() {   
    const [size, setSize] = useState(0);
    const effectRan = useRef(false)

   useEffect(()=>{
    if(effectRan.current === false){
        const windowSize = window.innerWidth;
        console.log(windowSize);
        if(windowSize <= 900){
            setSize(1)
        }else if(windowSize > 900 && windowSize <= 1400){
            setSize(2)
        }else if(windowSize > 1400 && windowSize <= 2000){
            setSize(3)
        }else if(windowSize > 2000){
            setSize(4)
        }
        return() =>{
            effectRan.current = true
        } 
    }
   },[])

    return (
        <section className={styles.sectionProjeto} id="projetos">
            <div className={styles.sectionProjeto__containerTitle}>
                <h2 className={styles.sectionProjeto__containerTitle__title}>Projetos</h2>    
            </div>
            
            <Swiper
                slidesPerView={size}
                slidesPerGroup={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                >
        
                {projectist.map((item,index)=>(
                    <SwiperSlide key={index}>
                        {item.build ? 
                            <div className={styles.sectionProjeto__cardWrapperConstruction} >
                                <Image 
                                alt="header" 
                                src={item.src} 
                                height={200} 
                                width={200} 
                                // layout="responsive"
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
                                <div className={styles.sectionProjeto__cardWrapperConstruction__anchor}>
                                    <a href={item.link} className={styles.sectionProjeto__cardWrapperConstruction__anchor__button} target="_blank" rel="noopener noreferrer">
                                        Visualizar projeto
                                    </a>
                                </div>  
                            </div>
                        :
                            <div className={styles.sectionProjeto__cardWrapper} >
                                <Image 
                                alt="header" 
                                src={item.src} 
                                height={200} 
                                width={200} 
                                // layout="responsive"
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
                                <div className={styles.sectionProjeto__cardWrapper__anchor}>
                                    <a href={item.link} className={styles.sectionProjeto__cardWrapper__anchor__button} target="_blank" rel="noopener noreferrer">
                                        Visualizar projeto
                                    </a>
                                </div>  
                            </div>
                        }
                    </SwiperSlide> 
                ))}   
            </Swiper>         
        </section>   
    )
  }
  