import React from "react";
import { useRef } from "react"
import styles from "./bars.module.scss"
import { forwardRef } from 'react';


const BarsMenu = forwardRef(function createX(props, ref) {
  const {bar1,bar2,bar3} = ref

  return (
    <div className={styles.container}>
      <div className={styles.bar1} ref={bar1}></div>
      <div className={styles.bar2} ref={bar2}></div>
      <div className={styles.bar3} ref={bar3}></div>
    </div>
  )
});

export default BarsMenu;
