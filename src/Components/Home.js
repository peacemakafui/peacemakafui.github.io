import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="header">
        <h1 className="display">
          Hi, <br></br>I'm Makafui <br></br>Software Engineer
        </h1>
      </div>
      <div className="position-absolute bottom-0 end-0">
        <h1>
          <a className="nav-link" href="https://github.com/peacemakafui">
            github
          </a>
        </h1>
      </div>

      <div className="position-absolute bottom-0 start-0">
        <h1>
          <a className="nav-link" href="mailto:makafuiatimpo@gmail.com">
            Email
          </a>
        </h1>
      </div>

      <div className="position-absolute upper-0 end-0">
        <h1>
          <a className="nav-link" href="https://www.linkedin.com/in/makafui-atimpo-9023b4141/">
            Linkedin
          </a>
        </h1>
      </div>
    </section>
  );
};

export default Home;
