import React, { useRef,useState, useEffect } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import styles from "./stackhistory.module.css";
import spacex from "../../assests/stackimgs/spacex.png"
import tesla from "../../assests/stackimgs/tesla.png"
import apple from "../../assests/stackimgs/apple.png"
import arc from "../../assests/stackimgs/arc.png"
import Image from "next/image";

const CARD_OFFSET = 50; 
const SCALE_FACTOR = 0.06;
const gradient = "linear-gradient(to top, #f430a5 40%, #cee5f1 100%)"
// const CARD_COLORS = [gradient,"black","grey","red","green"];
// const CARD_COLORS = ["https://www.spacex.com/","https://www.apple.com/","https://www.tesla.com/","https://thebrowser.company/", "https://uiw.tf/"];
const CARD_COLORS = [spacex,apple,tesla,arc];

const StackCards = () => {
    const [cards, setCards] = useState(CARD_COLORS);
    const [open, setOpen] = useState(true)
    const [selected, setSelected] = useState(cards[0])
    
    const moveToEnd = from => {
      
        setCards(move(cards, from, 0));
        setOpen(false)
        setSelected(cards[from])
        
    };
   
    useEffect(() => {
        const down = (e) => {
          if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            setOpen(true)
            setSelected(false)
          }
        }
    
        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
      }, [])

    return (
        <div>
            <div>
            {open && cards.map((link, index) => {
                const canDrag = index === 0;
                console.log(index)
                return (
                <motion.div
                    key={link}
                    className={styles.card}
                    style={{
                        // background: link,
                        cursor: canDrag ? "grab" : "auto"
                    }}
                    animate={{
                    marginTop:"220px",
                    top: index * -CARD_OFFSET,
                    scale: 1 - index * SCALE_FACTOR,
                    zIndex: CARD_COLORS.length - index,
                    transition:{
                        duration:0.4
                    }
                }}
                transition={{
                    duration:0.5,
                }}
                    whileHover={{scale: 1.02 - index * SCALE_FACTOR,
                    transition:{duration:0.1}}}
                    onTap={() => moveToEnd(index)}
                >
                    {/* <webview className={styles.webview} src={link}></webview> */}
                    <Image src={link} className={styles.cardImg}></Image>   
                </motion.div>
            );
            })}

            {selected && !open && <motion.div
                    className={styles.card2}
                    animate={{
                        scale:1.1,
                        marginTop:"80px" ,
                        transition:{
                            duration:0.3
                        },
                    }}
                    transition={{
                        duration:0.5,
                    }}
                    >
                  
                    {/* {window.setTimeout(function () {
                    var webview = document.getElementById('myIframe');
                    webview.setAttribute('src', selected);
                }, 500)} */}
                    {/* <webview id="myIframe" src={selected} frameborder="0" className={styles.webview}></webview> */}
                    <Image src={selected} className={styles.cardImg}></Image>
                    <div onClick={() => {  
                        setOpen(true) 
                        setSelected(false)}} style={{height:"12.5px",top:"5px",position:"absolute",borderRadius:"17px",right:"10px",width:"25px",backgroundColor:"black",color:"white",fontSize:"10px"}}>X</div>

                    </motion.div>}
            </div>
        </div>
    )
}

export default StackCards;