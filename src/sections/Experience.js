import React from "react";
import "../styles/css/experience.css";
import Skill from "../components/experience/Skill";
import Timeline from "../components/experience/Timeline";

const works1 = [
  {
    title: "Computer Engineering Intern",
    place: "Electronics Development Institute (ELDI)",
  },
  {
    title: "Software Engineering Intern",
    place: "IX note service Ltd",
  },
];

const works2 = [
  {
    title: "IT Support",
    place: "Industrial Training Fund, Headquarters",
  },
];

const works3 = [
  {
    title: "Fullstack Software Developer & IT Support",
    place: "Industrial Training Fund, Headquarters",
  },
];

const works4 = [
  {
    title: "Fullstack Developer",
    place: "IX note service Ltd",
  },
];
const Experience = () => {
  return (
    <div className="experience" id="exp">
      <h2 className="experience__header">
        <span>Experience</span> & Skills
      </h2>
      <div className="experience_content">
        <div className="experience_skills">
          <div className="experience__skills__grading">
            <Skill
              text="97%"
              color="#e6fceb"
              logo="https://drive.google.com/uc?export=view&id=1MEPb8xr8bNJYKT8Mv6Y0_ziU38d-5bAS"
              tooltip="Nodejs & Express"
            />
            <Skill
              text="93%"
              color="#e6f9fc"
              logo="https://drive.google.com/uc?export=view&id=1KR-xlav6bhQxZzj0hxmxGHKy9GYfZHPa"
              tooltip="React"
            />
            <Skill
              text="98%"
              color="#e6fceb"
              logo="https://drive.google.com/uc?export=view&id=1Y1ZE6ty6Su6coWty1jkVBdYF8ekeQK9w"
              tooltip="MongoDB"
            />
            <Skill
              text="70%"
              color="#e1f9fc"
              logo="https://drive.google.com/uc?export=view&id=1PvlDf0-EchKgZ0kDmEYgB4qXHoKcenr_"
              tooltip="Golang"
            />
            {/* <Skill text="60%" color="#dcecfa" logo={flutter} /> */}
            <Skill
              text="80%"
              color="#d4ecfa"
              logo="https://drive.google.com/uc?export=view&id=1ivb5qM5g1_jb_cxbPZ9JeE4LUMC7OEcx"
              tooltip="Docker"
            />
            <Skill
              text="90%"
              color="#cce8ff"
              logo="https://drive.google.com/uc?export=view&id=1rmY_Omx3cKQfk2p-9b2oAybyPTwv7v4P"
              tooltip="Postgres"
            />
            <Skill
              text="70%"
              color="#cadafc"
              logo="https://drive.google.com/uc?export=view&id=1DvB7-jflxL-0_YQh2LKnhV2vMpRzVVpz"
              tooltip="Kubernetes"
            />
            <Skill
              text="80%"
              color="#dbdad9"
              logo="https://drive.google.com/uc?export=view&id=14PaLtP8x-dEeKuWk4y_v5vRmOpueah3C"
              tooltip="Linux"
            />
            <Skill
              text="94%"
              color="#e8dcfc"
              logo="https://drive.google.com/uc?export=view&id=1THPJqA1Tei9dBgv5a5twIgsHPfYq8Hmh"
              tooltip="Redux"
            />
            <Skill
              text="98%"
              color="#faefe1"
              logo="https://drive.google.com/uc?export=view&id=1ZIBT1CxH0ng76OzqHrX0sYxipuLaRfaZ"
              tooltip="MySQL"
            />
            <Skill
              text="85%"
              color="#faf6d4"
              logo="https://drive.google.com/uc?export=view&id=1OPwY-VzzPToCZDlq5v8K-idubzUWU4WC"
              tooltip="Python"
            />
            <Skill
              text="70%"
              color="#fce6f5"
              logo="https://drive.google.com/uc?export=view&id=1zQCDZg5ML7KTc51Yraf3sXhJW_-AE4w4"
              tooltip="GraphQL"
            />
            <Skill
              text="70%"
              color="#fae2de"
              logo="https://drive.google.com/uc?export=view&id=1feQ6CvQx42tM3BQ3D0lHEZzvGPdD7GWC"
              tooltip="Java"
            />
            <Skill
              text="75%"
              color="#fad7df"
              logo="https://drive.google.com/uc?export=view&id=1bMr3qXL7PLyYcuvOkE1nMcfoIiKH6Pc8"
              tooltip="Nest.js"
            />
            <Skill
              text="60%"
              color="#faebd4"
              logo="https://drive.google.com/uc?export=view&id=1utGzIEbPOI_mJz9IAZoDm2wEDBBNvwn6"
              tooltip="Amazon Web Services"
            />
          </div>
        </div>
        <div className="experience_timeline">
          <Timeline date="2023" works={works4} />
          <Timeline date="2022" works={works3} />
          <Timeline date="2021" works={works2} />
          <Timeline date="2020" works={works1} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
