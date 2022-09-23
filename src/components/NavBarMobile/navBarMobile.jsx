import styles from "./navBarMobile.module.scss"
import BarsMenu from "./bars/bars"
import { useState ,useRef} from "react";
import NavTextMobile from "./const" 
import Link from "../Link/link"

export default function NavBarMobile() {
    const [menu,setMenu] = useState(true);
    const ref = useRef(new Array(NavTextMobile.length));

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

    return (
        <section className={styles.container}>
            <nav className={styles.container__navBar}>
                <div className={menu===true ? styles.container__navBar__burguer :styles.container__navBar__burguerActive} onClick={activeMenu} >
                    <BarsMenu />
                </div>
                <div className={menu===true ? styles.container__navBar__sideMenu :styles.container__navBar__sideMenuActive}>
                    <ul className={styles.container__navBar__sideMenuActive__list}>
                        <div className={styles.container__navBar__sideMenuActive__list__burguer} onClick={activeMenu} >
                            <BarsMenu />
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