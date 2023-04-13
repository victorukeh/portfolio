import React from 'react'
import Card from "../components/education/Card"
import baptist from "../styles/images/baptist.png"
import cu from "../styles/images/cu_logo.png"
import ccna from "../styles/images/ccna.png"
import udacity from "../styles/images/udacity.png"
import freeCodeCamp from "../styles/images/freecodecamp.png"
import youthService from "../styles/images/nysc.png"
import Google from "../styles/images/google.png"
import "../styles/css/education.css"

const Education = () => {
    return (
        <div className='education' id="educate">
            <h1><span>Education</span> & Certifications</h1>
            <div className="education__institutions">
                <Card logo={youthService} title="National Youth Service Corp" type="National Service Certificate" color="#faf8d4" date="Nov 2022" size="50"/>
                <Card logo={udacity} color="#f2f2f2" title="Cloud Developer" type="Professional Certificate" date="Aug 2022" view="https://learn.udacity.com/view-certificate/nd9990-alg-t2"/>
                <Card logo={Google} title="Google IT Support Specialization" type="Professional Certificate" date="Feb 2022" view="https://www.coursera.org/account/accomplishments/specialization/certificate/PMNL4HT63YUJ"/>
                <Card logo={cu} color="#f4ebfe" title="Computer Engineering" type="Bachelors of Engineering" date="Oct 2021" />
                <Card logo={freeCodeCamp} color="#0a0a23" type="Professional Certificate" title="Responsive Web Design" date="Jul 2020" view="https://www.freecodecamp.org/certification/fccc2535c71-adc6-48e5-a72d-ffb430a7aa35/responsive-web-design"/>
                <Card logo={ccna} title="Cisco Certified Network Associate" type="Professional Certificate" date="Apr 2019 - Oct 2022" size="50"/>
            </div>
        </div>
    )
}

export default Education