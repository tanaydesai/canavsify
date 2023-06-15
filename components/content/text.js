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
            {/* <div className={styles.social}>
              <a href='https://twitter.com/tanaydesaii'><VscTwitter style={{marginLeft: "5px"}}  size={20}/></a>
              <a href='https://github.com/TanayDesai'><AiFillGithub style={{marginLeft: "10px",marginRight:"7px"}} size={20}/></a>
            </div>  */}
        </div>
    )
}

export const Uiaftersex = () => {
    return (        
        <div>
            <p>an intuitive laboratory canvas that showcases uniquely crafted user interfaces & interactions that make you wanna (hopefully) come back to, after sex.❤️‍🩹</p>
        </div>
    )
}

export const Icons = () => {
    return (        
        <div style={{margin:"auto",textAlign:"center"}}> 
            <p>
            <a href='https://twitter.com/tanaydesaii'><VscTwitter style={{marginLeft: "5px"}}  size={40}/></a> 
            <a href='https://github.com/TanayDesai'><AiFillGithub style={{marginLeft: "10px",marginRight:"7px"}} size={40}/></a>
            </p>
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
    name:"notes.txt",
    text: "Tanay The Great Conquerer's Sophisticated Empire of Apps." ,
    x:300,
    y:100,
    drag: true,
    deg:"5",
    },
{
    name:"social.zip",
    text: <Icons/>,
    x:-400,
    y:200,
    drag: true,
    deg:"-5",
    },
  ]

  export const picTabTexts = [
{
    pic: pic,
    width:100,
    height:100,
    x:-100,
    y:-200,
    drag: false,
    },
{
    pic: pic,
    width:100,
    height:100,
    x:-300,
    y:-300,
    drag: false,
    },
  ]
 