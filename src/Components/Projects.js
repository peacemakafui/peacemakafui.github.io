import React from "react";

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <p>
        With an interest in web development, I have developed some applications
        to work on my web development skills
      </p>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <a href="https://limitless-retreat-38637.herokuapp.com/">
              <img src="../taskBoardApp.png" />
              <br></br>
            </a>
            Task Board Application
          </div>
          <div className="col-sm">
            <a href="https://gallant-wescoff-c95f93.netlify.app/">
              <img src="../chatApp.png" />
              <br></br>
            </a>
            Chat Application
          </div>

          <div className="col-sm">
            <a href="https://elastic-elion-1a350e.netlify.app/">
              <img src="../budgetApp.png" />
              <br></br>
            </a>
            Budget Application
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
