import React from 'react'
import "./Project.css"
import Card from "../Cards/Cards"
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import cb from "../../assets/cb.png"
import tti from "../../assets/tti.png"
import br from "../../assets/br.png"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)



function Project() {
   useGSAP(()=>{
      let tl3 = gsap.timeline()
      tl3.from("#para",{
        y:100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger:"#para",
          scroll: "body",
          scrub:2,
          start: "top 60%",
          end: "top 30%", 
        }
      })
      
    })



  return (
     <div id="Project">
      <h1 id="para">2+ YEARS EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
         <Card title="VIRTUAL ASSISTANT" image={va}/>
         <Card title="AI POWERED FITNESS WEBSITE" image={fw}/>
         <Card title="AI CHATBOT" image={cb}/>
         <Card title="AI TEXT TO IMAGE" image={tti}/>
         <Card title="AI BACKGROUND REMOVER" image={va}/>

      </div>
     </div>
  )
}

export default Project
