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
import { User } from '@geist-ui/core';


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
          <motion.div  whileTap={{scale:0.9, transition:{duration:0.1}}} className={styles.display}><p>Site Search</p></motion.div>
          <motion.div  onClick={() => {handleButtonClick("/peek")}} whileTap={{scale:0.9, transition:{duration:0.1}}} className={styles.display}><p>Peek</p></motion.div>
          <motion.div  onClick={() => {handleButtonClick("/linkpreviews")}} whileTap={{scale:0.9, transition:{duration:0.1}}} className={styles.display}><p>Link Previews</p></motion.div>
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
        <hr className={styles.hr}></hr>
        <div className={styles.footer}>
          <p>crafted by</p>
            <div className={styles.social}>
              <a href='https://twitter.com/tanaydesaii'>
              <User scale={0.8} src='https://pbs.twimg.com/profile_images/1659708484953477120/1UWxbIeX_400x400.jpg' name="tanay"></User></a> 
              <a href='https://twitter.com/tanaydesaii'><VscTwitter style={{marginLeft: "5px"}} color="black" size={20}/></a>
              <a href='https://github.com/TanayDesai'><AiFillGithub style={{marginLeft: "10px",marginRight:"7px"}} color="black" size={20}/></a>
            </div> 
        </div>

      </div>
    </div>
  )
}
