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
              <div className={styles.sectionAboutMe__aboutMe__content__text}>
                <p className={styles.sectionAboutMe__aboutMe__content__text__p}>
                  Me chamo Breno Velosa Ferrari, sou morador de São Paulo, formando em engenharia da computação pela Faculdade de informatica e administração Paulista(FIAP).
                </p> 
                <p className={styles.sectionAboutMe__aboutMe__content__text__p}>
                  Tive meu primeiro contato com desenvolvimento web durante a pandemia,em 2020, de lá pra cá venho desenvolvendo minha carreira na area de programação de desenvolvimento.
                </p> 
                <p className={styles.sectionAboutMe__aboutMe__content__text__p}>
                  Tenho com objetivo me especializar em Front-end e crescer cada vez mais profissionalmente quanto pessoalmente, o céu é o limite.
                </p> 
              </div>
             <div className={styles.sectionAboutMe__aboutMe__content__imageContainer}>
                <Image src={profilePic} alt="Picture of the author" className={styles.sectionAboutMe__aboutMe__content__imageContainer__image}/> 
              </div> 
              
               
            </div>
        </div>
      </section>
    )
  }