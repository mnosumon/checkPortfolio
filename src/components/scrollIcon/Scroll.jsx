import React, { useEffect, useRef, useState } from 'react'
import './scroll.css'
import { FaAngleUp } from "react-icons/fa6";


const Scroll = () => {
let [scoll, setscoll] = useState(false)
let scolRef = useRef()

useEffect(()=>{
    window.addEventListener("scroll", ()=>{
        if (window.scrollY > 300) {
            setscoll(true)
        }else{
            setscoll(false)
        }
    });
},[])
let handleIcon = ()=>{
    window.scrollTo({top: 0, right: 0, behavior: 'smooth'})
}

// let [is200down, setIs200down] = useState(false)
// let handleIcon = ()=>{
//     window.scrollTo({top: 0, right: 0, behavior: 'smooth'})
// }
// let bottomToTop = ()=>{
//     let scroolHidden = 200
//     let scrollTerms = document.body.scrollTop || document.documentElement.scrollTop
//     if (scrollTerms > scroolHidden) {
//         setIs200down(true)
//     }else{
//         setIs200down(false)
//     }
// }
// useEffect(()=>{
//     window.addEventListener('scroll', bottomToTop)
//     return ()=> window.removeEventListener('scroll', bottomToTop)
// },[])
  return (
    <div>
       { scoll &&
       <span onClick={handleIcon} ref={scolRef}  className='scroll'>
            <FaAngleUp className='scroll_icon'/>
        </span>
       }
    </div>
  )
}

export default Scroll