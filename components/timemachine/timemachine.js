import React, { useRef,useState, useEffect } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import styles from "./timemachine.module.css";
import Image from "next/image";
import {HiArrowSmallRight} from "react-icons/hi2";
import { InView } from "react-intersection-observer";
import site from "@/assests/demos/sites.png"
import link from "@/assests/demos/link.png"
import stack from "@/assests/demos/stack.png"

const CARD_OFFSET = 50; 
const SCALE_FACTOR = 0.15;
const CARD_COLORS = [{Color:"aliceblue",Name:"uiaftersex",Image:false},{Color:"radial-gradient(at center bottom, #D08C85, #67E8CF)",Name:"Stack",Image:stack},{Color:"radial-gradient(at center, rgba(215, 90, 88, 1.0), rgba(62, 37, 170, 1.0))",Name:"Link Previews",Image:link},{Color:"white",Name:"Site Search",Image:site},{Color:"radial-gradient(at center, #DEBFAC, #679ED8);",Name:"Peek",Image:false}]; 

const TimeMachine = () => {
    const [cards, setCards] = useState(CARD_COLORS);
    
    const moveToEnd = from => {
        setCards(move(cards, from, 0));
    };

    const handleIntersection = (inView, entry) => {
        console.log(entry.target.textContent)
        const indexlol = cards.findIndex(item => item.Name === entry.target.textContent);
        if (inView) {
            setCards(move(cards, indexlol,0));
          }
      };

    return (
        <div>
            {cards.map((link, index) => {
                return (
                    <motion.div
                        key={link.Color}
                        style={{
                            background: link.Color,
                        }}
                        animate={{
                            marginTop:"250px",
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR,
                            zIndex: CARD_COLORS.length - index,
                            transition:{
                                duration:0.4
                            }
                    }}
                        whileHover={{scale: 1.02 - index * SCALE_FACTOR,
                        transition:{duration:0.1}}}

                        onTap={() => moveToEnd(index)} className={styles.display}>
                        <div className={styles.displayBar}>
                            <div className={styles.displayBarIcons}>
                            <div className={styles.displayBarIcon}></div>
                            <div className={styles.displayBarIcon}></div>
                            <div className={styles.displayBarIcon}></div>
                        </div>
                        <div className={styles.displayBarSearchBox}>{link.Name}</div>
                        <motion.div  whileHover={{scale: 1.1}} className={styles.displayBarArrow}><HiArrowSmallRight color='black' size={20}></HiArrowSmallRight></motion.div>
                        </div> 
                       {link.Image && <Image src={link.Image} style={{display:"flex",marginTop:"30px",margin:'auto',pointerEvents:'none',width:"60%",height:"200px"}} alt=""/> }
                    </motion.div> 
            );
            })}
          
            <div className={styles.container}>
                <div className={styles.scrollBox}>
                    <InView  as="div" onChange={handleIntersection}>
                        <motion.div className={styles.display2}>
                            <motion.h1 onClick={() => {handleButtonClick("/")}} whileTap={{scale:0.9, transition:{duration:0.1}}}>uiaftersex</motion.h1>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}} >
                                <div className={styles.stick}></div>
                                <div className={styles.leftProgress}></div>
                            </div>
                        </motion.div> 
                       
                    </InView>
                    <InView  as="div" onChange={handleIntersection}>
                        <motion.div className={styles.display2}>
                            <motion.h1  onClick={() => {handleButtonClick("/stackhistory")}} whileTap={{scale:0.9, transition:{duration:0.1}}}>Stack</motion.h1>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}} >
                                <div className={styles.progress}></div>
                                <div className={styles.stick}></div>
                            </div>
                            </motion.div>
                    </InView>
                    <InView  as="div" onChange={handleIntersection}>
                        <motion.div className={styles.display2}>
                            <motion.h1  onClick={() => {handleButtonClick("/linkpreviews")}} whileTap={{scale:0.9, transition:{duration:0.1}}} >Link Previews</motion.h1>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}} >
                                <div className={styles.progress}></div>
                                <div className={styles.stick}></div>
                            </div>
                            </motion.div>
                    </InView>
                    <InView  as="div" onChange={handleIntersection}>
                        <motion.div className={styles.display2}>
                            <motion.h1  onClick={() => {handleButtonClick("/sitesearch")}} whileTap={{scale:0.9, transition:{duration:0.1}}}>Site Search</motion.h1>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}}>
                                <div className={styles.progress}></div>
                                <div className={styles.stick}></div>
                            </div>
                            </motion.div>
                    </InView>
                    <InView  as="div" onChange={handleIntersection}>
                        <motion.div className={styles.display2}>
                            <motion.h1  onClick={() => {handleButtonClick("/peek")}} whileTap={{scale:0.9, transition:{duration:0.1}}}>Peek</motion.h1>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}}>
                                <div className={styles.rightProgress}></div>
                                <div className={styles.stick}></div>
                            </div>
                            </motion.div>
                    </InView>
                </div>
                {/*  */}
            </div>
        </div>
    )
}

export default TimeMachine;