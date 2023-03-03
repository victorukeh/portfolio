import React from 'react'
import "../styles/css/header.css"
import Navbar from '../components/header/Navbar'
import Hello from '../components/header/Hello'
import Bounce from '../components/header/Bounce'
import Jobs from '../components/header/Jobs'
import Avater from '../components/header/Avater'
import IconList from '../components/header/IconList'
import Ball from "../components/items/Ball"
import Circle from '../components/header/Circle'
import Pic1 from "../styles/images/pic-1.jpg"
import Pic2 from "../styles/images/pic-2.jpg"
import Pic3 from "../styles/images/pic-3.png"

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
                    <Circle radius="160px" text="programmer" marginLeft="75vw" marginTop="5vh" photo={Pic1} />
                    <Circle radius="80px" text="protector" marginLeft="70vw" marginTop="50vh" photo={Pic2} />
                    <Circle radius="100px" text="Designer" marginLeft="62vw" marginTop="-5vh" photo={Pic3} />
                </div>
            </div>
        </>

    )
}

export default Header