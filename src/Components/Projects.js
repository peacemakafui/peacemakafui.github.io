import React from "react";

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <p>
        My personal web projects, I worked on during my web development learning phase.
        These projects helped me build skills in React, NodeJS, JavaScript, MongoDB, Netlify, Heroku.
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
      <br></br>
      <p>
        Projects I worked on as a Backend Engineer as part of a team of three at ToldoIT company limited. An awesome SaaS company.
        I developed skills in Laravel, Angular, server configuration and Technical Support while working in this role
      </p>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <a href="https://nubiametrics.com">
              <img src="../nubiametrics.png" />
              <br></br>
            </a>
            NubiaMetrics Application
          </div>
          <div className="col-sm">
            <a href="https://sronuschoolmanager.com/">
              <img src="../sronu.png" />
              <br></br>
            </a>
            Sronu School Management System Application
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
