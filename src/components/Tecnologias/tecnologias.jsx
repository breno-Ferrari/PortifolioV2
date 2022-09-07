import styles from "./tecnologias.module.scss"
import Tec from "./tec"
export default function Tecnologias() {
    return (
      <main className={styles.main}>
            <h1 className={styles.main__title}>Tecnologias</h1>
            <div className={styles.main__tecnologias}>
                {Tec.map((item,index)=>(
                    <div className={styles.main__tecnologias__row} key={index}>
                        <div className={styles.main__tecnologias__row__item}>
                            <div className={styles.main__tecnologias__row__item__box}>
                                {item.Icon1}
                            </div>
                            <div className={styles.main__tecnologias__row__item__content}>
                                <h3 className={styles.main__tecnologias__row__item__content__title}> {item.Title1}</h3>
                                <p className={styles.main__tecnologias__row__item__content__text}>
                                    {item.Content1}
                                </p>
                            </div>
                            
                        </div>
                        {item.Exhibit2 === false ? "":
                        <div className={styles.main__tecnologias__row__item}>
                            <div className={styles.main__tecnologias__row__item__box}>
                                {item.Icon2}
                            </div>
                            <div className={styles.main__tecnologias__row__item__content}>
                                <h3 className={styles.main__tecnologias__row__item__content__title}> {item.Title2}</h3>
                                <p className={styles.main__tecnologias__row__item__content__text}>
                                    {item.Content2}
                                </p>
                            </div>
                            
                        </div>}
                        
                    </div>
                ))}
            </div>
      </main>
    )
  }
  