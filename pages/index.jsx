
import Header from "../src/components/Header/header";
import Footer from "../src/components/Footer/footer";
import NavBar from "../src/components/NavBar/navBar";
import NavBarMobile from "../src/components/NavBarMobile/navBarMobile";
import { useEffect, useState } from "react";
import Habilidades from "../src/components/Habilidades/habilidades";
import SobreMim from "../src/components/sobreMim/sobreMim";
import ProjetosNovo from "../src/components/projetosNovo/projetosNovo";
import Projetos from "../src/components/projetos/projetos";
// import ProjetosCard from "../src/components/ProjetosCard/ProjetosCard";
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
      <SobreMim />
      <Habilidades />
      {/* <ProjetosNovo /> */}
      <Projetos />
      <Footer />
    </>
  )
}
