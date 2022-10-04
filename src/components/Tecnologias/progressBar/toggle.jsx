import { useEffect, useRef } from "react";
import styles from "./toggle.module.scss"


export default function ToggleSlide({valueField,children}){
  const effectRan = useRef(false)
  const MAX = 100;

  function getBackgroundSize(){
    return {
      backgroundSize: `${(valueField * 100) / MAX}% 100%`

    };
  };


  useEffect(()=>{
    if(effectRan.current === false){
      getBackgroundSize()
        return() =>{
            effectRan.current = true
        } 
    }
   },[])
   
  return ( 
    <div className={styles.container} id="slider">
       <input
        className={styles.container__slider}
        type="range"
        min="1"
        max={MAX}
        style={getBackgroundSize()}
        value={valueField}
        readOnly
          >{children}</input>
    </div>
  )
}