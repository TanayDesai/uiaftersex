import React, { useState } from 'react';
import styles from './Preview.module.css';
import { motion } from "framer-motion";
import Image from 'next/image';

const Preview = ({img, name}) => {
    const [popUpValue, setPopUpValue] = useState('');


    const divVariants = {
    hidden: { scaleY: 0, originY: 1 },
    visible: { scaleY: 1, originY: 1 },
    collapsed: { scaleY: 0, originY: 1 }
      };

    return (
        <div className={styles.cont}>
            <div style={{maxWidth:"350px",margin:"auto"}}>
                <motion.div
                        initial="collapsed"
                        animate={popUpValue ? 'visible' : 'hidden'}
                        variants={divVariants}
                        transition={{ duration: 0.2 }}
                        style={{
                        position: 'relative',
                        borderRadius:"10px",
                        margin:"auto",
                        color:"white",
                        width:"250px",
                        alignItems:"center",
                        height:"160px",
                        textAlign:"center",
                        justifyContent:"center",
                        top: '-10px',
                        padding: '5px',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)',
                        zIndex: 2
                }}
            >
                {/* <p>BOX BOX BOX </p> */}
                <Image style={{borderRadius:"12px",margin:"auto"}} src={img} width={240} height={150}></Image>
            </motion.div>
          
            <p className={styles.underlineAnimation}
                onMouseEnter={() => setPopUpValue('Pop-up content')}
                onMouseLeave={() => setPopUpValue('')}>
            {name}</p>
            </div>
    
      </div>
    )
  }


export default Preview;
