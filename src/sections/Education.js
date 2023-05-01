import React from "react";
import Card from "../components/education/Card";
import "../styles/css/education.css";

const Education = () => {
  return (
    <div className="education" id="educate">
      <h1>
        <span>Education</span> & Certifications
      </h1>
      <div className="education__institutions">
        <Card
          logo="https://drive.google.com/uc?export=view&id=1-DO5QXtW7FE-I0EN8rHkncBPNNoxN1pm"
          title="National Youth Service Corp"
          type="National Service Certificate"
          color="#faf8d4"
          date="Nov 2022"
          size="50"
        />
        <Card
          logo="https://drive.google.com/uc?export=view&id=19v-bhXnxvQIam84SulJCQiNUvmbJ_ud5"
          color="#f2f2f2"
          title="Cloud Developer"
          type="Professional Certificate"
          date="Aug 2022"
          view="https://learn.udacity.com/view-certificate/nd9990-alg-t2"
        />
        <Card
          logo="https://drive.google.com/uc?export=view&id=1_kcDfl3Ihv_BQU0-SARMJNErd3ZDOFip"
          title="Google IT Support Specialization"
          type="Professional Certificate"
          date="Feb 2022"
          view="https://www.coursera.org/account/accomplishments/specialization/certificate/PMNL4HT63YUJ"
        />
        <Card
          logo="https://drive.google.com/uc?export=view&id=1ICY-LbUuWbW1q7BvDAVE_gWmpRfhqqWr"
          color="#f4ebfe"
          title="Computer Engineering"
          type="Bachelors of Engineering"
          date="Oct 2021"
        />
        <Card
          logo="https://drive.google.com/uc?export=view&id=1M_doLBbQWcI2b8kdz6hjKonuSSxL4FSy"
          color="#0a0a23"
          type="Professional Certificate"
          title="Responsive Web Design"
          date="Jul 2020"
          view="https://www.freecodecamp.org/certification/fccc2535c71-adc6-48e5-a72d-ffb430a7aa35/responsive-web-design"
        />
        <Card
          logo="https://drive.google.com/uc?export=view&id=1wDQsODzG9jfFZj4SRgo4-dR8bhQqO7ib"
          title="Cisco Certified Network Associate"
          type="Professional Certificate"
          date="Apr 2019 - Oct 2022"
          size="50"
        />
      </div>
    </div>
  );
};

export default Education;
