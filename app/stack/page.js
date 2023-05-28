"use client"
import Image from 'next/image'
import styles from '../../styles/page2.module.css'
import Link from 'next/link'
import React,{useState} from 'react';
import {ImCommand} from 'react-icons/im';
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation';
// import Peek from '@/components/peek/peek';
import StackCards from '@/components/stackhistory/stackhistory';
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

        <div className={styles.box} style={{background:"radial-gradient(at center, rgba(215, 90, 88, 1.0), rgba(62, 37, 170, 1.0))",}}><StackCards /></div>

        <div className={styles.container}>
          <div className={styles.scrollBox}>
          <motion.div  whileTap={{scale:0.9, transition:{duration:0.1}}} className={styles.display}><p>Stack</p></motion.div>
          <motion.div  onClick={() => {handleButtonClick("/sitesearch")}} whileTap={{scale:0.9, transition:{duration:0.1}}} className={styles.display}><p>Web + ⌘ K</p></motion.div>
          <motion.div  onClick={() => {handleButtonClick("/peek")}} whileTap={{scale:0.9, transition:{duration:0.1}}} className={styles.display}><p>Peek</p></motion.div>
          <motion.div  onClick={() => {handleButtonClick("/linkpreviews")}} whileTap={{scale:0.9, transition:{duration:0.1}}} className={styles.display}><p>Link Previews</p></motion.div>
          </div>
          {/* <div className={styles.stick}></div> */}
        </div>

        <div className={styles.blog}>

          <div className={styles.header}>
            <h7>Stack</h7>
            {/* <div><ImCommand size={25}></ImCommand></div> */}
          </div>
          <div className={styles.description}>
            <p>A quirky way to view your search history:) Stack allows you to smoothly switch between tabs & keep'em well organised.</p>
            <p>To switch back to the stacked tabs you can also press Ctrl/<span>⌘</span> + K.</p>
            <motion.p whileHover={{backgroundColor:"#f0f0f0"}} onTap={() => setOpen(!open)} className={styles.note}><span>Note</span>{!open && <BsChevronDown  style={{marginLeft:"5px"}} size={15}/>}{open && <BsChevronUp  style={{marginLeft:"5px"}} size={15}/>}</motion.p>
            <div>{open && <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.4}} className={styles.note}><span>The Website screenshot can be replaced by an actual webview in an Electron app, locally, after downloading the repo. Since React does not support webviews on web & due to laggyness it wasn't included here.</span></motion.p>}</div>
          </div> 

          <div className={styles.subHeader}>
            <h7>Gist</h7>
          </div>
          <div className={styles.description}>
            <p>Peek allows you to quickly open & view links anywhere on the internet without clustering your tab bar.</p>
          </div> 

          <div className={styles.subHeader}>
            <h7>Resources</h7>
          </div>
          <div className={styles.description}>
          <p>The code for this component is <a href='https://github.com/TanayDesai'>here</a>. This was made with:</p>
            <li><code className={styles.code}>React + Next.js</code></li>
            <li><code className={styles.code}>framer-motion</code></li>
            <li><code className={styles.code}>Electron.js</code> (for webview)</li>
          </div>      
        </div>

        <hr className={styles.hr}></hr>
        <div className={styles.footer}>
          <p>crafted by</p>
            <div className={styles.social}>
              <Image  style={{marginLeft: "5px"}} src={avatar} width={20} height={20}></Image><p  style={{marginLeft: "5px",fontSize:"13px"}}><span>Tanay</span></p>
              <a href='https://twitter.com/tanaydesaii'><VscTwitter style={{marginLeft: "5px"}} size={20}/></a>
              <a href='https://github.com/TanayDesai'><AiFillGithub style={{marginLeft: "10px",marginRight:"7px"}} size={20}/></a>
            </div> 
        </div>

      </div>
    </div>
  )
}
