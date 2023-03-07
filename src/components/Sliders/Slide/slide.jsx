import styles from "./slide.module.scss"
import Image from "next/image";
// import projectist from "./projectList.jsx";

export default function Slide({children}) {
    return (
      <div className={styles.slide}>
        {children}
      </div>
    )
  }