import React from "react";
import Pxn from "../../styles/images/pxn.png";
import Aljys from "../../styles/images/aljys.png";
import UsePays from "../../styles/images/usePays.png";
import Spikk from "../../styles/images/spikk.png";
import Nesco from "../../styles/images/Nesco.png";
import "../../styles/css/project.css";

const Card = () => {
  return (
    <>
      <div className="project__background"></div>
      <div className="background-texture"></div>

      <section className="carousel">
        <div className="carousel__container">
          <a href="https://pxnewallet.com/" target="_blank" rel="noreferrer">
            <div className="carousel-item">
              <img className="carousel-item__img" src={Pxn} alt="people" />
              <div className="carousel-item__details">
                <div className="controls">
                  <span className="fas fa-play-circle"></span>
                  <span className="fas fa-plus-circle"></span>
                </div>
                <h5 className="carousel-item__details--title">PXN</h5>
                <h6 className="carousel-item__details--subtitle">
                  A platform that users e-commerce, logistics and utilities to
                  simplify the <wbr></wbr> online marketplace
                </h6>
              </div>
            </div>
          </a>

          <a href="https://www.usepays.co/" target="_blank" rel="noreferrer">
            <div className="carousel-item">
              <img className="carousel-item__img" src={UsePays} alt="people" />
              <div className="carousel-item__details">
                <div className="controls">
                  <span className="fas fa-play-circle"></span>
                  <span className="fas fa-plus-circle"></span>
                </div>
                <h5 className="carousel-item__details--title">Use Pays</h5>
                <h6 className="carousel-item__details--subtitle">
                  A gifting platform that allows you plan for your next big
                  event <wbr></wbr> while allowing you to manage and redeem
                  vouchers
                </h6>
              </div>
            </div>
          </a>

          <a href="https://spikk.co/" target="_blank" rel="noreferrer">
            <div className="carousel-item">
              <img className="carousel-item__img" src={Spikk} alt="people" />
              <div className="carousel-item__details">
                <div className="controls">
                  <span className="fas fa-play-circle"></span>
                  <span className="fas fa-plus-circle"></span>
                </div>
                <h5 className="carousel-item__details--title">Spikk</h5>
                <h6 className="carousel-item__details--subtitle">
                  A delivery app that lets you deliver your items <wbr></wbr> on
                  time and in excellent shape.
                </h6>
              </div>
            </div>
          </a>

          <a href="https://play.google.com/store/apps/details?id=com.nesco.nesco_mobile&hl=en_US" target="_blank" rel="noreferrer">
            <div className="carousel-item">
              <img className="carousel-item__img" src={Nesco} alt="people" />
              <div className="carousel-item__details">
                <div className="controls">
                  <span className="fas fa-play-circle"></span>
                  <span className="fas fa-plus-circle"></span>
                </div>
                <h5 className="carousel-item__details--title">Nesco</h5>
                <h6 className="carousel-item__details--subtitle">
                Discover a cutting-edge application designed exclusively for Nesco <wbr></wbr> organization's clients to effortlessly handle their electricity consumption.
                </h6>
              </div>
            </div>
          </a>

          <div className="carousel-item">
            <img className="carousel-item__img" src={Aljys} alt="exam" />
            <div className="carousel-item__details">
              <div className="controls">
                <span className="fas fa-play-circle"></span>
                <span className="fas fa-plus-circle"></span>
              </div>
              <h5 className="carousel-item__details--title">PXN</h5>
              <h6 className="carousel-item__details--subtitle">
                A platform that users e-commerce, logistics and utilities to
                simplify the <wbr></wbr> online marketplace
              </h6>
            </div>
          </div>
          <a
            href="http://ukehmeets.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="carousel-item">
              <img
                className="carousel-item__img"
                src="https://images.pexels.com/photos/4065617/pexels-photo-4065617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="people"
              />
              <div className="carousel-item__details">
                <div className="controls">
                  <span className="fas fa-play-circle"></span>
                  <span className="fas fa-plus-circle"></span>
                </div>
                <h5 className="carousel-item__details--title">Ukeh Meets</h5>
                <h6 className="carousel-item__details--subtitle">
                  I built a web meeting application with the MERN stack to
                  efficiently <wbr></wbr>conduct meetings and keep track of
                  progress.
                </h6>
              </div>
            </div>
          </a>
          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
              alt="exam"
            />
            <div className="carousel-item__details">
              <div className="controls">
                <span className="fas fa-play-circle"></span>
                <span className="fas fa-plus-circle"></span>
              </div>
              <h5 className="carousel-item__details--title">
                Orion CBT platform
              </h5>
              <h6 className="carousel-item__details--subtitle">
                I developed a computer based testing application to help{" "}
                <wbr></wbr>lecturers and students handle management of exams and
                exam data
              </h6>
            </div>
          </div>


          {/*  <div className="carousel-item">
          <img
            className="carousel-item__img"
            src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="people"
          />
          <div className="carousel-item__details">
            <div className="controls">
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className="carousel-item__details--title">Descriptive Title</h5>
            <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="carousel-item__img"
            src="https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          <div className="carousel-item__details">
            <div className="controls">
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className="carousel-item__details--title">Descriptive Title</h5>
            <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>

        <div className="carousel-item">
          <img
            className="carousel-item__img"
            src="https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="people"
          />
          <div className="carousel-item__details">
            <div className="controls">
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className="carousel-item__details--title">Descriptive Title</h5>
            <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div> */}
          <div className="carousel-item2"></div>
        </div>
      </section>
    </>
  );
};

export default Card;
