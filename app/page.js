"use client"
import Image from 'next/image'
import styles from '@/styles/page2.module.css'
import avatar from "@/assests/avatar2.png"
import React,{useState} from 'react';
import TimeMachine from '@/components/timemachine/timemachine';
import {VscTwitter} from "react-icons/vsc";
import {AiFillGithub} from "react-icons/ai";



const Timemachine = () => {
  return (
    <div className={styles.main} style={{padding:"0px"}}>
      <div style={{width:"100%"}}>
          <TimeMachine/>
      </div>
        <div className={styles.footer} style={{padding:"15px"}}>
            <p>crafted by</p>
                <div className={styles.social}>
                <Image  style={{marginLeft: "5px"}} src={avatar} width={20} height={20}></Image>
                <p  style={{marginLeft: "5px",fontSize:"13px"}}><span>Tanay</span></p>
                <a href='https://twitter.com/tanaydesaii'><VscTwitter style={{marginLeft: "5px"}}  size={20}/></a>
                <a href='https://github.com/TanayDesai'><AiFillGithub style={{marginLeft: "10px",marginRight:"7px"}} size={20}/></a>
                </div> 
          </div>
    </div>
  )
}

export default Timemachine;