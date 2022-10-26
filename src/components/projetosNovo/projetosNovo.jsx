import styles from "./projetosNovo.module.scss"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import projectist from "./projectList.jsx";
import Image from "next/image";
export default function ProjetosNovo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


    return (
      <section className={styles.projetos} id="Projetos" ref={ref}>
        <div className={styles.projetos__container__top}>
            <p className={styles.projetos__container__top__text}style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                Essas são alguns dos 
            </p>
            <p className={styles.projetos__container__top__text}style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                meus projetos
            </p>
        </div>
        
        <div className={styles.projetos__container__bottom}>
          {projectist.map((item,index)=>(
            <div className={styles.projetos__container__bottom__card} key={index}>
              <div className={styles.projetos__container__bottom__card__content}>
                <div className={styles.projetos__container__bottom__card__content__title}>
                  {item.titulo}
                </div>
                <div className={styles.projetos__container__bottom__card__content__description}>
                  {item.preview}
                </div>
                <div  className={styles.projetos__container__bottom__card__content__tecs}>
                  {item.tec1}
                  {item.tec2}
                  {item.tec3}
                  {item.tec4}
                </div>
              </div>
             
              <div  className={styles.projetos__container__bottom__card__image}>
                <Image 
                  alt="header" 
                  src={item.src} 
                  height={400} 
                  width={400} 
                  className={styles.projetos__container__bottom__card__image__imageContent}>
                  </Image>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.2}}
                className={styles.projetos__container__bottom__card__arrow}>
                <div className={styles.projetos__container__bottom__card__arrow__teste1}></div>
              </motion.div>
            </div>
          ))}
            
        </div>
      </section>
    )
  }