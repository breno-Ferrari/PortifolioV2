
import Header from "../src/components/Header/header";
import Footer from "../src/components/Footer/footer";;
import NewNavBar from "../src/components/NewNavBar/NewNavBar";
import Habilidades from "../src/components/Habilidades/habilidades";
import Habilidades2 from "../src/components/Habilidades2/habilidades2";
import SobreMim from "../src/components/SobreMim/sobreMim";
import Projetos from "../src/components/Projetos/projetos";
export default function Home() {

  return (
    <>
      <NewNavBar />
      <Header />
      <SobreMim />
      {/* <Habilidades /> */}
      <Habilidades2 />
      <Projetos />
      <Footer />
    </>
  )
}
