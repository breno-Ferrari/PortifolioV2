import styles from "./NavBar.module.scss"
import BarsMenu from "./bars/bars"
import NavText from "./const"
import Link from "../Link/link"

import { BsGithub,BsLinkedin } from "react-icons/bs";
// outside library or react
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export default function NavBar() {

    const ref = useRef(new Array(NavText.length));
    const [list,setList] = useState("1")
    const [visible,setVisible] = useState(true)
    const tl = gsap.timeline()
    const listAnimation = () =>{  
      const duration = 0.5;
      const delay = 0.3;
      const xMove = 30;
      if(list === "0"){
        tl.to(ref.current, {
          xPercent: -xMove,
            autoAlpha: list,
            duration: duration,
            stagger:delay
        })
        setList("1")
      }else{
        tl.to(ref.current, {
          xPercent: xMove,
          autoAlpha: list,
          duration: duration,
          stagger:delay
        })
        setList("0")
      }
    } 

    return (
      <nav className={styles.container}>
        <div className={styles.container__align}>
          <div className={styles.container__align__itens} >
            <div className={styles.container__align__itens__left}>
              <div onClick={listAnimation}>
                <BarsMenu/>
              </div>
              <ul className={styles.container__align__itens__left__list}>
                {
                  NavText.map((item,i)=>(
                    <li className={styles.container__align__itens__left__list__line} key={i} ref={(el) => (ref.current[i] = el)} >
                        {visible ?   
                          <Link href={item.href}>
                              {item.value}
                          </Link>:""}
                          
                      
                    </li>
                  ))
                }
              </ul>  
            </div>
            <div className={styles.container__align__itens__right}>
                <a href="https://bit.ly/3q4s0oL" target="_blank" rel="noreferrer" className={styles.container__align__itens__right__github}><BsGithub /></a>
                <a href="https://bit.ly/3cIuTZe" target="_blank" rel="noreferrer" className={styles.container__align__itens__right__linkedin}><BsLinkedin /></a>
            </div>
             
          </div> 
          
        </div>
      </nav>
    )
  }