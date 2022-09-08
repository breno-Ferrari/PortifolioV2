import styles from "./header.module.scss"
import { BsGithub,BsLinkedin } from "react-icons/bs";
import { useEffect } from "react";

export default function Header() {
    let textLength = 0;
    let text = 'Olá, meu nome é Breno! Sou Desenvolvedor Front end \n Seja bem vindo ao meu portifolio.';

    function typeWriterTitle() {
        let textChar = text.charAt(textLength++);
        let paragraph = document.getElementById("text");
        let charElement = document.createTextNode(textChar);
        paragraph.appendChild(charElement);
        if(textLength < text.length+1) {
            setTimeout(typeWriterTitle, 60);
        } else {
            text = '';
        }
      }
      useEffect(()=>{
        typeWriterTitle()
      })

    return (
      <section className={styles.sectionHeader}>
        <div className={styles.sectionHeader__container}>
            <div className={styles.sectionHeader__container__left}>
                <h1>
                    Bem vindo
                </h1>
            </div>
            <div className={styles.sectionHeader__container__right}>
                <a href="https://bit.ly/3q4s0oL" target="_blank" rel="noreferrer" className={styles.sectionHeader__container__right__github}><BsGithub /></a>
                <a href="https://bit.ly/3cIuTZe" target="_blank" rel="noreferrer" className={styles.sectionHeader__container__right__linkedin}><BsLinkedin /></a>
            </div>
        </div>
        <div className={styles.sectionHeader__text}>
            <h1 className={styles.sectionHeader__text__title} id="text"></h1>
            <p className={styles.sectionHeader__text__prev}>
                Abaixo, estão algumas tecnologias e projetos que realizei ao longo do meu crescimento.
            </p>
        </div>
      </section>
    )
  }
  