"use client"
import Image from 'next/image'
import styles from '@/styles/page.module.css'
import {motion} from 'framer-motion'
import React, {useState, useRef, useEffect} from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'


const NotesTab = ({text,x,y,drag,deg}) => {
    return (
        <div style={{ transform: `rotate(${deg}deg)`}}>
        <motion.div drag={drag} dragMomentum={false} className={styles.display} style={{borderRadius:"5px",margin:"auto",x:x,y:y}}>
                <div className={styles.notes}>
                <div className={styles.notesHeader}>{text}</div>
                </div>
        </motion.div>
      </div>
    )
}

export default NotesTab;