import styles from "./header.module.scss"
import { BsGithub,BsLinkedin } from "react-icons/bs";

export default function Header() {
    return (
      <section className={styles.section}>
        <div className={styles.section__container}>
            <div className={styles.section__container__left}>
                <h1>
                    Bem vindo
                </h1>
            </div>
            <div className={styles.section__container__right}>
                <a href="https://bit.ly/3q4s0oL" target="_blank" rel="noreferrer" className={styles.section__container__right__github}><BsGithub /></a>
                <a href="https://bit.ly/3cIuTZe" target="_blank" rel="noreferrer" className={styles.section__container__right__linkedin}><BsLinkedin /></a>
            </div>
        </div>
        <div className={styles.section__text}>
            <h1 className={styles.section__text__title}>Olá, meu nome é Breno! Sou Desenvolvedor Front end <br></br><span className={styles.section__text__subtitle}>Seja Bem vindo ao meu portifolio.</span></h1>
           
            <p className={styles.section__text__prev}>
                Abaixo, estão algumas tecnologias e projetos que realizei ao longo do meu crescimento.
            </p>
        </div>
      </section>
    )
  }
  