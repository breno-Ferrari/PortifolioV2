import styles from "./navBarMobile.module.scss"
import BarsMenu from "./bars/bars"
import { useState ,useRef,useLayoutEffect} from "react";
import NavTextMobile from "./const" 
import Link from "../Link/link"
import ThemeToggle from "../ThemeToggle/themeToggle"
export default function NavBarMobile() {
    const [menu,setMenu] = useState(true);
    const ref = useRef(new Array(NavTextMobile.length));
    const [activeTheme, setActiveTheme] = useState("light");
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";   
    function activeMenu(){
        let body = document.querySelector("body");

        if(menu === true){
            setMenu(false)
            body.style.overflow = "hidden";
        }else{
            setMenu(true)
            body.style.overflow = "scroll";
        }
    }
    
    useLayoutEffect(() => {
        document.body.dataset.theme = activeTheme;
      }, [activeTheme]);

    return (
        <section className={styles.container}>
            <nav className={styles.container__navBar}>
             
                    <BarsMenu onClick={activeMenu} modal={menu}/>
            
                <div className={menu===true ? styles.container__navBar__sideMenu :styles.container__navBar__sideMenuActive}>
                    <ul className={styles.container__navBar__sideMenuActive__list}>
                        <div className={styles.container__navBar__sideMenuActive__list__burguer} >
                            <ThemeToggle id={"theme"} click={() => setActiveTheme(inactiveTheme)}/> 
                            <BarsMenu onClick={activeMenu} modal={menu}/>
                        </div>
                        {
                        NavTextMobile.map((item,i)=>(
                            <li className={styles.container__navBar__sideMenuActive__list__item} key={i} ref={(el) => (ref.current[i] = el)}>
                                {item.download === true ?
                                <Link href={item.href} download onClick={activeMenu}>
                                    {item.value}
                                </Link>
                                :
                                <Link href={item.href} onClick={activeMenu}>
                                    {item.value}
                                </Link>
                                }
                               
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </nav>
        </section>
       
    )
}