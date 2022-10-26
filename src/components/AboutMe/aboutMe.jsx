import styles from "./aboutMe.module.scss"
// import Image from 'next/future/image'
import profilePic from "../../../public/asset/foto2.png"
import { useEffect } from "react"
import Image from "next/image"

export default function AboutMe() {
  

  useEffect(() => {
    let box = document.querySelector("#aboutMe");
    let observer = new IntersectionObserver(enteries =>{
      enteries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateX(0)";

        }
      })
    })
    observer.observe(box)
  },[]);
    
    return (
      <section className={styles.sectionAboutMe} id="aboutMe">
        <div className={styles.sectionAboutMe__aboutMe}>
            <h2 className={styles.sectionAboutMe__aboutMe__title}>
              Sobre Mim
            </h2>
            <div className={styles.sectionAboutMe__aboutMe__content}>
              <div className={styles.sectionAboutMe__aboutMe__content__text}>
                <p className={styles.sectionAboutMe__aboutMe__content__text__p}>
                  Me chamo Breno Velosa Ferrari, moro em São Paulo, graduando em engenharia da computação pela Faculdade de informatica e administração Paulista(FIAP) e estou no último semestre.
                </p> 
                <p className={styles.sectionAboutMe__aboutMe__content__text__p}>
                  Tive meu primeiro contato com desenvolvimento web durante a pandemia, em 2020, de lá pra cá venho desenvolvendo minha carreira na área de programação com foco atualmente no Front-end.
                </p> 
                <p className={styles.sectionAboutMe__aboutMe__content__text__p}>
                  Meu objetivo atual é me especializar em Front-end e crescer cada vez mais tanto profissionalmente quanto como pessoa.
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