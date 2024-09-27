import styles from "./sobreMim.module.scss"
// import Image from 'next/future/image'
import profilePic from "../../../public/asset/foto2.png"
import { useRef } from "react"
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
            Tenho 24 anos, sou formado em engenharia de computação e tenho como objetivos de estudos/trabalho, a área de desenvolvimento Web, estou sempre em busca de novos conhecimentos e oportunidades. Possuo ótimo raciocio logico e me relaciono com facilidade.
          </p>
          <p className={styles.sobreMim__content__texts__line}>
            Tive meu primeiro contato com desenvolvimento web durante a pandemia, em 2020, de lá pra cá venho desenvolvendo minha carreira na área de programação com quase 3 anos de desenvolvimento web voltado ao Front-end e atualmente atuo como analista de dados.
          </p>
          <p className={styles.sobreMim__content__texts__line}>
            Atualmente estou matriculado em uma pós-graduação com foco em fullstack, onde estou cada vez mais aperfiçoando minhas skills.
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