"use client"
import React, {useState} from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import peekImg from "../../assests/peekimgs/starship.png";


const Peek = () => {
  const [open , setOpen] = useState(false)

  const change = () => {
    setOpen(!open)
  }


  return (
   <div className={styles.center}>
      <p onClick={change} className={styles.underlineAnimation}>Arc.net</p>

    {open &&  <motion.div initial={{scale:0.7}} animate={{scale:[0.7,1.1,1]}} transition={{type:"ease" ,duration: 0.4,time:[0,0.7 ** 0.4,0.4 ]}}  className={styles.modal}>
      <button onClick={change} className={styles.modalClose}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M18 6l-12 12"></path>
        <path d="M6 6l12 12"></path>
        </svg>
      </button>
      <div id="modalContent" className={styles.modalContent}>
        {/* <webview src="https://arc.net/" className={styles.view}></webview> */}
        <Image className={styles.view} src={peekImg}></Image>
      </div>
    </motion.div>}

    </div>
    )
}


export default Peek;