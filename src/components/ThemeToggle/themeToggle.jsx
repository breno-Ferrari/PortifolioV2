import React from "react";
import styles from "./themeToggle.module.scss"
import { BsFillMoonFill ,BsFillSunFill} from 'react-icons/bs';


export default function toggleTheme({id,click}){
  return ( 
    <div className={styles.switch}>
      <input type="checkbox" className={styles.switch__input} id={id} onClick={click}></input>
      <label className={styles.switch__label} htmlFor={id} >
      {id === "theme" ? 
        <div className={styles.switch__span}>
          <BsFillSunFill size={"12"}/>
          <BsFillMoonFill size={"12"}/>
        </div>
         :
         ""
      }
      </label>
      
    </div>
  )
} 