import styles from "./habilidades.module.scss"
import Tec from "./skills"
import ToggleSlide from "./progressBar/toggle"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function Habilidades() { 
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
    return (
      <section className={styles.habilidades} id="habilidades" ref={ref}>
            <div className={styles.habilidades__container}>
                <div className={styles.habilidades__container__left}style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>
                    <p className={styles.habilidades__container__left__text}>
                        Essas são as minhas
                    </p>
                    <p className={styles.habilidades__container__left__text}>
                        Habilidades técnicas
                    </p>
                </div>
                <div className={styles.habilidades__container__rigth} style={{
                      transform: isInView ? "none" : "translateX(200px)",
                      opacity: isInView ? 1 : 0,
                      transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>
                {isInView? Tec.map((item,index)=>(
                    <motion.div
                    className={styles.habilidades__container__rigth__bar} key={index}
                    >
                        <div className={styles.habilidades__container__rigth__bar__stacks}>
                            <p className={styles.habilidades__container__rigth__bar__stacks__stack}>{item.Icon}</p>
                            <p className={styles.habilidades__container__rigth__bar__stacks__stack}>{item.Title}</p>
                        </div>  
                        <ToggleSlide value={item.Know}/>
                    </motion.div>
                )):""}
                </div>
                
            </div>
      </section>
    )
  }
  