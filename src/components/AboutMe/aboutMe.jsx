import styles from "./aboutMe.module.scss"
// import Image from 'next/future/image'
import profilePic from "../../../public/asset/foto2.png"
import { useEffect } from "react"
import Image from "next/image"

export default function AboutMe() {


  useEffect(() => {
    let box = document.querySelector("#aboutMe");
    let observer = new IntersectionObserver(enteries => {
      enteries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateX(0)";

        }
      })
    })
    observer.observe(box)
  }, []);

  return (
    <section className={styles.sectionAboutMe} id="aboutMe">
      <div className={styles.sectionAboutMe__aboutMe}>
        <h2 className={styles.sectionAboutMe__aboutMe__title}>
          Sobre Mim
        </h2>
        <div className={styles.sectionAboutMe__aboutMe__content}>
          <div className={styles.sectionAboutMe__aboutMe__content__text}>
            <p className={styles.sectionAboutMe__aboutMe__content__text__p}>
              Tenho 24 anos, sou formado em engenharia de computação e tenho como objetivos de estudos/trabalho, a área de desenvolvimento Web, estou sempre em busca de novos conhecimentos e oportunidades. Possuo ótimo raciocio logico e me relaciono com facilidade.
            </p>
            <p className={styles.sectionAboutMe__aboutMe__content__text__p}>
              Tive meu primeiro contato com desenvolvimento web durante a pandemia, em 2020, de lá pra cá venho desenvolvendo minha carreira na área de programação com quase 3 anos de desenvolvimento web voltado ao Front-end e atualmente atuo como analista de dados.
            </p>
            <p className={styles.sectionAboutMe__aboutMe__content__text__p}>
              Atualmente estou matriculado em uma pós-graduação com foco em fullstack, onde estou cada vez mais aperfiçoando minhas skills.
            </p>
          </div>
          <div className={styles.sectionAboutMe__aboutMe__content__imageContainer}>
            <Image src={profilePic} alt="ilustração" height={300}
              width={300} />
          </div>
        </div>
      </div>
    </section>
  )
}