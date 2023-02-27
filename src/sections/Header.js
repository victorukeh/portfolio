import React from 'react'
import "../styles/css/header.css"
import Navbar from '../components/header/Navbar'
import Hello from '../components/header/Hello'
import Bounce from '../components/header/Bounce'
import Jobs from '../components/header/Jobs'
import Avater from '../components/header/Avater'
import IconList from '../components/header/IconList'
import Ball from "../components/items/Ball"
const Header = () => {
    return (
        // </div>
        <>
            <div class="container-fluid">
                <div class="background">
                    <div class="cube"></div>
                    <div class="cube"></div>
                    <div class="cube"></div>
                    <div class="cube"></div>
                    <div class="cube"></div>
                    <Navbar />
                    <Hello />
                    <Bounce />
                    <Jobs />
                    <Avater />
                    <IconList />
                    <Ball />
                </div>
            </div>
        </>

    )
}

export default Header