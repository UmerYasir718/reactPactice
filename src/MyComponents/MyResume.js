import React from 'react'
import { Link } from "react-router-dom";

let icostyle = {
    width: 30,
    height: 30,
  };
const MyResume = () => {
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
                            <Link className="nav-link text-light" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/MyResume">My Resume<span className="sr-only">(current)</span></Link>
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
{/* <!-- --------------Education / Skills--------------- --> */}
<div class="container text-light">
<div class="row">
<div class="col-8 col-12 col-sm-12 col-md-8 order-1 order-md-1 order-sm-1">
<h2 class="heading font-weight-bold">Education</h2><br/>
    {/* <!-- ------------ University of Management and Technology---------- --> */}
    <div class="row">
        <div class="col-4">
            <b class="heading font-weight-bold">2021-2025</b> <br/>
                <span class="text-light font-weight-light">University of Management and Technology</span>
                <img class="bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded"
                    width="150" height="150" src="Pics/umt.jpg" alt=""/>
                </div>
                <div class="col-8 text-light font-weight-light">
                    <span class="heading font-weight-bold ">BS Software Engineering</span><br/>
                        The BSc Software Engineering degree at the University of Management and Technology offers a
                        comprehensive curriculum and practical experiences, empowering students to become skilled
                        software engineers in the digital age.
                </div>
        </div><br/>
            {/* <!-- ------------Aspire Group of Colleges ---------- --> */}
            <div class="row">
                <div class="col-4 ">
                    <b class="heading font-weight-bold">2019-2021</b> <br/>
                        <span class="text-light font-weight-light">Aspire Group of Colleges</span>
                        <img class="bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded"
                            width="150" height="150" src="Pics/aspire.jpg" alt=""/>
                        </div>
                        <div class="col-8 text-light font-weight-light">
                            <span class="heading font-weight-bold"><b> FSc Pre- Engineering</b></span><br/>
                                Studying FSc Pre-Engineering at Aspire Group of Colleges lays a strong academic foundation for
                                students pursuing engineering disciplines, with experienced faculty and excellent resources to
                                foster their scientific and technical growth.
                        </div>
                </div><br/>
                    {/* <!-- -- ------------ Deen Public High School---------- --> */}
                    <div class="row">
                        <div class="col-4 ">
                            <b class="heading font-weight-bold">2007-2019</b> <br/>
                                <span class="text-light">Deen Public High School</span>
                                <img class="bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded"
                                    width="150" height="150" src="Pics/deen.jpg" alt=""/>
                                </div>
                                <div class="col-8 font-weight-light">
                                    <span class="heading font-weight-bold"><b>Secondary Education</b></span><br/>
                                        Studying at Deen Public High School during my secondary education was a transformative journey
                                        that nurtured my academic excellence and shaped my character with values-based education.
                                </div>
                        </div>
                    </div>
                    <div class="col-4 col-12 col-sm-12 col-md-4 order-2 order-md-2  order-sm-2">
                        <div class="Personal-Skill">
                            <h2 class="heading font-weight-bold">Personal Skills</h2><br/>
                                <h5 class="lab">Canva<p class="percentage">90%</p>
                                </h5>
                                <div class="S1">
                                    <div class="Ninty"></div>
                                </div>
                                <h5 class="lab">E-commerce<p class="percentage">85%</p>
                                </h5>
                                <div class="S1">
                                    <div class="EightyFive"></div>
                                </div>
                        </div><br/>
                            <div class="Skills text-light">
                                <h2 class="heading font-weight-bold">Coding Skills</h2>
                                <h5 class="lab">HTML <p class="percentage">95%</p>
                                </h5>
                                <div class="S1">
                                    <div class="NintyFive"></div>
                                </div>
                                <h5 class="lab">CSS <p class="percentage">80%</p>
                                </h5>
                                <div class="S1">
                                    <div class="Eighty"></div>
                                </div>
                                <h5 class="lab">JavaScript <p class="percentage">45%</p>
                                </h5>
                                <div class="S1">
                                    <div class="FourtyFive"></div>
                                </div>
                                <h5 class="lab">BootStrap <p class="percentage" >90%</p>
                                </h5>
                                <div class="S1">
                                    <div class="Ninty"></div>
                                </div>
                                <h5 class="lab">C++ <p class="percentage" >85%</p>
                                </h5>
                                <div class="S1">
                                    <div class="EightyFive"></div>
                                </div>
                            </div>
                    </div>
            </div>
    </div><br/>
        {/* <!-- --------------Cards--------------- --> */}
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="card mb-3" >
                        <div class="row g-0">
                            <div class="col-4">
                                <img src="Pics/aspire1.jpg" class="img-fluid" alt="..."/>
                            </div>
                            <div class="col-8">
                                <div class="card-body bg-dark">
                                    <h5 class="card-title text-light">FSc Pre- Engineering</h5>
                                    <p class="card-text text-warning">Aspire College Pattoki</p>
                                    <p class="card-text"><small class="text-light">19 January 2021</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div class="col-md-5">
                    <div class="card mb-3" >
                        <div class="row g-0">
                            <div class="col-4 ">
                                <img src="Pics/PIMS.jpg" class="img-fluid" alt="..."/>
                            </div>
                            <div class="col-8">
                                <div class="card-body bg-dark">
                                    <h5 class="card-title text-light">Amazon Virtual Assistant</h5>
                                    <p class="card-text text-warning">Pakistan Institute of Management</p>
                                    <p class="card-text"><small class="text-light">20 September 2022</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- <div class="col-md-4"></div> --> */}
            </div>
        </div>
        <footer class="mastfoot mt-auto d-flex justify-content-center align-items-center  mx-auto bg-dark">
            <div class="inner text-light">
                <p>© 2020 All Rights Reserved to Developers</p>
            </div>
        </footer>
    </div>
  )
}

export default MyResume
