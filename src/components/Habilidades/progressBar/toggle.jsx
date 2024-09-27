import { useEffect, useRef } from "react";
import styles from "./toggle.module.scss"


export default function ToggleSlide({ children, value, color }) {
  const ref = useRef(null)
  const effectRan = useRef(false)

  useEffect(() => {
    if (effectRan.current === false) {
      let bar = ref.current
      bar?.style.setProperty(
        "--bg-size",
        value ? value + "%" : "#fff"
      );
      bar?.style.setProperty("--toggle-after-bg", color);
      return () => {
        effectRan.current = true
      }
    }
  }, [value, color])

  return (
    <div className={styles.container} id="slider">
      <div className={styles.container__slider} ref={ref} value={value}>{children}</div>
    </div>
  )
}