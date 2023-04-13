import React, { useState } from 'react'
import HeaderLink from './HeaderLink'
import "../../styles/css/header.css"

const Navbar = () => {
    const [active, setActive] = useState({
        home: true,
        about: false,
        education: false,
        experience: false,
        projects: false,
        contact: false
    })
    console.log(active.home)
    return (
        <div className="header__navbar">
            <div></div>
            <div className='header__links'>
                <HeaderLink setActive={async () => setActive({
                    home: true,
                    about: false,
                    education: false,
                    experience: false,
                    projects: false,
                    contact: false,
                })} value={active.home} text="Home" id="home"/>
                <HeaderLink setActive={async () => setActive({
                    home: false,
                    about: true,
                    education: false,
                    experience: false,
                    projects: false,
                    contact: false,
                })} value={active.about} text="About" id="about"/>
                <HeaderLink setActive={async () => setActive({
                    home: false,
                    about: false,
                    education: false,
                    experience: true,
                    projects: false,
                    contact: false,
                })} value={active.experience} text="Experience" id="exp"/>
                <HeaderLink setActive={async () => setActive({
                    home: false,
                    about: false,
                    education: true,
                    experience: false,
                    projects: false,
                    contact: false,
                })} value={active.education} text="Education" id="educate"/>
                <HeaderLink setActive={async () => setActive({
                    home: false,
                    about: false,
                    education: false,
                    experience: false,
                    projects: true,
                    contact: false,
                })} value={active.projects} text="Projects" id="projects"/>
                <HeaderLink setActive={async () => setActive({
                    home: false,
                    about: false,
                    education: false,
                    experience: false,
                    projects: false,
                    contact: true,
                })} value={active.contact} text="Contact" id="contact"/>
            </div>
            <div></div>
        </div >
    )
}

export default Navbar