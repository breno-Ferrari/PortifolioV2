import { Children, useRef } from "react"
import styles from "./sliders.module.scss"

export default function Sliders({children,setId}) {
  const carrousel = useRef(null)


  const handleLeftClick = (e) =>{
    e.preventDefault();
    // console.log("carrousel.current.scrollLeft:" + carrousel.current.scrollLeft);
    // console.log("carrousel.current.offsetWidth:" + carrousel.current.offsetWidth);
    // console.log(carrousel.current.children[0].clientWidth);
    carrousel.current.scrollLeft -= carrousel.current.children[0].clientWidth - 32
  }
  const handleRightClick = (e) =>{
    e.preventDefault();
    // console.log("carrousel.current.scrollLeft:" + carrousel.current.scrollLeft);
    // console.log("carrousel.current.offsetWidth:" + carrousel.current.offsetWidth);
    // console.log(carrousel.current);
    carrousel.current.scrollLeft += carrousel.current.children[0].clientWidth + 32
  }

    return (
      <div className={styles.container}>
        <button className={`${styles.container__arrow} ${styles.container__arrow__arrowPrev}`} onClick={handleLeftClick}></button>
        <div className={styles.container__sliders} ref={carrousel}>
          {children}
        </div>
        <button className={`${styles.container__arrow} ${styles.container__arrow__arrowNext}`} onClick={handleRightClick}></button>
      </div>
    )
  }