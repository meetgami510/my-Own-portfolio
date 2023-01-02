import React from 'react'
import './Services.css'

import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import resume from './resume.pdf'  
const Services = () => {
  return (
    <div className="services">

        <div className="s-left">
            <span>My Awesome</span>
            <span>servieces</span>
            <span>
                This is just dume print port foliy them.
                <br />
                line.you can share you another detalis in you resume.
            </span>
            <a href={resume} download>
                <button className="button s-button">Downlod CV</button>
            </a>
            
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        <div className="s-right">
            <div style={{left:'14rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Figma , Sketch , Photoshop , Adobe , Adobe xd"}
                />
            </div>
            <div style={{top:'12rem',left:'-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {"html css javascript react SQL MongoDB"}
                />
            </div>
            <div style={{top:'19rem',left:'17rem'}}>
                <Card
                emoji = {Humble}
                heading = {'UX/UI'}
                detail = {" Full Stack Developer , Competitive programer , Problem Solver"}
                />
            </div>
            <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services
