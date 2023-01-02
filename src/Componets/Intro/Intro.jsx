import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import v1 from '../../img/Vector1.png';
import v2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import glasse from '../../img/glassesimoji.png';
import Crown from '../../img/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv.jsx'

const Intro = () => {
  return (
    <div>
      <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Meet Gami</span>
                <span>I am full stack developer. I am Competitive programer .
                    In leet code I had a Experiance of 300+ question.
                    I am a good hard working person.
                </span>
            </div>

            <button className="button i-button">Hire Me</button>
             <div className="i-icons">
                <a href="https://github.com/meetgami510" target="blank">
                    <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/meet-gami-850670210/" target="blank">
                    <img src={LinkedIn} alt="" />
                </a>
                <a href="https://www.instagram.com/meet.gami.376/" target="blank">
                    <img src={Instagram} alt="" />
                </a>
             </div>
        </div>
        <div className="i-right">
            <img src={v1} alt="" /> 
            <img src={v2} alt="" /> 
            <img src={boy} alt="" /> 
            <img  style={{left:'-30%',top:'-25%'}} src={glasse} alt="" />
            <div style={{top:'-4%',left:'68%'}}>
              <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top:'12rem',left:'-8rem'}}>
              <FloatingDiv image={thumbup} txt1='Best Degine' txt2='Award'/>
            </div>
              <div className="blur" style={{background:"rgb(238,210,255)"}}>

              </div>
              <div className="blur" 
              style={{background:"#788097",
                      top:'17rem',
                      width:'21rem',
                      height:'11rem',
                      left:'-9rem'
                      }}>

              </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
