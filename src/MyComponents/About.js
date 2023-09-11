import React from 'react'
import { Link } from "react-router-dom";
let styles = {
    color: "white",
};
let imgstyle = {
    width: "400",
    height: "200",
};
let icostyle = {
    width: 30,
    height: 30,
};
export default function About() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  header1">
                <p className="navbar-brand" to="/">
                    <img src="Icon/i.ico" style={icostyle} className="d-inline-block align-top" alt="" />
                    Umer Yasir
                </p>
                <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon icon"></span>
                </button>
                <div className="collapse navbar-collapse line" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link text-primary" to="/">About<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">My Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">Portfolio</Link>
                        </li >
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">Contact Me</Link>
                        </li >
                    </ul >
                </div >
            </nav >
            <div className="">
                {/* <!-- -----intro----- --> */}
                <div className="container mx-auto ">
                    <h1 className="text-warning">About Me</h1>
                    <div className="row featurette my-3">
                        <div className="col-md-6">
                            <h5 className="text-light">I am a Student of BSc Software Engineering.I am Expert in desgin Web Pages
                                with Outstanding Graphic, Color, and decent
                                interface. Work Experience with two international company and currently work as Freelance.
                                Ability to do work in less time
                                with more accuracy.</h5>
                        </div>
                        <div className="col-md-6">
                            <div className="text-warning font-weight-bold">Age<span className="text-light"> ➤ 19</span></div>&nbsp;
                            <div className="text-warning font-weight-bold">Residence<span className="text-light"> ➤ Pakistan</span></div>
                            &nbsp;
                            <div className="text-warning font-weight-bold">Address<span className="text-light"> ➤ Bhai Pheru, Phool Nagar,
                                Lahore,
                                Pakistan</span></div>&nbsp;
                            <div className="text-warning font-weight-bold">E-mail<span className="text-light"> ➤ umer718@gmail.com</span>
                            </div>&nbsp;
                            <div className="text-warning font-weight-bold">Phone<span className="text-light"> ➤ +92 3314911420</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- -------What I Do--- --> */}
                <div className="container mx-auto ">
                    <div className="h3 text-light">What<span className="text-warning"> I Do</span></div>
                    <div className="row featurette my-3">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 text-light">
                                    <div className="box bg-dark text-center"><br />
                                        <h2><i className="fa-sharp fa-solid fa-ribbon" style={styles}></i></h2>
                                        <p className="text-light font-weight-bold">Experience</p>
                                        <p className="text-light">1 Year working</p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-light">
                                    <div className="box bg-dark text-center "><br />
                                        <h2><i className="fa-solid fa-briefcase" style={styles}></i></h2>
                                        <p className="text-light font-weight-bold">Completed</p>
                                        <p className="text-light">10+ Projects</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 text-light">
                                    <div className="box bg-dark text-center"><br />
                                        <h2><i className="fa-solid fa-envelope" style={styles}></i></h2>
                                        <p className="text-light font-weight-bold">E-mail</p>
                                        <p className="text-light">umeryasir718@gmail.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-light">
                                    <div className="box bg-dark text-center"><br />
                                        <h2><i className="fa-solid fa-headset" style={styles}></i></h2>
                                        <p className="text-light font-weight-bold">Support</p>
                                        <p className="text-light">Online 24/7</p>
                                    </div>
                                </div>
                            </div><br />
                            <div className="col-md-12 conbtn">
                                <button type="button" className="btn btn-warning btn-lg ">
                                    <a className="text-light" href="Contact.html">Contact Me</a>
                                </button>
                            </div><br />
                        </div>
                        <div className="col-md-6 pic">
                            <img className="bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded"
                                style={imgstyle} src="Pics/Aboutpg.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <footer className="mastfoot mt-5 d-flex justify-content-center align-items-center  mx-auto bg-dark">
                <div className="inner text-light">
                    <p>© 2020 All Rights Reserved to Developers</p>
                </div>
            </footer>
        </div >
    )
}
