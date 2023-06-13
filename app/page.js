"use client"
import Image from 'next/image'
import pic from '../assests/images/pic.jpg'
import styles from '@/styles/page.module.css'
import {motion} from 'framer-motion'
import React, {useState} from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.main}>
        <motion.div drag dragMomentum={false}  className={styles.display} style={{borderRadius:"5px"}}>
          <div className={styles.notes}>
          <div className={styles.notesHeader}>Made With ❤️ by {isOpen ? "Tanay" : "Veer"}</div>
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>Click Me</button>
        </motion.div>

        <motion.div drag dragMomentum={false} className={styles.display} style={{x:400}}>
          <div className={styles.displayBar}>
            <div className={styles.displayBarIcons}>
              <div className={styles.displayBarIcon} style={{backgroundColor: '#FF605C'}}></div>
              <div className={styles.displayBarIcon} style={{backgroundColor: '#FFBD44'}}></div>
              <div className={styles.displayBarIcon} style={{backgroundColor: '#00CA4E'}}></div>
            </div>
            <div className={styles.displayBarSearchBox}>Explore AI</div>
            <div className={styles.displayBarArrow}><AiOutlineArrowRight size={20}/></div>
          </div>
          <div className={styles.notes}>
              <p>Musk was born in Pretoria, South Africa, and briefly attended the University of Pretoria before moving to Canada at age 18, acquiring citizenship through his Canadian-born mother.</p>
              <li><code className={styles.code}>npm run dev</code> + <code className={styles.code}>K</code> for center stage.</li>
              <li>Press arrows/search-bar for Demo + Docs.</li>
              <p> Two years later, he matriculated at Queen's University and transferred to the University of Pennsylvania.</p>
          </div>
        </motion.div>

        {isOpen && <motion.div drag dragMomentum={false} className={styles.display} style={{x:400}}>
          <div className={styles.displayBar}>
            <div className={styles.displayBarIcons}>
              <div className={styles.displayBarIcon} style={{backgroundColor: '#FF605C'}}></div>
              <div className={styles.displayBarIcon} style={{backgroundColor: '#FFBD44'}}></div>
              <div className={styles.displayBarIcon} style={{backgroundColor: '#00CA4E'}}></div>
            </div>
            <div className={styles.displayBarSearchBox}>Explore AI</div>
            <div className={styles.displayBarArrow}></div>
          </div>
         <Image src={pic} width={400} height={310}></Image>
        </motion.div>}


    </div>
  )
}


export default Home;