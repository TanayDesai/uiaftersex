"use client"
import Image from 'next/image'
import styles from '../styles/page.module.css'
import React, {useState, useRef, useEffect} from 'react'
import {ImCommand} from 'react-icons/im';
import {HiArrowSmallRight} from "react-icons/hi2";
import myGif from '../assests/1.gif'
import myGif2 from '../assests/2.gif'
import myGif3 from '../assests/3.gif'
import {motion} from "framer-motion";


export default function Home() {
  const targetRef = useRef(null);

        // const scrollToTarget = () => {
        //   if (targetRef.current) {
        //     targetRef.current.scrollIntoView({ behavior: 'smooth' });
        //   }
        // }

  const scrollToTarget = () => {
    const element = targetRef.current;
    if (element) {
      // const { top, left, height, width } = element.getBoundingClientRect();
      // const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      // const offsetTop = top + scrollTop - (window.innerHeight - height) / 2;
      // const offsetLeft = left + scrollLeft - (window.innerWidth - width) / 2;
      const { top, left, height, width } = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      const offsetTop = top + scrollTop - (viewportHeight - height) / 2;
      const offsetLeft = left + scrollLeft - (viewportWidth - width) / 2;


      window.scrollTo({
        top: offsetTop,
        left: offsetLeft,
        behavior: 'smooth',})
    }
  }
 
  useEffect(() => {
      scrollToTarget()
      const down = (e) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          scrollToTarget()
          console.log("Done")
        }
      }
      document.addEventListener('keydown', down)
      return () => document.removeEventListener('keydown', down)
    }, [])

  return (
    <div ref={targetRef} className={styles.main}>
     <motion.div drag dragMomentum={false} style={{backgroundColor:"white",x:200,y:100}} whileHover={{scale:1.009, transition:{duration:0.2}}}  className={styles.display}>
        <div className={styles.displayBar}>
          <div className={styles.displayBarIcons}>
          <div className={styles.displayBarIcon}></div>
          <div className={styles.displayBarIcon}></div>
          <div className={styles.displayBarIcon}></div>
        </div>
        <div className={styles.displayBarSearchBox}>Site Search + ⌘</div>
          <motion.div whileHover={{scale: 1.1}} className={styles.displayBarArrow}><HiArrowSmallRight color='black' size={20}></HiArrowSmallRight></motion.div>
        </div>
        <Image style={{display:"flex",margin:'auto',pointerEvents:'none'}} src={myGif} width={300} height={250} alt=""/>
      </motion.div>

      <motion.div drag dragMomentum={false} style={{x:300,y:200,background: "#C37158",background: "radial-gradient(at center bottom, #D08C85, #67E8CF)"}} initial={{scale:0.7}} whileHover={{scale:0.709, transition:{duration:0.2}}} className={styles.display}>
        <div className={styles.displayBar}>
          <div className={styles.displayBarIcons}>
          <div className={styles.displayBarIcon}></div>
          <div className={styles.displayBarIcon}></div>
          <div className={styles.displayBarIcon}></div>
        </div>
        <div className={styles.displayBarSearchBox}>Link Previews</div>
          <motion.div whileHover={{scale: 1.1}} className={styles.displayBarArrow}><HiArrowSmallRight color='black' size={20}></HiArrowSmallRight></motion.div>
        </div>
        
         {/* <Image style={{display:"flex",margin:'auto',pointerEvents:'none'}} width={300} height={200} alt=""/> */}
      </motion.div> 

      <motion.div drag dragMomentum={false} style={{background:"radial-gradient(at center, rgba(215, 90, 88, 1.0), rgba(62, 37, 170, 1.0))", y:50,x:1240}} whileHover={{scale:1.009, transition:{duration:0.2}}}  className={styles.display}>
        <div className={styles.displayBar}>
          <div className={styles.displayBarIcons}>
            <div className={styles.displayBarIcon}></div>
            <div className={styles.displayBarIcon}></div>
            <div className={styles.displayBarIcon}></div>
          </div>
          <div className={styles.displayBarSearchBox}>Peek</div>
          <motion.div whileHover={{scale: 1.1}} className={styles.displayBarArrow}><HiArrowSmallRight color='black' size={20}></HiArrowSmallRight></motion.div>
        </div>
        {/* <Image style={{display:"flex",margin:'auto',pointerEvents:'none'}}  width={300} height={250} alt=""/> */}
      </motion.div>

      <motion.div drag dragMomentum={false} style={{x:1300,y:-800}} className={styles.textBox} whileHover={{scale:1.008, transition:{duration:0.2}}}>
        <div className={styles.textBoxBar}>
          <div className={styles.displayBarIcons}>
            <div className={styles.displayBarIcon}></div>
            <div className={styles.displayBarIcon}></div>
            <div className={styles.displayBarIcon}></div>
          </div>
          <div className={styles.displayBarSearchBox}>Notes</div>
          <motion.div whileHover={{scale: 1.1}} className={styles.displayBarArrow}><HiArrowSmallRight color='black' size={20}></HiArrowSmallRight></motion.div>
        </div>
        <div className={styles.textBoxBottom}></div>
      </motion.div>

      <motion.div style={{y:-1000}} className={styles.logoBox}>
        <div className={styles.header}>
            <h7>uiaftersex</h7>
            <div><ImCommand size={25}></ImCommand></div>
        </div>
        <div className={styles.description}>
          <p>A simple, modern, and accessible UI framework for Next.js.A simple, modern, and accessible UI framework. </p>
          <p>A simple, modern, and <span>accessible UI framework for Next.js A simple</span> modern, and accessible UI framework for Next.js. </p>
        </div> 
        <div className={styles.footer}>
          {/* <p>Built by <span>Tanay</span>✌</p> */}
          <p><span>*signature*</span></p>
        </div>
      </motion.div>


    </div>
  )
}
