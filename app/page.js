"use client"
import Image from 'next/image'
import styles from '../styles/page.module.css'
import React, {useState, useRef, useEffect} from 'react'
import {ImCommand} from 'react-icons/im';
import {HiArrowSmallRight} from "react-icons/hi2";
import myGif from '../assests/site.gif'
import myGif2 from '../assests/link.gif'
import myGif3 from '../assests/peek.gif'
import signature from "../assests/signature2.svg"
import avatar from "../assests/avatar2.png"
import {motion} from "framer-motion";
import useWindowSize from "@rooks/use-window-size"
import { useRouter } from 'next/navigation';
import {VscTwitter} from 'react-icons/vsc'
import {AiFillGithub} from 'react-icons/ai'



export default function Home() {
  const router = useRouter();
  const targetRef = useRef(null);
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();

  const scrollToTarget = () => {
    const element = targetRef.current;
    if (element) {
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

  const handleButtonClick = (name) => {
      router.push(name);
    } 
  
  useEffect(() => {
        scrollToTarget()
        const down = (e) => {
          if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            scrollToTarget()
          }
        }
        document.addEventListener('keydown', down)
        return () => {document.removeEventListener('keydown', down)}
      }, [])

  return (
    <div className={styles.main}>

     <motion.div drag dragMomentum={false} style={{backgroundColor:"white",x: innerWidth < 900 ? 100 : 200,y:150}} whileHover={{scale:1.009, transition:{duration:0.2}}}  className={styles.display}>
        <div onClick={() => {handleButtonClick("/sitesearch")}} className={styles.displayBar}>
          <div className={styles.displayBarIcons}>
          <div className={styles.displayBarIcon}></div>
          <div className={styles.displayBarIcon}></div>
          <div className={styles.displayBarIcon}></div>
        </div>
        <div className={styles.displayBarSearchBox}>Web + ⌘ K</div>
          <motion.div onClick={() => {handleButtonClick("/sitesearch")}} whileHover={{scale: 1.1}} className={styles.displayBarArrow}><HiArrowSmallRight color='black' size={20}></HiArrowSmallRight></motion.div>
        </div>
        <Image style={{display:"flex",margin:'auto',pointerEvents:'none'}} src={myGif} width={300} height={250} alt=""/>
      </motion.div>

      <motion.div drag dragMomentum={false} style={{x: innerWidth > 900 ? 300 : 800 > innerWidth ? 400 : 0,y: innerHeight < 650 ? 300 :200,background: "#C37158",background: "radial-gradient(at center bottom, #D08C85, #67E8CF)"}} initial={{scale:0.7}} whileHover={{scale:0.709, transition:{duration:0.2}}} className={styles.display}>
        <div onClick={() => {handleButtonClick("/linkpreviews")}} className={styles.displayBar}>
          <div className={styles.displayBarIcons}>
          <div className={styles.displayBarIcon}></div>
          <div className={styles.displayBarIcon}></div>
          <div className={styles.displayBarIcon}></div>
        </div>
        <div className={styles.displayBarSearchBox}>Link Previews</div>
          <motion.div onClick={() => {handleButtonClick("/linkpreviews")}} whileHover={{scale: 1.1}} className={styles.displayBarArrow}><HiArrowSmallRight color='black' size={20}></HiArrowSmallRight></motion.div>
        </div>
        
         <Image src={myGif2} style={{display:"flex",margin:'auto',pointerEvents:'none'}} width={300} height={200} alt=""/>
      </motion.div> 

      <motion.div drag dragMomentum={false} style={{background:"radial-gradient(at center, rgba(215, 90, 88, 1.0), rgba(62, 37, 170, 1.0))", y: innerHeight > 650 ? 10 : -20, x: innerWidth  < 1250 && 600 < innerWidth ? 900 : 600 > innerWidth && 1250 > innerWidth ? 1000 : 1340}} whileHover={{scale:1.009, transition:{duration:0.2}}}  className={styles.display}>
        <div onClick={() => {handleButtonClick("/peek")}} className={styles.displayBar}>
          <div className={styles.displayBarIcons}>
            <div className={styles.displayBarIcon}></div>
            <div className={styles.displayBarIcon}></div>
            <div className={styles.displayBarIcon}></div>
          </div>
          <div className={styles.displayBarSearchBox}>Peek</div>
          <motion.div onClick={() => {handleButtonClick("/peek")}} whileHover={{scale: 1.1}} className={styles.displayBarArrow}><HiArrowSmallRight color='black' size={20}></HiArrowSmallRight></motion.div>
        </div>
        
        <Image src={myGif3} style={{display:"flex",margin:'auto',pointerEvents:'none',borderRadius:"20px"}}  width={300} height={250} alt=""/>
      </motion.div>

      <motion.div drag dragMomentum={false} style={{x:  innerWidth < 1250 && 700 < innerWidth  ? 900 : innerWidth < 1250 && 600 > innerWidth ? 900 :  1400,y:innerHeight < 700 ? -900: -800}} className={styles.textBox} whileHover={{scale:1.008, transition:{duration:0.2}}}>
        <div className={styles.textBoxBar}>
          <div className={styles.displayBarIcons}>
            <div className={styles.displayBarIcon}></div>
            <div className={styles.displayBarIcon}></div>
            <div className={styles.displayBarIcon}></div>
          </div>
          <div className={styles.displayBarSearchBox} style={{backgroundColor:"transparent",borderColor:"#666666",borderStyle:"solid",borderWidth:"1px"}}>notes.txt</div>
          <motion.div whileHover={{scale: 1.1}} className={styles.displayBarArrow}><HiArrowSmallRight color='black' size={20}></HiArrowSmallRight></motion.div>
        </div>
        <div className={styles.textBoxBottom}>
          <div className={styles.notes}>
            <div className={styles.notesHeader}>Controls</div>
            <li><code className={styles.code}>Ctrl/Cmd</code> + <code className={styles.code}>K</code> for center stage.</li>
            <li>Press arrows/search-bar for Demo + Docs.</li>
            <li>Try dragging the broswer tabs:)</li>
            <p>PS: uiaftersex is open-source. 👇</p>
            <a href='https://github.com/TanayDesai'><AiFillGithub style={{marginTop:10}} color="black" size={20}/></a> 
            {/* <p>A simple, <code className={styles.code}>modern</code>, and accessible</p> */}
          </div>
        </div>
      </motion.div>
      
      <motion.div drag dragMomentum={false} style={{x: innerWidth > 900 ? 700 : 800 > innerWidth ? 400 : 0,y: innerHeight < 650 ? 300 :-1300,background: "#C37158",background: "radial-gradient(at center bottom, #D08C85, #67E8CF)"}} initial={{scale:0.7}} whileHover={{scale:0.709, transition:{duration:0.2}}} className={styles.display}>
        <div onClick={() => {handleButtonClick("/linkpreviews")}} className={styles.displayBar}>
          <div className={styles.displayBarIcons}>
          <div className={styles.displayBarIcon}></div>
          <div className={styles.displayBarIcon}></div>
          <div className={styles.displayBarIcon}></div>
        </div>
        <div className={styles.displayBarSearchBox}>Stack Browser</div>
          <motion.div onClick={() => {handleButtonClick("/stack")}} whileHover={{scale: 1.1}} className={styles.displayBarArrow}><HiArrowSmallRight color='black' size={20}></HiArrowSmallRight></motion.div>
        </div>
        
         <Image src={myGif2} style={{display:"flex",margin:'auto',pointerEvents:'none'}} width={300} height={200} alt=""/>
      </motion.div> 

      <motion.div ref={targetRef} style={{y:-1300, x: innerWidth < 800 ? 500 : 0}} className={styles.logoBox}>
        <div className={styles.header}>
            <h7>uiaftersex</h7>
            {/* <div><ImCommand size={25}></ImCommand></div> */}
        </div>
        <div className={styles.description}>
          <p>an intiuitive laboratory canvas that showcases uniquely crafted <span>user interfaces & interactions</span> that make you wanna (hopefully) come back to, <span>  after sex</span>.❤️‍🩹</p>
          <p>all peices aim to feel good, inspire to build more or just some <span>"fuck-it why not"s</span>.</p>
        </div> 
        
        <div className={styles.footer}>
          <p>crafted by</p>
            <div className={styles.social}>
              <Image  style={{marginLeft: "5px"}} src={avatar} width={20} height={20}></Image>
              <p  style={{marginLeft: "5px",fontSize:"13px"}}><span>Tanay</span></p>
              <a href='https://twitter.com/tanaydesaii'><VscTwitter style={{marginLeft: "5px"}} color="black" size={20}/></a>
              <a href='https://github.com/TanayDesai'><AiFillGithub style={{marginLeft: "10px",marginRight:"7px"}} color="black" size={20}/></a>
            </div> 
        </div>
      </motion.div>

    </div> 
  )
}
