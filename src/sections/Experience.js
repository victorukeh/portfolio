import React from "react";
import "../styles/css/experience.css";
import Skill from "../components/experience/Skill";
import Timeline from "../components/experience/Timeline";
import NodeJS from "../styles/images/nodejs.png"
import ReactJs from "../styles/images/react.png"
import MongoDb from "../styles/images/mongo.png"
import Golang from "../styles/images/golang.png"
import Docker from "../styles/images/docker.png"
import Postgres from "../styles/images/postgres.png"
import Kubernetes from "../styles/images/kubernetes.png"
import Linux from "../styles/images/linux.png"
import Redux from "../styles/images/redux.svg"
import MySql from "../styles/images/mysql.png"
import Python from "../styles/images/python.png"
import GraphQL from "../styles/images/graphql.png"
import Java from "../styles/images/java.png"
import Nest from "../styles/images/nestjs.png"
import Aws from "../styles/images/aws.png"

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
              logo={NodeJS}
              tooltip="Nodejs & Express"
            />
            <Skill
              text="93%"
              color="#e6f9fc"
              logo={ReactJs}
              tooltip="React"
            />
            <Skill
              text="98%"
              color="#e6fceb"
              logo={MongoDb}
              tooltip="MongoDB"
            />
            <Skill
              text="70%"
              color="#e1f9fc"
              logo={Golang}
              tooltip="Golang"
            />
            {/* <Skill text="60%" color="#dcecfa" logo={flutter} /> */}
            <Skill
              text="80%"
              color="#d4ecfa"
              logo={Docker}
              tooltip="Docker"
            />
            <Skill
              text="90%"
              color="#cce8ff"
              logo={Postgres}
              tooltip="Postgres"
            />
            <Skill
              text="70%"
              color="#cadafc"
              logo={Kubernetes}
              tooltip="Kubernetes"
            />
            <Skill
              text="80%"
              color="#dbdad9"
              logo={Linux}
              tooltip="Linux"
            />
            <Skill
              text="94%"
              color="#e8dcfc"
              logo={Redux}
              tooltip="Redux"
            />
            <Skill
              text="98%"
              color="#faefe1"
              logo={MySql}
              tooltip="MySQL"
            />
            <Skill
              text="85%"
              color="#faf6d4"
              logo={Python}
              tooltip="Python"
            />
            <Skill
              text="70%"
              color="#fce6f5"
              logo={GraphQL}
              tooltip="GraphQL"
            />
            <Skill
              text="70%"
              color="#fae2de"
              logo={Java}
              tooltip="Java"
            />
            <Skill
              text="75%"
              color="#fad7df"
              logo={Nest}
              tooltip="Nest.js"
            />
            <Skill
              text="60%"
              color="#faebd4"
              logo={Aws}
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
