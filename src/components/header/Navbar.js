import React from 'react'
import HeaderLink from './HeaderLink'
import "../../styles/css/header.css"

const Navbar = () => {
    return (
        <div className="header__navbar">
            <div></div>
            <div className='header__links'>
                <HeaderLink  text="Home" id="home"/>
                <HeaderLink  text="About" id="about"/>
                <HeaderLink  text="Experience" id="exp"/>
                <HeaderLink  text="Education" id="educate"/>
                <HeaderLink  text="Projects" id="projects"/>
                <HeaderLink  text="Contact" id="contact"/>
            </div>
            <div></div>
        </div >
    )
}

export default Navbar