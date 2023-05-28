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
import starship from "../../assests/images/starship.png"
import avatar from "../../assests/avatar2.png"

export default function Home() {
  const router = useRouter();
  const [popUpValue, setPopUpValue] = useState('');

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

  const divVariants = {
    hidden: { scaleY: 0, originY: 1, y: -140, x:50  },
    visible: { scaleY: 1, originY: 1, y: -140,x:50  },
    collapsed: { scaleY: 0, originY: 1, y: -140 ,x:50  }
      };

  return (
    <div className={styles.main}>
      {open && <CommandMenuSiteSearch className={styles.menu}></CommandMenuSiteSearch>} 
      <div className={styles.content}>

        <div className={styles.box} style={{backgroundColor:"white",color:"black", paddingTop: "200px"}}>
          <ImCommand style={{width:"100%"}} color='black' onClick={() => {setOpen(true)}} size={25}></ImCommand>
          <h4>Click me</h4>
        </div>

        <div className={styles.container}>
          <div className={styles.scrollBox}>
          <motion.div  whileTap={{scale:0.9, transition:{duration:0.1}}} className={styles.display}><p>Web + ⌘ K</p></motion.div>
          <motion.div  onClick={() => {handleButtonClick("/peek")}} whileTap={{scale:0.9, transition:{duration:0.1}}} className={styles.display}><p>Peek</p></motion.div>
          <motion.div  onClick={() => {handleButtonClick("/stack")}} whileTap={{scale:0.9, transition:{duration:0.1}}} className={styles.display}><p>Stack</p></motion.div>
          <motion.div  onClick={() => {handleButtonClick("/linkpreviews")}} whileTap={{scale:0.9, transition:{duration:0.1}}} className={styles.display}><p>Link Previews</p></motion.div>
          </div>
          {/* <div className={styles.stick}></div> */}
        </div>

        <div className={styles.blog}>

          <div className={styles.header}>
            <h7>Web + ⌘ K</h7>
            {/* <div><ImCommand size={25}></ImCommand></div> */}
          </div>
          <div className={styles.description}>
            <p>Site Search combines a<code className={styles.code}><ImCommand size={15}/></code> + <code className={styles.code}>K</code> box & Arc's site search feature into a quick & easy way to broswe the web.</p>
            <p>Click Ctrl/Cmd + K or <span onClick={() => {setOpen(true)}}>⌘</span></p>
          </div> 

          <div className={styles.subHeader}>
            <h7>Gist</h7>
          </div>
          <div className={styles.description}>
            <p>Site search aims to <span>directly search inside your favioutre apps & websties </span> without switching tabs & opening links. You can add any number of sites you wish to browse in.</p>
            <p>Plus there's always room for some <span> surprises:)</span></p>
          </div> 

          <div className={styles.subHeader}>
            <h7>Resources</h7>
          </div>
          <div className={styles.description}>
            <li><a href='https://cmdk.paco.me/'>cdmk box </a>by paco.</li>
            <li><code className={styles.code}>React + Next.js</code> for implementation.</li>
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
            <p>Inspired by <a href='https://thebrowser.company/' onMouseEnter={() => setPopUpValue('Pop-up content')} onMouseLeave={() => setPopUpValue('')}> thebrowsercompany</a>'s site search ❤️‍🩹</p>
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
