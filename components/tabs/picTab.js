"use client"
import Image from 'next/image'
import styles from '@/styles/page.module.css'
import {motion} from 'framer-motion'

const PicTab = ({pic,link,width,height,drag,x,y}) => {
    return (        
        <motion.div whileHover={{scale:1.04,transition:{duration:0.5}}} transition={{duration:0.5}} drag={drag} dragMomentum={false}  className={styles.picDisplay} style={{x:x,y:y}}>
            <a href={link}>
            <Image style={{borderRadius:"12px",margin:"auto",pointerEvents:"none"}} src={pic} width={width} height={height}></Image>
            </a>
        </motion.div>
    )
}

export default PicTab