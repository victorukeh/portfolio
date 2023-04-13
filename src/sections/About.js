import React from 'react'
import "../styles/css/about.css"
import AboutHeader from '../components/about/AboutHeader'
import AboutBody from '../components/about/AboutBody'
const About = () => {
    return (
        <div className="about" id="about"><AboutHeader /><AboutBody /></div>
    )
}

export default About