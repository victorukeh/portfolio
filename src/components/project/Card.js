import React from "react";
import "../../styles/css/project.css";

const Card = () => {
  return (
    <>
    <div class="project__background"></div>
    <div class="background-texture"></div>

    <section class="carousel">
      <div class="carousel__container">
      <div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">Spotify Clone</h5>
            <h6 class="carousel-item__details--subtitle">It was made to due to my desire to create a music application while <wbr></wbr>consuming high level endpoints like the spotify web api.</h6>
          </div>
        </div>
        <a href="http://ukehmeets.onrender.com/" target="_blank" rel="noreferrer"><div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.pexels.com/photos/4065617/pexels-photo-4065617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">Ukeh Meets</h5>
            <h6 class="carousel-item__details--subtitle">I built a web meeting application with the MERN stack to efficiently <wbr></wbr>conduct meetings and keep track of progress.</h6>
          </div>
        </div></a> 
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">Portfolio Website</h5>
            <h6 class="carousel-item__details--subtitle">I developed a portfolio website application to help employers guage <wbr></wbr>what I can do while showing my creativity</h6>
          </div>
        </div>
        {/* <div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">Descriptive Title</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">Descriptive Title</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">Descriptive Title</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>

        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">Descriptive Title</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div> */}
        <div class="carousel-item2">
          
         
        </div>
      </div>
    </section>
    </>
  );
};

export default Card;
