import React from 'react'
import './Contect.css'

function Contect() {
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get in Touch</span>
                <span>Contact Me</span>
                <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
            </div>
        </div>

        <div className="c-right">
            <form>
                <input type="text" name="user_name" className="user" placeholder='Name'/>
                <input type="email" name="user_email" className="user" placeholder="Email"/>
                <textarea name="message" className="user" placeholder='Message'></textarea>
                <input type="Submit" value="Send" className="button"/>
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
                
            </form>
        </div>
    </div>
  );
};

export default Contect
