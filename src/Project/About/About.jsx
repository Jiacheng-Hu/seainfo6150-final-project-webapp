import React from "react";
import banner from "../images/banner3.jpg";
const About = () => {
    return (
        <section className="container">
            <img src={banner} alt="hero" className=" img-responsive"/>
            <div className="about-content text-left">
                <h1 className="about-title">Experience is at the core of all we do</h1>
                <p className="about-text">
                    At Northeastern, experience is our essence and ethos. It’s what you gain when you make the world your classroom, your laboratory, and your platform to create change or grow your enterprise. Throughout our university network, experience draws you into society and compels you to solve its complex challenges. It makes you agile and able to reinvent yourself. To find ways of doing things differently, and better. And to seize opportunities as they unfold—anytime, anywhere.
                </p>
            </div>
        </section>
    )
}

export default About;