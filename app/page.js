"use client"
import styles from '@/styles/page.module.css'
import React, {useState, useRef, useEffect} from 'react'
import useWindowSize from "@rooks/use-window-size"

import NotesTab from '@/components/tabs/notesTab'
import SafariTab from '@/components/tabs/safariTab'
import PicTab from '@/components/tabs/picTab'
import { safariTabTexts, notesTabTexts, picTabTexts } from '@/components/content/text'

const Home = () => {
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
  const targetRef = useRef(null);

  const scrollToTarget = () => {
      const element = targetRef.current;
      if (element) {
        const { top, left, height, width } = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        const offsetTop = top + scrollTop - (viewportHeight - height) / 2;
        const offsetLeft = left + scrollLeft - (viewportWidth - width) / 2;
        window.scrollTo({
          top: offsetTop,
          left: offsetLeft,
          behavior: 'smooth',})
      }
    }
  useEffect(() => {
    scrollToTarget()
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        scrollToTarget()
      }
    }
    document.addEventListener('keydown', down)
    return () => {document.removeEventListener('keydown', down)}
  }, [])

  return (
    <div ref={targetRef} className={styles.main}>
      
      {notesTabTexts.map((tab, index) => (
         <NotesTab text={tab.text} link={tab.link} name={tab.name} key={index} x={tab.x} y={tab.y} deg={tab.deg} drag={tab.drag} />
      ))}

      {safariTabTexts.map((tab, index) => (
         <SafariTab  name={tab.name}  key={index} drag={tab.drag} text={tab.text} x={tab.x} y={tab.y}/>
      ))}

      {picTabTexts.map((tab, index) => (
         <PicTab key={index} drag={tab.drag} link={tab.link} width={tab.width} height={tab.height} pic={tab.pic} x={tab.x} y={tab.y}/>
      ))}
      
    </div>
  )
}


export default Home;