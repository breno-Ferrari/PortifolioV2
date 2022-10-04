import React from "react";
import { useEffect, useRef } from "react"
import styles from "./bars.module.scss"



export default function BarsMenu({modal,...props}) {
    const ref1 = useRef(null);
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    const CreateX = () =>{
      ref1.current?.classList.toggle(`${styles.container__change__bar1}`)
      ref2.current?.classList.toggle(`${styles.container__change__bar2}`)
      ref3.current?.classList.toggle(`${styles.container__change__bar3}`)      
    }

    useEffect(()=>{
      CreateX();
    },[modal])

    return (

          <div className={styles.container} {...props}>
            <div className={styles.bar1} ref={ref1}></div>
            <div className={styles.bar2} ref={ref2}></div>
            <div className={styles.bar3} ref={ref3}></div>
          </div>
      
    
      
    )

  }
