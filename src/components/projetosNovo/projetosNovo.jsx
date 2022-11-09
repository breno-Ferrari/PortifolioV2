import styles from "./projetosNovo.module.scss"
import { useState, useRef } from "react"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import projectist from "./projectList.jsx";
import Image from "next/image";
import Link from "../Link/link"
import gsap from "gsap"
import { Elastic } from "gsap";

export default function ProjetosNovo() {
  const ref = useRef(null);
  const refArrow = useRef(new Array(projectist.length))
  const isInView = useInView(ref, { once: true });
  const [list,setList] = useState("1")
  const tl = gsap.timeline()
  
  const showAnimation={
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "opacity 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s, transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  }

  const toggleOn = (index) => {
    const duration = 0.5;
    const xMove = 65 ;
    if(list === "0"){
      tl.to(refArrow.current[index], {
        xPercent: 0,
        duration: duration,
        ease:Elastic.easeOut.config(1, 1.5)
      })
      setList("1")
      
    }else{
      tl.to(refArrow.current[index], {
        xPercent: xMove ,
        duration: duration,
        ease:Elastic.easeOut.config(1, 1.5)
      });
      setList("0")
    }
  }

    return (
      <motion.section className={styles.projetos} id="Projetos" ref={ref} 
      >
        <div className={styles.projetos__container__top} style={showAnimation}>
            <p className={styles.projetos__container__top__text} >
                Essas são alguns dos 
            </p>
            <p className={styles.projetos__container__top__text}>
                meus projetos
            </p>
        </div>
        {projectist.map((item,index)=>(
            <div className={styles.projetos__container__bottom} ref={(el) => (refArrow.current[index] = el)} key={index}>
              <div className={styles.projetos__container__bottom__card} >
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
                  <div className={styles.projetos__container__bottom__card__content__buttons}>
                    <Link href={item.link}>
                      <button className={styles.projetos__container__bottom__card__content__buttons__btn}>Visualizar projeto</button>
                    </Link>
                    <Link href={item.link}>
                      <button className={styles.projetos__container__bottom__card__content__buttons__btn}>Visualizar github</button>
                    </Link>
                  </div>
                </div>
                <div  className={styles.projetos__container__bottom__card__image}>
                <Link href={item.link}>
                  <Image 
                    alt="header" 
                    src={item.src} 
                    height={400} 
                    width={400} 
                    className={styles.projetos__container__bottom__card__image__imageContent}>
                  </Image>
                </Link>
                  
                </div>
                <motion.div className={styles.projetos__container__bottom__card__arrowclose}
                 onClick={() => toggleOn(index)}>
                  <div className={styles.projetos__container__bottom__card__arrowclose__teste1}></div>
                </motion.div>
              </div>
          </div>
        ))}
      </motion.section>
    )
  }