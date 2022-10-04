import styles from "./header.module.scss"
import { useEffect, useRef } from "react";

export default function Header() {
    let textLength = 0;
    let text = `Olá, meu nome é Breno!\n Sou Desenvolvedor Front-end \n Seja bem vindo ao meu portfólio.`;
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
        <a href="#aboutMe" className={styles.sectionHeader__arrowContainer}>
          <div className={styles.sectionHeader__arrowContainer__arrow}></div>
          <p className={styles.sectionHeader__arrowContainer__textArrow}>
            scroll down
          </p>
        </a>
        
      </section>
    )
  }