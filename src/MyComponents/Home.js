import React from "react";
import { Link } from "react-router-dom";
let styles = {
  color: "white",
};
let imgstyle = {
  width: "500",
  height: "500",
};
let icostyle = {
  width: 30,
  height: 30,
};
export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  header1">
        <p className="navbar-brand">
          <img
            src="Icon/i.ico"
            className="d-inline-block align-top"
            style={icostyle}
            alt=""
          />
          Umer Yasir
        </p>
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon  "></span>
        </button>
        <div className="collapse navbar-collapse line" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link text-primary" to="/">
                Home<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/MyResume">
                My Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="Contact.html">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row featurette  d-flex  justify-content-center align-items-center  mx-auto">
          <div className="col-md-7 ">
            <h2 className="featurette-heading text-light">
              <p>
                Hello, I'm Umer Yasir
                <br />
              </p>
              <span className="text-warning">A Software Engineer</span>
            </h2>
            <p className="lead text-light ">
              I am a Student of BS Software Engineering currently working on my
              Skills and Programming languages.Insha'Allah in future I will move
              toward the Data Science.
            </p>
            <div className="ref ">
              <button type="button" className="btn btn-outline-warning">
                <a href="https://github.com/UmerYasir718">
                  <i className="fa-brands fa-github" style={styles}></i>
                </a>
              </button>
              &nbsp;
              <button type="button" className="btn btn-outline-warning">
                <a href="http://www.linkedin.com/in/umer-yasir718">
                  <i className="fa-brands fa-linkedin-in" style={styles}></i>
                </a>
              </button>
              &nbsp;
              <button type="button" className="btn btn-outline-warning mb-10">
                <a href="mailto:umer_yasir_718">
                  <i className="fa-solid fa-g" style={styles}></i>
                </a>
              </button>
              &nbsp;
              <button type="button" className="btn btn-outline-warning">
                <a href="https://www.facebook.com/umer.yasir.927?mibextid=ZbWKwL">
                  <i className="fa-brands fa-facebook" style={styles}></i>
                </a>
              </button>
              <br />
              <br />
              <button type="button" className="btn btn-warning ">
                <a
                  className="text-light"
                  href="CV/Umer_Yasir_CV.pdf"
                  download="Umer_Yasir_CV.pdf"
                >
                  <i className="fa-solid fa-download"></i> Download Resume
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-5 my-3  Picture">
            <img
              className="bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded"
              src="Pics/best.png"
              alt=""
              style={imgstyle}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <footer className="mastfoot mt-auto d-flex justify-content-center align-items-center  mx-auto bg-dark">
        <div className="inner text-light">
          <p>&copy; 2020 All Rights Reserved to Developers</p>
        </div>
      </footer>
    </div>
  );
}
