import styles from "./header.module.scss"
import { useEffect, useRef } from "react";
import Image from 'next/future/image'


import profilePic from "../../../public/asset/foto2.jpeg"

export default function Header() {
    let textLength = 0;
    let text = 'Olá, meu nome é Breno! Sou Desenvolvedor Front end \n Seja bem vindo ao meu portifolio.';
    const effectRan = useRef(false)
    const title = useRef(false)
    function typeWriterTitle() {
        let textChar = text.charAt(textLength++);
        let paragraph = title.current;
        let charElement = document.createTextNode(textChar);
        paragraph.appendChild(charElement);
        if(textLength < text.length+1) {
            setTimeout(typeWriterTitle, 60);
        } else {
            text = '';
        }
      }
      useEffect(()=>{
        if(effectRan.current === false){
          typeWriterTitle()
          return() =>{
              effectRan.current = true
          }
      }
      })

      

    return (
      <section className={styles.sectionHeader} id="header">
        <div className={styles.sectionHeader__text}>
            <h1 className={styles.sectionHeader__text__title} ref={title}></h1>
        </div>
        <div className={styles.sectionHeader__aboutMe} id="aboutMe">
            <h2 className={styles.sectionHeader__aboutMe__title}>
              Sobre Mim
            </h2>
            <div className={styles.sectionHeader__aboutMe__content}>
              <p className={styles.sectionHeader__aboutMe__content__p}>
                Meu nome é Breno Velosa Ferrari, tenho 22 anos, estudande de engenharia da computação no ultimo semestre. Sou desenvolvedor Web com foco em front-end
              </p> 
              <div className={styles.sectionHeader__aboutMe__content__imageContainer}>
                <Image src={profilePic} alt="Picture of the author" className={styles.sectionHeader__aboutMe__content__imageContainer__image}/> 
              </div> 
               
            </div>
        </div>
      </section>
    )
  }