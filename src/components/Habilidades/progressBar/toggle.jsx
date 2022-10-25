import { useEffect, useRef } from "react";
import styles from "./toggle.module.scss"


export default function ToggleSlide({children,value}){
  const ref = useRef(null)
  const effectRan = useRef(false)

  useEffect(() => {
    if(effectRan.current === false){
      let bar = ref.current
      bar?.style.setProperty(
        "--bg-size",
          value ? value+"%" : "#fff"
      );
      return() =>{
          effectRan.current = true
      } 
  }
  });

  return ( 
    <div className={styles.container} id="slider">
       <div className={styles.container__slider} ref={ref} value={value}>{children}</div>
    </div>
  )
}