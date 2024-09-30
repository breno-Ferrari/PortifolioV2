import DropDown from "../DropDown/dropdown"
import styles from "./habilidades2.module.scss"
import TechCards from "./TechCards/Cards"
import Tec from "./skills"
export default function Habilidades2() {
    return (
        <section id="habilidades" className={styles.habilidades}>
            <div className={styles.habilidades_title}>
                <p className={styles.habilidades_title_text}>
                    Tecnologias
                </p>
                <p className={styles.habilidades_title_text}>
                    Principais
                </p>
            </div>
            <div className={styles.habilidades_container}>
                <DropDown title="Linguagens de Programação">
                    <TechCards type="lang" />
                </DropDown>
                <DropDown title="Frameworks e Bibliotecas">
                    <TechCards type="framework" />
                </DropDown>
                <DropDown title="Ferramentas e DevOps">
                    <TechCards type="devops" />
                </DropDown>
                <DropDown title="Outros">
                    <TechCards type="other" />
                </DropDown>
            </div>

        </section >
    )
}