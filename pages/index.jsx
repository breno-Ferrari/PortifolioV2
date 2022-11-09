
import Header from "../src/components/Header/header";
import Footer from "../src/components/Footer/footer";
import NavBar from "../src/components/NavBar/navBar";
import NavBarMobile from "../src/components/NavBarMobile/navBarMobile";
import { useEffect, useState } from "react";
import Habilidades from "../src/components/Habilidades/habilidades";
import SobreMim from "../src/components/sobreMim/sobreMim";
import Projetos from "../src/components/projetos/projetos";
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
      <Projetos />
      <Footer />
    </>
  )
}
