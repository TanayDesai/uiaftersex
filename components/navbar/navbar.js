"use client"
import {motion,useMotionValue,useSpring,useTransform,} from "framer-motion";
import { useRef, useState } from "react";
import styles from "./navBar.module.css"
import { AiFillTwitterCircle,AiFillGithub } from "react-icons/ai";

const buttons = [
    {
        link:"https://twitter.com/tanaydesaii",
        icon:<AiFillTwitterCircle size="100%"/>,
        index:1
    }
    ,{
        link:"https://github.com/TanayDesaii",
        icon:<AiFillGithub size="100%"/>,
        index:2
    }
]

const Dock = () => {
    let mouseX = useMotionValue(Infinity);

    return (

      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        style={{
            display: "inline-flex",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            backgroundColor: "white",
            padding:"10px",
            alignItems:"flex-end",
            height: "4rem",
            position: "fixed",
            bottom:10,
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "1rem",
            gap: "1rem",
          
        }}
      >
        {buttons.map((thing,index) => (
         <AppIcon mouseX={mouseX} key={thing.index} link={thing.link} icon={thing.icon} />
        ))}
      </motion.div>
     
    );
    
  }
  
const AppIcon = ({ mouseX, link, icon }) => {
    let refLol = useRef(null);
   
    let distance = useTransform(mouseX, (val) => {
      let bounds = refLol.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
      return val - bounds.x - bounds.width / 2;
    });
  
    let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
    let height = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
      <motion.div ref={refLol}  onClick={() =>{window.open(link)}} style={{ width, height}} className={styles.ball}>
          {icon}
      </motion.div>
    );
  }

export default Dock;
  