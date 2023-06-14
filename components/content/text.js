import styles from '@/styles/page.module.css'
import Image from 'next/image'
import pic from "../../assests/images/pic.jpg"
import {VscTwitter} from 'react-icons/vsc'
import {AiFillGithub} from 'react-icons/ai'


export const ExploreAI = () => {
    return (        
        <div>
            {/* <Image style={{borderRadius:"5px"}} src={pic} width={100} height={100}></Image> */}
            <p>Explore AI is an AI Powered Search for Youtube Videos Search for answers directly inside thousands of YouTube videos, free-of-cost, easy-to-navigate and fast.</p>
            <div className={styles.social}>
              <a href='https://twitter.com/tanaydesaii'><VscTwitter style={{marginLeft: "5px"}}  size={20}/></a>
              <a href='https://github.com/TanayDesai'><AiFillGithub style={{marginLeft: "10px",marginRight:"7px"}} size={20}/></a>
            </div> 
        </div>
    )
}

export const Uiaftersex = () => {
    return (        
        <div>
            <p>an intuitive laboratory canvas that showcases uniquely crafted user interfaces & interactions that make you wanna (hopefully) come back to, after sex.❤️‍🩹</p>
            <p><a href='https://uiaftersex.vercel.app'>Here</a> </p>
        </div>
    )
}


export const safariTabTexts = [
{
     name: "Explore AI",
     text:  <ExploreAI />,
     x:-300,
     y:-200,
     drag: true
     },
{
    name: "uiaftersex",
    text:  <Uiaftersex />,
    x:300,
    y:-100,
    drag: true
    },   
 ]
 
 export const notesTabTexts = [
{
    text: "Tanay The Great Conquerer's Sophisticated Empire of Apps." ,
    x:300,
    y:300,
    drag: true,
    deg:"5",
      },
{
    text: "this canvas is open sourced on GitHub feel free to use it for yourself." ,
    x:-400,
    y:400,
    drag: true,
    deg:"-5",
        },
  ]
 