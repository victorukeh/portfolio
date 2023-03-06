import React from "react";
import "../styles/css/experience.css";
import node from "../styles/images/nodejs.png";
import react from "../styles/images/react.png";
import python from "../styles/images/python.png";
import mongo from "../styles/images/mongo.png";
import aws from "../styles/images/aws.png";
import docker from "../styles/images/docker.png";
import golang from "../styles/images/golang.png";
import java from "../styles/images/java.png";
import redux from "../styles/images/redux.svg";
import kubernetes from "../styles/images/kubernetes.png";
import postgres from "../styles/images/postgres.png";
import linux from "../styles/images/linux.png";
import mysql from "../styles/images/mysql.png";
import nestjs from "../styles/images/nestjs.png";
import graphql from "../styles/images/graphql.png";
import flutter from "../styles/images/flutter.png";
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
    title: "Junior Software Engineer",
    place: "IX note service Ltd",
  },
];
const Experience = () => {
  return (
    <div className="experience">
      <h2 className="experience__header">
        <span>Experience</span> & Skills
      </h2>
      <div className="experience_content">
        <div className="experience_skills">
          <div className="experience__skills__grading">
            <Skill text="97%" color="#e6fceb" logo={node} />
            <Skill text="93%" color="#e6f9fc" logo={react} />
            <Skill text="98%" color="#e6fceb" logo={mongo} />
            <Skill text="70%" color="#e1f9fc" logo={golang} />
            {/* <Skill text="60%" color="#dcecfa" logo={flutter} /> */}
            <Skill text="80%" color="#d4ecfa" logo={docker} />
            <Skill text="90%" color="#cce8ff" logo={postgres} />
            <Skill text="70%" color="#cadafc" logo={kubernetes} />
            <Skill text="80%" color="#dbdad9" logo={linux} />
            <Skill text="94%" color="#e8dcfc" logo={redux} />
            <Skill text="98%" color="#faefe1" logo={mysql} />
            <Skill text="85%" color="#faf6d4" logo={python} />
            <Skill text="70%" color="#fce6f5" logo={graphql} />
            <Skill text="70%" color="#fae2de" logo={java} />
            <Skill text="75%" color="#fad7df" logo={nestjs} />
            <Skill text="60%" color="#faebd4" logo={aws} />
          </div>
        </div>
        <div className="experience_timeline">
          <Timeline date="2023" works={works4}/>
          <Timeline date="2022" works={works3}/>
          <Timeline date="2021" works={works2}/>
          <Timeline date="2020" works={works1}/>
        </div>
      </div>
    </div>
  );
};

export default Experience;
