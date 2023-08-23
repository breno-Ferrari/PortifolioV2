import styles from "./NewNavBar.module.scss"
import BarsMenu from "./bars/bars"
import NavText from "./const"
import Link from "../Link/link"
import ThemeToggle from "../ThemeToggle/themeToggle"

import { BsGithub,BsLinkedin,BsFillFileEarmarkPdfFill } from "react-icons/bs";

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export default function NewNavBar() {

    const ref = useRef(new Array(NavText.length));
    const [list,setList] = useState("1")
    const [visible,setVisible] = useState(true)
    const [menuMobile,setMenuMobile] = useState(true);
    const [activeTheme, setActiveTheme] = useState("light");
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    // criar load page e trocar para layout
    useEffect(() => {
        document.body.dataset.theme = activeTheme;
      }, [activeTheme]);
  
 

    useEffect(()=>{
      
    },[])
    
    function activeMenuMobile(){
      let body = document.querySelector("body");
      const windowSize = window.innerWidth
        if (windowSize <= 900) {
          if(menuMobile === true){
            body.style.overflow = "hidden";
            setMenuMobile(!menuMobile)
          }else{
            body.style.overflow = "scroll"; 
            setMenuMobile(!menuMobile)
          }
          
        }
      
  }
  

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
          stagger:delay,
        })
        setList("1")
        setVisible("0")
        activeMenuMobile();
      }else{
        tl.to(ref.current, {
          xPercent: xMove,
          autoAlpha: list,
          duration: duration,
          stagger:delay,
        })
        setList("0")
        setVisible("1")
        activeMenuMobile();
      }
    } 

    return (
      <section className={`${styles.container + " "} ${!menuMobile ? styles.active : ""}`}>
        <nav className={styles.container_navBar}>
          <div onClick={listAnimation}>
            <BarsMenu />
          </div>
          <ul className={styles.container_navBar_list}>
            {
              NavText.map((item,i)=>(
                <li key={i} className={styles.container_navBar_list_line}
                ref={(el) => (ref.current[i] = el)} >
                  {visible ?   
                    <Link href={item.href}>
                        {item.value}
                    </Link>:""}
                </li>
              ))
            }
          </ul>  
        </nav>
        <div className={styles.container_itens}>
          <ThemeToggle id={"theme"} click={() => setActiveTheme(inactiveTheme)}/> 
          <a href="/files/CV_BrenoVelosaFerrari.pdf " target="_blank" rel="noopener noreferrer" alt="Download do curriculo em PDF" download className={styles.container_itens_iten}><BsFillFileEarmarkPdfFill /></a>
          <a href="https://bit.ly/3q4s0oL" target="_blank" rel="noreferrer" alt="Link para o gitHub" className={styles.container_itens_iten}><BsGithub /></a>
          <a href="https://bit.ly/3cIuTZe" target="_blank" rel="noreferrer" alt="Link para o linkedin" className={styles.container_itens_iten}><BsLinkedin /></a>       
        </div>
      </section>
    )
  }