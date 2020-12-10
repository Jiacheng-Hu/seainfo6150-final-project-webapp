import React from "react";
import bb3 from "../images/bb3.jpg";
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";
import b4 from "../images/b4.jpg";
import a1 from "../images/03-01.jpg";
import a2 from "../images/03-02.jpg";
import a3 from "../images/03-03.jpg";
import a4 from "../images/03-04.jpg";
import a5 from "../images/03-05.jpg";
import a6 from "../images/03-06.jpg";

const HomePage = () => {

    return (
        <div className="homepage ">
            <section className="home-about">
                <div className="home-about-title text-center">
                    <h1 className="home-about-h1">ABOUT</h1>
                    <div className="home-about-line center-block"></div>
                    <div className="home-about-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                </div>
                <div className="container-fluid m-t-20">
                    <div className="row">  
                        <div className="col-sm-1 col-md-3 m-p-0 word-text">
                            <div className="word-text">
                                <h2 className="m-p-0 ">A WORD ABOUT US</h2>
                            </div>
                            <div className="cover-panel">
                                 <div>Praesent dignissim viverra est, sed bibendum ligula congue non. Sed ac nisl et felis gravida commodo? Suspendisse eget ullamcorper ipsum. Suspendisse diam amet.</div>
                            </div>
                        </div>                
                        <div className="col-sm-5 col-md-7 ">
                            <div className="thumbnail about-panel">
                                <div className="about-image">
                                    <img className="about-image" src={bb3} alt="bb3"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1 col-md-2">
                            <div className="num-panel text-center">
                                <h2 className="m-p-0 font-bold">70000</h2>
                                <div className="home-about-line center-block"></div>
                                <h4>Students</h4>
                            </div>
                            <div className="num-panel text-center">
                                <h2 className="m-p-0 font-bold">600</h2>
                                <div className="home-about-line center-block"></div>
                                <h4>Faculties</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-graphic container-fluid m-t-35">
               <div className="row p-m-0">
                    <div className="col-ms-6 col-md-3 p-m-0">
                        <img src={b1} alt="b1" className="row-img"/>
                    </div>     
                    <div className="col-md-3 p-m-0">
                        <div className="row-text">
                            <h3>Library</h3>
                            <h5 className="row-text-h5">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
                            <div className="row-text-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                        </div>
                    </div>     
                    <div className="col-ms-6 col-md-3 p-m-0">
                        <img src={b2} alt="b2" className="row-img"/>
                    </div>     
                    <div className="col-md-3 p-m-0">
                        <div className="row-text">
                            <h3>Computer Lab</h3>
                            <h5 className="row-text-h5">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
                            <div className="row-text-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                        </div>
                    </div>     
               </div>
               <div className="row p-m-0">
                    <div className="col-md-3 p-m-0 ">
                        <div className="row-text">
                            <h3>Conference Hall</h3>
                            <h5 className="row-text-h5">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
                            <div className="row-text-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                        </div>
                    </div>     
                    <div className="col-ms-6 col-md-3 p-m-0">
                        <img src={b3} alt="b3" className="row-img"/>
                    </div>     
                    <div className="col-md-3 p-m-0">
                        <div className="row-text">
                            <h3>Playground</h3>
                            <h5 className="row-text-h5">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
                            <div className="row-text-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                        </div>
                    </div>     
                    <div className="col-ms-6 col-md-3 p-m-0">
                        <img src={b4} alt="b4" className="row-img"/>

                    </div>     
               </div>

            </section>
            <section className="container m-t-35">
                <div className=" home-about home-about-title text-center">
                    <h1 className="home-about-h1">GALLERY</h1>
                    <div className="home-about-line center-block"></div>
                    <div className="home-about-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                </div>
                <div className="row home-gallery">                  
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail home-panel">
                            <div className="home-image">
                                <img className="home-image" src={a1} alt="03-01"/>
                            </div>
                            <div className="gallery-text">
                                SCIENCE LAB
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail home-panel">
                            <div className="home-image">
                                <img className="home-image" src={a2} alt="03-02"/>
                            </div>
                            <div className="gallery-text">
                                INDOOR STADIUM
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail home-panel">
                            <div className="home-image">
                                <img className="home-image" src={a3} alt="03-03"/>
                            </div>
                            <div className="gallery-text">
                                TRANSPORTATION
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail home-panel">
                            <div className="home-image">
                                <img className="home-image" src={a4} alt="03-04"/>
                            </div>
                            <div className="gallery-text">
                                KIDS ROOM
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail home-panel">
                            <div className="home-image">
                                <img className="home-image" src={a5} alt="03-05"/>
                            </div>
                            <div className="gallery-text">
                                MEDITATION CLASSES
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail home-panel">
                            <div className="home-image">
                                <img className="home-image" src={a6} alt="03-06"/>
                            </div>
                            <div className="gallery-text">
                                KIDS PLAYGROUND
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;