"use client"
import Image from 'next/image'
import styles from '../../styles/page2.module.css'
import Link from 'next/link'
import React,{useState} from 'react';
import TimeMachine from '@/components/timemachine/timemachine';
import Dock from '@/components/navbar/navbar';


const Timemachine = () => {
  return (
    <div className={styles.main} style={{height:"100vh"}}>
      <div className={styles.content} style={{width:"100%"}}>
          <TimeMachine/>
      </div>
        {/* <Dock/> */}
    </div>
  )
}

export default Timemachine;