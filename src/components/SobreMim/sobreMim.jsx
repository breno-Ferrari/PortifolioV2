import styles from "./sobreMim.module.scss"
// import Image from 'next/future/image'
import { motion } from "framer-motion"
import profilePic from "../../../public/asset/foto2.png"
import { useEffect,useRef } from "react"
import { useInView } from "framer-motion";
import Image from "next/image"

export default function SobreMim() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
    return (
      <section className={styles.sobreMim} id="sobreMim" ref={ref}>
          <div className={styles.sobreMim__titleContainer}
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
            <h1 className={styles.sobreMim__titleContainer__title}>Sobre Mim</h1>
          </div>
        <div className={styles.sobreMim__content}>
          <div className={styles.sobreMim__content__texts}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
            <p className={styles.sobreMim__content__texts__line} >
              Me chamo Breno Velosa Ferrari, moro em São Paulo, graduando em engenharia da computação pela Faculdade de informatica e administração Paulista(FIAP) e estou no último semestre.
            </p> 
            <p className={styles.sobreMim__content__texts__line}>
              Tive meu primeiro contato com desenvolvimento web durante a pandemia, em 2020, de lá pra cá venho desenvolvendo minha carreira na área de programação com foco atualmente no Front-end.
            </p> 
            <p className={styles.sobreMim__content__texts__line}>
              Meu objetivo atual é me especializar em Front-end e crescer cada vez mais tanto profissionalmente quanto como pessoa.
            </p> 
          </div>
         
          <div className={styles.sobreMim__content__image}
           style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
            <Image src={profilePic} alt="ilustração" height={600} width={600} /> 
          </div>
        </div>
      </section>
    )
  }