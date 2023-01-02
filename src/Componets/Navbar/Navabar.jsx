import React from 'react'
import './Navabar.css'

function Navabar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Profile</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none '}}>
                    <li>Home</li>
                    <li>Serviese</li>
                    <li>Experiense</li>
                    <li>Protfolio</li>
                    <li>Projects</li>
                </ul>
            </div>
            <button className="button">
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navabar
