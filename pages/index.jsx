
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Header from "../src/components/Header/header";
import Projetos from "../src/components/Projetos/projetos";
import Tecnologias from "../src/components/Tecnologias/tecnologias";
import Footer from "../src/components/Footer/footer";
import NavBar from "../src/components/NavBar/navBar";
import AboutMe from "../src/components/AboutMe/aboutMe";
export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutMe />
      <Tecnologias />
      <Projetos />
      <Footer />
    </>
  )
}
