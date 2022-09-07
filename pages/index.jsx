
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Header from "../src/components/Header/header";
import Projetos from "../src/components/Projetos/projetos";
import Tecnologias from "../src/components/Tecnologias/tecnologias";
export default function Home() {
  return (
    <>
      <Header />
      <Tecnologias />
      <Projetos />
    </>
    
  )
}
