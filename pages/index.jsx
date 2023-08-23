
import Header from "../src/components/Header/header";
import Footer from "../src/components/Footer/footer";
import NavBar from "../src/components/NavBar/navBar";
import NavBarMobile from "../src/components/NavBarMobile/navBarMobile";
import NewNavBar from "../src/components/NewNavBar/NewNavBar";
import { useEffect, useState } from "react";
import Habilidades from "../src/components/Habilidades/habilidades";
import SobreMim from "../src/components/SobreMim/sobreMim";
import Projetos from "../src/components/Projetos/projetos";
import Sliders from "../src/components/Sliders/slider";
export default function Home() {

  return (
    <>
      <NewNavBar />
      <Header />
      <SobreMim />
      <Habilidades />
      <Projetos />
      <Footer />
    </>
  )
}
