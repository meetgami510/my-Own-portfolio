import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png";
import Amezon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png";

function Works() {
  return (
    <div className="works">
        <div className="s-left">
            <span>Works For ALL These</span>
            <span>Brand & Clients</span>
            <span>
                This is just dume print port foliy them.
                <br />
                line.you can share you another detalis in you resume.
                <br />
                this very help full to my jury ne.
                <br />
                hello this is meet gami.
                <br />

            </span>
            <button className="button s-button">Hire me</button>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amezon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>

                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle YellowCircle"></div>

            </div>
        </div>
    </div>
  )
}

export default Works
