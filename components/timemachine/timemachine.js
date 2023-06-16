import React, { useRef,useState, useEffect } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import styles from "./timemachine.module.css";
import Image from "next/image";
import avatar from "@/assests/avatar2.png"
import {HiArrowSmallRight} from "react-icons/hi2";
import site from "@/assests/demos/sites.png"
import link from "@/assests/demos/link.png"
import stack from "@/assests/demos/stack.png"
import { useSwipeable } from "react-swipeable";
import {HiArrowsRightLeft} from "react-icons/hi2";
import {VscTwitter} from "react-icons/vsc";
import {AiFillGithub} from "react-icons/ai";

export const Uiaftersex = () => {
    return (
        <div style={{width:"100%",margin:"5px"}}>
            <div className={styles.header}>
                <h7>uiaftersex</h7>   
            </div>
            <div className={styles.notes}>
            <p>an intuitive laboratory canvas that showcases uniquely crafted <span>user interfaces & interactions</span> that make you wanna (hopefully) come back to, <span>  after sex</span>.❤️‍🩹</p>
            <p>all pieces aim to feel good, inspire to build more or just some <span>"fuck-it why not"s</span>.</p>
            </div> 
      </div>
    )
}

const CARD_OFFSET = 60; 
const SCALE_FACTOR = 0.15;
const CARD_COLORS = [{Color:"aliceblue",Name:"uiaftersex",Image:false},{Color:"radial-gradient(at center bottom, #D08C85, #67E8CF)",Name:"Stack",Image:stack},{Color:"radial-gradient(at center, rgba(215, 90, 88, 1.0), rgba(62, 37, 170, 1.0))",Name:"Link Previews",Image:link},{Color:"white",Name:"Site Search",Image:site},{Color:"radial-gradient(at center, #DEBFAC, #679ED8);",Name:"Peek",Image:true}]; 

const TimeMachine = () => {
    const [cards, setCards] = useState(CARD_COLORS);
    
    const moveToEnd = from => {
        setCards(move(cards, from, 0));
    };

    const handleClickDown = () => {
        const arr = [...cards]
        const firstDict = arr.shift()
        arr.push(firstDict);
        setCards(arr)
    };

    const handleClickUp = () => {
        const arr = [...cards]
        const lastDict = arr.pop();
        arr.unshift(lastDict);
        setCards(arr)
    };

    const handlers = useSwipeable({
        onSwiped: (eventData) => {
          const { dir } = eventData;
          if (dir === "Up") {
            handleClickDown();
          }
          if (dir === "Down") {
            handleClickUp();
          }
        }
      });

    return (
        <div> 
            {/* {...handlers} */}
            <div  style={{width:"100%",height:"800px"}}>
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
                        {link.Image && <div className={styles.displayBar}>
                            <div className={styles.displayBarIcons}>
                            <div className={styles.displayBarIcon}></div>
                            <div className={styles.displayBarIcon}></div>
                            <div className={styles.displayBarIcon}></div>
                        </div>
                            <div className={styles.displayBarSearchBox}>{link.Name}</div>
                            <motion.div  whileHover={{scale: 1.1}} className={styles.displayBarArrow}><HiArrowSmallRight color='black' size={20}></HiArrowSmallRight></motion.div>
                        </div>} 
                       {link.Image ? <Image src={link.Image} style={{display:"flex",marginTop:"30px",margin:'auto',pointerEvents:'none',width:"200px",height:"200px"}} alt=""/> : <Uiaftersex/>}
                    </motion.div> 
            );
            })}
               <motion.div whileHover={{scale:0.9,transition:{duration:0.2}}} transition={{duration:0.2}} className={styles.button} onClick={handleClickDown}><HiArrowsRightLeft size={20} style={{margin:"auto"}} /></motion.div>
            </div>
        </div>
    )
}

export default TimeMachine;