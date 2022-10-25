
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Header from "../src/components/Header/header";
import Projetos from "../src/components/Projetos/projetos";
import Tecnologias from "../src/components/Tecnologias/tecnologias";
import Footer from "../src/components/Footer/footer";
import NavBar from "../src/components/NavBar/navBar";
import NavBarMobile from "../src/components/NavBarMobile/navBarMobile";
import AboutMe from "../src/components/AboutMe/aboutMe";
import { useEffect, useState } from "react";
import Habilidades from "../src/components/Habilidades/habilidades";
export default function Home() {
  const [nav,setNav] = useState(true)
 

  useEffect(()=>{
    const windowSize = window.innerWidth
      if (windowSize >= 900) {
        setNav(false);
      } else {
        setNav(true);
      }
  },[])

  return (
    <>
      {nav? <NavBarMobile />:<NavBar />}
      <Header />
      <AboutMe />
      <Habilidades />
      {/* <Tecnologias /> */}
      <Projetos />
      <Footer />
    </>
  )
}
