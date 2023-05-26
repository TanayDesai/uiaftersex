import React, { useRef,useState, useEffect } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import styles from "./stackhistory.module.css";


const CARD_OFFSET = 50; 
const SCALE_FACTOR = 0.06;
const gradient = "linear-gradient(to top, #f430a5 40%, #cee5f1 100%)"
const CARD_COLORS = [gradient,"black","grey","red","green"];
// const CARD_COLORS = ["https://www.spacex.com/","https://www.apple.com/","https://www.tesla.com/","https://thebrowser.company/", "https://uiw.tf/"];


const StackCards = () => {
    const [cards, setCards] = useState(CARD_COLORS);
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(cards[0])
    
    const moveToEnd = from => {
        if (!selected) {
        setCards(move(cards, from, 0));
        setOpen(false)
        setSelected(cards[from])
        }
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
                        background: link,
                        cursor: canDrag ? "grab" : "auto"
                    }}
                    animate={{
                    marginTop:"260px",
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
                    <div onClick={() => moveToEnd(index)} style={{height:"25px",position:"absolute",borderRadius:"17px",marginLeft:"10px",marginTop:"13px",width:"60px",}}></div>
                     <div style={{borderRadius:"20px",padding:"5px"}}>
                        {/* <webview className={styles.webview} src={link}></webview> */}
                    </div>
                </motion.div>
            );
            })}

            {selected && <motion.div
                    style={{
                        background: selected,
                    }}
                    className={styles.card2}
                    animate={{
                        scale:1.1,
                        marginTop:"100px" ,
                        transition:{
                            duration:0.3
                        },
                    }}
                    transition={{
                        duration:0.5,
                    }}
                    >
                    <div style={{borderRadius:"20px",padding:"5px",}}>
                    {/* {window.setTimeout(function () {
                    var webview = document.getElementById('myIframe');
                    webview.setAttribute('src', selected);
                }, 500)} */}
                    {/* <webview id="myIframe" src={selected} frameborder="0" className={styles.webview}></webview> */}
                    </div>

                    </motion.div>}
            </div>
        </div>
    )
}

export default StackCards;