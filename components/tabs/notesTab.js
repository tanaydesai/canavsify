"use client"
import Image from 'next/image'
import styles from '@/styles/page.module.css'
import {motion} from 'framer-motion'
import React, {useState, useRef, useEffect} from 'react'


const NotesTab = ({name,text,link,x,y,drag,deg}) => {
    return (
        <div style={{ transform: `rotate(${deg}deg)`}}>
          <motion.div whileHover={{scale:1.04,transition:{duration:0.5}}} transition={{duration:0.5}} drag={drag} dragMomentum={false} className={styles.display} style={{backgroundColor:"rgba(255, 255, 255, 0.5)",display: "block",minHeight:"120px", maxWidth:"300px",width:"fit-content",x:x,y:y}}>
            <div className={styles.displayBar} style={{backgroundColor: "transparent",borderBottom:"1px solid rgba(0,0,0, 0.4)",height:"30px"}}>
              <div className={styles.displayBarSearchBox} style={{backgroundColor: "transparent",height:"20px",justifyContent:"center",}}>{name}</div>
            </div>
            <div className={styles.notes}>
              {typeof text === "string" ? <div className={styles.notesHeader}><a href={link}>{text} </a></div> :text}
          </div>
        </motion.div>
      </div>
    )
}

export default NotesTab;