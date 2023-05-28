"use client"
import Image from 'next/image'
import styles from '../../styles/page2.module.css'
import Link from 'next/link'
import React,{useState} from 'react';
import {ImCommand} from 'react-icons/im';
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation';
import Peek from '@/components/peek/peek';
import {VscTwitter} from 'react-icons/vsc'
import {AiFillGithub} from 'react-icons/ai'
import avatar from "../../assests/avatar2.png"
import {FiAlertOctagon} from 'react-icons/fi'
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'

export default function Home() {
  const router = useRouter();
  const [popUpValue, setPopUpValue] = useState('');
  const [open, setOpen] = useState(false);

  const handleButtonClick = (name) => {
    router.push(name);
  }

  const divVariants = {
    hidden: { scaleY: 0, originY: 1, y: -140, x:50  },
    visible: { scaleY: 1, originY: 1, y: -140,x:50  },
    collapsed: { scaleY: 0, originY: 1, y: -140 ,x:50  }
      };

  return ( 
    <div className={styles.main}>
      <div className={styles.content}>

        <div className={styles.box} style={{background:"radial-gradient(at center, rgba(215, 90, 88, 1.0), rgba(62, 37, 170, 1.0))",}}><Peek /></div>

        <div className={styles.container}>
          <div className={styles.scrollBox}>
          <motion.div  whileTap={{scale:0.9, transition:{duration:0.1}}} className={styles.display}><p>Peek</p></motion.div>
          <motion.div  onClick={() => {handleButtonClick("/sitesearch")}} whileTap={{scale:0.9, transition:{duration:0.1}}} className={styles.display}><p>Web + ⌘ K</p></motion.div>
          <motion.div  onClick={() => {handleButtonClick("/stack")}} whileTap={{scale:0.9, transition:{duration:0.1}}} className={styles.display}><p>Stack</p></motion.div>
          <motion.div  onClick={() => {handleButtonClick("/linkpreviews")}} whileTap={{scale:0.9, transition:{duration:0.1}}} className={styles.display}><p>Link Previews</p></motion.div>
          </div>
          {/* <div className={styles.stick}></div> */}
        </div>

        <div className={styles.blog}>

          <div className={styles.header}>
            <h7>Peek</h7>
            {/* <div><ImCommand size={25}></ImCommand></div> */}
          </div>
          <div className={styles.description}>
            <p>A simple and accessible way to view a website without the need to open it in a new tab.</p>
            <motion.p whileHover={{backgroundColor:"#f0f0f0"}} onTap={() => setOpen(!open)} className={styles.note}><span>Warning</span>{!open && <BsChevronDown  style={{marginLeft:"5px"}} size={15}/>}{open && <BsChevronUp  style={{marginLeft:"5px"}} size={15}/>}</motion.p>
            <div>{open && <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.4}} className={styles.note}><span>The Website screenshot will be replaced by an actual webview in an Electron app, locally, after downloading the repo. Since React does not support webviews on web. You can still check the demo on the main page.</span></motion.p>}</div>
          </div> 

          <div className={styles.subHeader}>
            <h7>Gist</h7>
          </div>
          <div className={styles.description}>
            <p>Peek allows you to quickly open & view links anywhere on the internet without clustering your tab bar.</p>
            <p>Just click on <span>Arc.net</span></p>
          </div> 

          <div className={styles.subHeader}>
            <h7>Resources</h7>
          </div>
          <div className={styles.description}>
            <li><code className={styles.code}>React + Next.js</code></li>
            <li><code className={styles.code}>framer-motion</code></li>
            <li><code className={styles.code}>Electron.js</code> (for webview)</li>
            {/* <motion.div
                        initial="collapsed"
                        animate={popUpValue ? 'visible' : 'hidden'}
                        variants={divVariants}
                        transition={{ duration: 0.2 }}
                        style={{
                        position: 'absolute',
                        borderRadius:"10px",
                        backgroundColor:"white",
                        margin:"auto",
                        color:"white",
                        width:"250px",
                        alignItems:"center",
                        height:"160px",
                        textAlign:"center",
                        justifyContent:"center",
                        padding: '5px',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)',
                        zIndex: 2
                }}
            >
              <Image style={{borderRadius:"12px",margin:"auto"}} src={starship} width={240} height={150}></Image>
            </motion.div> */}
            <p>Inspired by <a href='https://thebrowser.company/' onMouseEnter={() => setPopUpValue('Pop-up content')} onMouseLeave={() => setPopUpValue('')}> thebrowsercompany</a>'s (yes again, they make some cool shit) peek & iOS web previews ❤️‍🩹</p>
          </div>      
        </div>

        <hr className={styles.hr}></hr>
        <div className={styles.footer}>
          <p>crafted by</p>
            <div className={styles.social}>
              <Image  style={{marginLeft: "5px"}} src={avatar} width={20} height={20}></Image><p  style={{marginLeft: "5px",fontSize:"13px"}}><span>Tanay</span></p>
              <a href='https://twitter.com/tanaydesaii'><VscTwitter style={{marginLeft: "5px"}} color="black" size={20}/></a>
              <a href='https://github.com/TanayDesai'><AiFillGithub style={{marginLeft: "10px",marginRight:"7px"}} color="black" size={20}/></a>
            </div> 
        </div>

      </div>
    </div>
  )
}
