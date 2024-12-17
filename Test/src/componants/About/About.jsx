import React from 'react'
import "./About.css"
import Card from "../Cards/Cards"
import mern from "../../assets/mern.png"
import java from "../../assets/java.png"
import dsa from "../../assets/dsa.png"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function about() {
  useGSAP(()=>{
    let tl2 = gsap.timeline()
    tl2.from(".circle",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll: "body",
        scrub:2,
        start: "top 60%",
        end: "top 30%", 
      }
    })
    tl2.from(".line",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        scroll: "body",
        scrub:2,
        start: "top 60%",
        end: "top 30%", 
      }
    })
    tl2.from(".aboutdetails h1",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails h1",
        scroll: "body",
        scrub:2,
        start: "top 50%",
        end: "top 20%", 
      }
    })
    tl2.from(".aboutdetails li",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails li",
        scroll: "body",
        scrub:2,
        start: "top 50%",
        end: "top 20%", 
      }
    })
    tl2.from(".rightabout",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightabout",
        scroll: "body",
        scrub:2,
        start: "top 50%",
        end: "top 20%", 
      }
    })
     
  })
  return (
     <div id="About">
        <div className="leftabout">
          <div className="circleline">
            <div className="circle"></div>
            <div className="line"></div>
            
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
          </div>
          <div className="aboutdetails">
            <div className="personalinfo">
              <h1>Personal Info</h1>
              <ul>
                <li><span>NAME</span> SHIVAM SHARMA</li>
                <li><span>AGE</span>: 23</li>
                <li><span>GENDER</span>: MALE</li>
                <li><span>LANGUAGE KNOWN </span> : HINDI, ENGLISH</li>

              </ul>
            </div>
            <div className="education">
              <h1>Education</h1>
              <ul>
                <li><span>DEGREE</span>: MASTER OF COMPUTER APPLICATION</li>
                <li><span>BRANCH</span> : INFORMATION TECHNOLOGY</li>
                <li><span>CGPA</span> : APPEARING</li>

              </ul>

            </div>
            <div className="skills">
              <h1>Skills</h1>
              <ul>
                <li>MERN STACK DEVELOPER</li>
                <li>DJANGO</li>
                <li>PYTHON</li>
                <li>JAVA</li>
                <li>SPRING BOOT</li>

                <li>DATA STRUCTURE AND ALGORITHMS</li>

              </ul>
            </div>
          </div>

        </div>
        <div className="rightabout">
          <Card title="MERN STACK DEVELOPER" image={mern} />
          <Card title="JAVA" image={java}/>
          <Card title="DSA" image={dsa}/>

        </div>

     </div>
  )
}

export default about
