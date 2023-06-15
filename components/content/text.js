import styles from '@/styles/page.module.css'
import Image from 'next/image'
import pic2 from "../../assests/images/pic2.png"
import pic3 from "../../assests/images/pic3.png"
import {VscTwitter} from 'react-icons/vsc'
import {AiFillGithub} from 'react-icons/ai'
import {FiExternalLink} from 'react-icons/fi'

export const ExploreAI = () => {
    return (        
        <div>
            <p>Explore AI is an AI Powered Search for Youtube Videos. Enables search for answers directly inside thousands of YouTube videos, free-of-cost, easy-to-navigate and fast.</p>
            <a href='exploreai.vercel.app'><FiExternalLink style={{marginTop:"10px"}} size={25}/></a>
        </div>
    )
}

export const Uiaftersex = () => {
    return (        
        <div>
            <p>an intuitive laboratory canvas that showcases uniquely crafted user interfaces & interactions that make you wanna (hopefully) come back to, after sex.❤️‍🩹</p>
            <a href='https://uiaftersex.vercel.app/'><FiExternalLink style={{marginTop:"10px"}} size={25}/></a>
            <a href='https://github.com/TanayDesai/uiaftersex'><AiFillGithub style={{marginTop:"10px",marginLeft:"8px"}} size={25}/></a>
        </div>
    )
}

export const Socials = () => {
    return (        
        <div style={{margin:"auto",textAlign:"center"}}> 
            <p>
            <a href='https://twitter.com/tanaydesaii'><VscTwitter style={{marginLeft: "5px"}}  size={40}/></a> 
            <a href='https://github.com/TanayDesai'><AiFillGithub style={{marginLeft: "10px",marginRight:"7px"}} size={40}/></a>
            </p>
        </div>
    )
}

export const Notes = () => {
    return (        
        <div> 
            <div className={styles.notesHeader}>Tanay Desai</div>
            <p>crafting software & ui interfaces Feel free to use it for your own personal websites.Feel free to use it for your own personal websites. Feel free to use it for your own personal websites.</p>
        </div>
    )
}


export const safariTabTexts = [
{
    name: "Explore AI",
    text:  <ExploreAI />,
    x:-350,
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
    name:"me.txt",
    text:<Notes/>,
    x:120,
    link:"",
    y:200,
    drag: false,
    deg:"5",
    },
{
    name:"social.zip",
    text: <Socials/>,
    link:"",
    x:400,
    y:0,
    drag: false,
    deg:"-5",
    },
{
    name:"notes.txt",
    text:"This canvas is open source. Feel free to use it for your own personal websites.",
    x:-450,
    link:"https://github.com/TanayDesai/canvasify",
    y:400,
    drag: false,
    deg:"-5",
    },
]

  export const picTabTexts = [
{
    pic: pic3,
    link: "https://tanaydesai5.wixsite.com/tanaydesai",
    width:150,
    height:150,
    x:-100,
    y:-200,
    drag: true,
    },
  ]
 