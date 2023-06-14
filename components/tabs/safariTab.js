"use client"
import Image from 'next/image'
import styles from '@/styles/page.module.css'
import {motion} from 'framer-motion'
import React, {useState, useRef, useEffect} from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const SafariTab = ({name,text,x,y,drag}) => {

    return (
        <motion.div drag={drag} dragMomentum={false} className={styles.display} style={{margin:"auto",x:x,y:y}}>
            <div className={styles.displayBar}>
                <div className={styles.displayBarIcons}>
                <div className={styles.displayBarIcon} style={{backgroundColor: '#FF605C'}}></div>
                <div className={styles.displayBarIcon} style={{backgroundColor: '#FFBD44'}}></div>
                <div className={styles.displayBarIcon} style={{backgroundColor: '#00CA4E'}}></div>
                </div>
                <div className={styles.displayBarSearchBox}>{name}</div>
                <div className={styles.displayBarArrow}><AiOutlineArrowRight size={20}/></div>
            </div>
            <div className={styles.notes}>
               {text}
            </div>
        </motion.div>
    )
}

export default SafariTab