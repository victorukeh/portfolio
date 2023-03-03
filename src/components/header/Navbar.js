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
                })} value={active.home} text="Home" />
                <HeaderLink setActive={async () => setActive({
                    home: false,
                    about: true,
                    education: false,
                    experience: false,
                    projects: false,
                    contact: false,
                })} value={active.about} text="About" />
                <HeaderLink setActive={async () => setActive({
                    home: false,
                    about: false,
                    education: false,
                    experience: true,
                    projects: false,
                    contact: false,
                })} value={active.experience} text="Education & Experience" />
                {/* <HeaderLink setActive={async () => setActive({
                    home: false,
                    about: false,un
                    education: true,
                    experience: false,
                    projects: false,
                    contact: false,
                })} value={active.education} text="Education" /> */}
                <HeaderLink setActive={async () => setActive({
                    home: false,
                    about: false,
                    education: false,
                    experience: false,
                    projects: true,
                    contact: false,
                })} value={active.projects} text="Projects" />
                <HeaderLink setActive={async () => setActive({
                    home: false,
                    about: false,
                    education: false,
                    experience: false,
                    projects: false,
                    contact: true,
                })} value={active.contact} text="Contact" />
            </div>
            <div></div>
        </div >
    )
}

export default Navbar