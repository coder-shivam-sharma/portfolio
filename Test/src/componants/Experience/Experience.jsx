import React from 'react';
import './Experience.css';
import Card from '../Cards/Cards';
import experienceImg from '../../assets/experience.png';
import experience2 from '../../assets/experience2.png';
import staff from "../../assets/staff.png"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


 // Import a relevant image

function Experience() {
  useGSAP(()=>{
    let tl3 = gsap.timeline()
    tl3.from("p ",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"p",
        scroll: "body",
        scrub:2,
        start: "top 60%",
        end: "top 30%", 
      }
    })
    tl3.from(".leftexperience li ",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".leftexperience li",
        scroll: "body",
        scrub:2,
        start: "top 60%",
        end: "top 30%", 
      }
    })
    tl3.from(".rightexperience ",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightexperience ",
        scroll: "body",
        scrub:2,
        start: "top 80%",
        end: "top 40%", 
      }
    })
    
  })
  return (
    <div id="Experience">
       <p>2 YEARS TEACHING EXPERIENCE IN A CBSE SCHOOL</p>
      <div className="experience-section">
        <div className="heading">
          <h1></h1>
        </div>
        <div className="experience-content">
          <div className="leftexperience">
            <ul>
              <li><span>FIELD</span>: TEACHING</li>
              <li><span>SCHOOL</span>: RISING SUN INTERNATIONAL SCHOOL BAKEWAR, ETAWAH</li>
              <li><span>DESIGNATION</span>: PGT COMPUTER SCIENCE</li>
              <li><span>TOTAL EXPERIENCE</span>: 2 YEARS</li>
              <li><span>RESPONSIBILITIES</span>:</li>
              <li>• Conducted hands-on lab sessions to reinforce theoretical concepts through coding exercises, software development
projects, and real-world problem-solving.</li>
<li>• Create tests, assignments, and project evaluations to monitor and improve student learning outcomes.</li>
<li>• Played an active role in maintaining and troubleshooting school IT systems, ensuring smooth functioning of labs,
networks, and classroom technology.</li>
<li>• Here I am also appointed as a Subject examiner for classes of 10th and 12th by CBSE Board.</li>

            </ul>
          </div>
          <div className="rightexperience">

            <Card title="2 YEARS EXPERIENCE" image={experienceImg} />
            <Card title="CBSE SUBJECT EXAMINER" image={staff}/>
            <Card title=" COMPUTER TEACHER " image={experience2}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
