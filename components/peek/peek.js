"use client"
import React, {useState} from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";

const Peek = () => {
  const [open , setOpen] = useState(false)

  const change = () => {
    setOpen(!open)
  }


  return (
   <div className={styles.center}>
      <h1 onClick={change}>Arc.net</h1>

    {open &&  <motion.div initial={{scale:0.7}} animate={{scale:[0.7,1.1,1]}} transition={{type:"ease" ,duration: 0.4,time:[0,0.7 ** 0.4,0.4 ]}}  className={styles.modal}>
      <button onClick={change} className={styles.modalClose}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M18 6l-12 12"></path>
        <path d="M6 6l12 12"></path>
        </svg>
      </button>
      <div id="modalContent" className={styles.modalContent}>
        {/* <p>dkdkhdk</p> */}
        <webview src="https://arc.net/" className={styles.view}></webview>
       
      </div>
    </motion.div>}

    </div>
    )
}


export default Peek;