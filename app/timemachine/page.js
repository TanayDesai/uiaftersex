"use client"
import Image from 'next/image'
import styles from '../../styles/page2.module.css'
import Link from 'next/link'
import React,{useState} from 'react';
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation';
import TimeMachine from '@/components/timemachine/timemachine';

const Timemachine = () => {
  const router = useRouter();

  const handleButtonClick = (name) => {
    router.push(name);
  }

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {/* <div className={styles.box}> */}
          <TimeMachine/>
        </div>
        </div>
  )
}

export default Timemachine;