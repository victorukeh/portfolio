import React, {useState, useEffect} from 'react'
import AboutBodyLarge from './AboutBodyLarge'
import AboutBodyMini from './AboutBodyMini'
const AboutBody = () => {
    const hasWindow = typeof window !== "undefined";

    function getWindowDimensions() {
      const width = hasWindow ? window.innerWidth : null;
      const height = hasWindow ? window.innerHeight : null;
      return {
        width,
        height,
      };
    }
  
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
    useEffect(() => {
      if (hasWindow) {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
  
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }, [hasWindow]);
    return (
        <>
        {windowDimensions.width > 979 ? <AboutBodyLarge/> : <AboutBodyMini/>}
        </>
       
    )
}

export default AboutBody