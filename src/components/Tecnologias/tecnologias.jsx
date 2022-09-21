import styles from "./tecnologias.module.scss"
import Tec from "./tec"
import {useState} from "react"
import ToggleSlide from "./progressBar/toggle"

export default function Tecnologias() {

    return (
      <section className={styles.tec} id="tecnologias">
            <h1 className={styles.tec__title}>Tecnologias</h1>
            <div className={styles.tec__tecnologias}>
                {Tec.map((item,index)=>(
                    <div className={styles.tec__tecnologias__row} key={index}>
                        <div className={styles.tec__tecnologias__row__item}>
                            <div className={styles.tec__tecnologias__row__item__box}>
                                {item.Icon1}
                            </div>
                            <div className={styles.tec__tecnologias__row__item__content}>
                                <h3 className={styles.tec__tecnologias__row__item__content__title}> {item.Title1}</h3>
                                <p className={styles.tec__tecnologias__row__item__content__text}>
                                    {item.Content1}
                                </p>
                                <div className={styles.tec__tecnologias__row__item__content__bar}>
                                    <ToggleSlide valueField={item.Know} defaultValue={0}/>
                                    <p  className={styles.tec__tecnologias__row__item__content__bar__text}>{item.Know}%</p>
                                </div>
                                
                            </div>
                            
                        </div>
                        {item.Exhibit2 === false ? "":
                        <div className={styles.tec__tecnologias__row__item}>
                            <div className={styles.tec__tecnologias__row__item__box}>
                                {item.Icon2}
                            </div>
                            <div className={styles.tec__tecnologias__row__item__content}>
                                <h3 className={styles.tec__tecnologias__row__item__content__title}> {item.Title2}</h3>
                                <p className={styles.tec__tecnologias__row__item__content__text}>
                                    {item.Content2}
                                </p>
                                <div className={styles.tec__tecnologias__row__item__content__bar}>
                                    <ToggleSlide valueField={item.Know} defaultValue={0}/>
                                    <p  className={styles.tec__tecnologias__row__item__content__bar__text}>{item.Know}%</p>
                                </div>
                            </div>
                            
                        </div>}
                        
                    </div>
                ))}
            </div>
      </section>
    )
  }
  