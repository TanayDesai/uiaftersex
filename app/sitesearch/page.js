"use client"
import Image from 'next/image'
import styles from '../../styles/page2.module.css'
import Link from 'next/link'
import React,{useState, useEffect} from 'react';
import {ImCommand} from 'react-icons/im';
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation';
import CommandMenuSiteSearch from '@/components/sitesearch/command';
import {VscTwitter} from 'react-icons/vsc'
import {AiFillGithub} from 'react-icons/ai'

export default function Home() {
  const router = useRouter();

  const handleButtonClick = (name) => {
    router.push(name);
  }
  const [open, setOpen] = React.useState(false)  
  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  })

  return (
    <div className={styles.main}>
      {open && <CommandMenuSiteSearch className={styles.menu}></CommandMenuSiteSearch>} 
      <div className={styles.content}>

        <div className={styles.box}><h1>Click K</h1></div>

        <div className={styles.container}>
          <div className={styles.scrollBox}>
          <motion.div  whileHover={{scale:0.9, transition:{duration:0.1}}} transition={{duration:0.3}} className={styles.display}><p>Site Search</p></motion.div>
          <motion.div  onClick={() => {handleButtonClick("/peek")}} whileHover={{scale:0.9, transition:{duration:0.1}}} className={styles.display}><p>Peek</p></motion.div>
          <motion.div  onClick={() => {handleButtonClick("/linkpreviews")}} whileHover={{scale:0.9, transition:{duration:0.1}}} transition={{duration:0.3}} className={styles.display}><p>Link Previews</p></motion.div>
          </div>
          <div className={styles.stick}></div>
        </div>

        <div className={styles.blog}>

          <div className={styles.header}>
            <h7>Site Search</h7>
            {/* <div><ImCommand size={25}></ImCommand></div> */}
          </div>
          <div className={styles.description}>
            <p>A simple, modern, and accessible UI framework for Next.js.A simple, modern, and accessible UI framework. </p>
          </div> 

          <div className={styles.subHeader}>
            <h7>Gist</h7>
          </div>
          <div className={styles.description}>
            <p>A simple, modern, <code className={styles.code}>Hello</code> and accessible UI framework for Next.js.A simple, modern, and accessible UI framework. </p>
            <p>A simple, modern, and <span>accessible UI framework for Next.js A simple</span> modern, and accessible UI <code className={styles.code}>Ctrl</code> + <code className={styles.code}>K</code> for Next.js. </p>
          </div> 

          <div className={styles.subHeader}>
            <h7>Resources</h7>
          </div>
          <div className={styles.description}>
            <li><code className={styles.code}>React</code></li>
            <li><code className={styles.code}>React</code></li>
            <li><code className={styles.code}>React</code></li>
            <p>A simple, modern, <code className={styles.code}>Hello</code> and accessible UI framework for Next.js.A simple, modern, and accessible UI framework. </p>
          </div> 
          
        </div>

        <div className={styles.footer}>
            <hr className={styles.hr}></hr>
            <p>Built by <span>Tanay</span>❤️‍🩹</p>
            <div className={styles.social}>
              <div className={styles.socialicon}><VscTwitter  size={17}/></div>
              <div className={styles.socialicon}><AiFillGithub size={17}/></div>
            </div>
        </div>

      </div>
    </div>
  )
}
