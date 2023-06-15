"use client"
import Image from 'next/image'
import styles from '@/styles/page.module.css'
import {motion} from 'framer-motion'
import React, {useState, useRef, useEffect} from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const SafariTab = ({name,text,x,y,drag}) => {

    return (
        <motion.div whileHover={{scale:1.04,transition:{duration:0.5}}} transition={{duration:0.5}} drag={drag} dragMomentum={false} className={styles.display} style={{x:x,y:y}}>
            <div className={styles.displayBar}>
                <div className={styles.displayBarIcons}>
                <div className={styles.displayBarIcon} ></div> {/* FF605C FFBD44 00CA4E */}
                <div className={styles.displayBarIcon} ></div>
                <div className={styles.displayBarIcon} ></div>
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