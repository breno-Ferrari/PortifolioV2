import styles from "./aboutMe.module.scss"
import { useEffect, useRef } from "react";
import Image from 'next/future/image'


import profilePic from "../../../public/asset/foto2.jpeg"

export default function AboutMe() {
    return (
      <section className={styles.sectionAboutMe} id="aboutMe">
        <div className={styles.sectionAboutMe__aboutMe}>
            <h2 className={styles.sectionAboutMe__aboutMe__title}>
              Sobre Mim
            </h2>
            <div className={styles.sectionAboutMe__aboutMe__content}>
              <p className={styles.sectionAboutMe__aboutMe__content__p}>
                Meu nome é Breno Velosa Ferrari, tenho 22 anos, estudande de engenharia da computação no ultimo semestre. Sou desenvolvedor Web com foco em front-end
              </p> 
              <div className={styles.sectionAboutMe__aboutMe__content__imageContainer}>
                <Image src={profilePic} alt="Picture of the author" className={styles.sectionAboutMe__aboutMe__content__imageContainer__image}/> 
              </div> 
               
            </div>
        </div>
      </section>
    )
  }