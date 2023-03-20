import React, {useState, useEffect} from 'react'
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
import Person from '../components/header/Person'
import ScrollNavbar from '../components/header/ScrollNavbar'
import MiniNavbar from '../components/header/MiniNavbar'

const Header = (props) => {
    const [navBg, setNavBg] = useState(false);
  const isHome = props.name === 'Homepage' ? true : false;

  const changeNavBg = () => {
   window.scrollY >= 10 ? setNavBg(true) : setNavBg(false);
  }

  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, [])
    return (
        // </div>
        <>
            <div class="container-fluid">
                <div className="background" >
                    <div class="cube"></div>
                    <div class="cube"></div>
                    <div class="cube"></div>
                    <div class="cube"></div>
                    <div class="cube"></div>
                    {windowDimensions.width > 900 ? <Navbar /> : <MiniNavbar/>}
                    {windowDimensions.width > 800 && navBg && <ScrollNavbar />}
                    {windowDimensions.width > 800 && <Hello />}
                    <Person height={windowDimensions.width}/>
                    {/* <Bounce /> */}
                    {windowDimensions.width > 800 && <Jobs />}
                    {/* <Avater /> */}
                    {windowDimensions.width > 800 && <IconList />}
                    {windowDimensions.width > 800 && <Ball />}
                    {windowDimensions.width > 800 && <Circle radius="160px" text="programmer" marginLeft="75vw" marginTop="50px" photo={Pic1} />}
                    {windowDimensions.width > 800 && <Circle radius="80px" text="protector" marginLeft="70vw" marginTop="270px" photo={Pic2} />}
                    {windowDimensions.width > 800 && <Circle radius="100px" text="Designer" marginLeft="65vw" marginTop="-15px" photo={Pic3} />}
                </div>
            </div>
        </>

    )
}

export default Header