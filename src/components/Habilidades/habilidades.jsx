import styles from "./habilidades.module.scss"
import Tec from "./skills"
import ToggleSlide from "./progressBar/toggle"

export default function Habilidades() {

    return (
      <section className={styles.habilidades} id="habilidades">
            <div className={styles.habilidades__container}>
                <div className={styles.habilidades__container__left}>
                    <p className={styles.habilidades__container__left__text}>
                        Essas são as minhas 
                    </p>
                    <p className={styles.habilidades__container__left__text}>
                        Habilidades técnicas
                    </p>
                </div>
                <div className={styles.habilidades__container__rigth}>
                {Tec.map((item,index)=>(
                    <div className={styles.habilidades__container__rigth__bar} key={index}>  
                        <p className={styles.habilidades__container__rigth__bar__title}>{item.Title}</p>
                        <ToggleSlide value={item.Know}/>
                    </div>
                ))}
                </div>
                
            </div>
      </section>
    )
  }
  