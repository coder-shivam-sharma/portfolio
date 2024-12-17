import React from 'react'
import "./Contact.css"
import con from "../../assets/contact.png"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function contact() {
  useGSAP(()=>{
    let tl4 = gsap.timeline()
    tl4.from(".leftcontact",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".leftcontact",
        scroll: "body",
        scrub:2,
        start: "top 80%",
        end: "top 30%", 
      }
    })
    tl4.from(".rightcontact",{
       x:100,
       duration:1,
       opacity:0,
       stagger:1,
       scrollTrigger:{
         trigger:".rightcontact",
         scroll: "body",
         scrub:2,
         start: "top 80%",
         end: "top 30%", 
       }
     })
  })
  return (
     <div id="Contact">
         <div className="leftcontact">
          <img src={con} alt="" />
         </div>
         <div className="rightcontact">
          <form action="https://formspree.io/f/mldekznl" method='POST'>
            <input name="Username" type="text" placeholder='Name' />
            <input name="Email" type="email" placeholder='Email' />
            <textarea name="Message" id="textarea" placeholder='message me'></textarea>
            <input type="Submit" id="btn" placeholder='Submit' />

          </form>
         </div>

     </div>
  )
}

export default contact
