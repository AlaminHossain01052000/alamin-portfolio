import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './AboutMe.css';
const AboutMe = () => {
    return (
        <ScrollAnimation animateIn='fadeIn'>
            <div className="about-me pt-5 pb-3">
                <h1 className="m-auto" style={{ color: "#fff" }}>About Me</h1>
                <hr className="w-25 mb-5 mx-auto glow-line" style={{ border: "1px solid #341f97" }} />
                <div className="container">
                    <p className="about-me-paragraph text-start text-white">Hello,
                    "Allow me to introduce myself, I am Alamin, a soul imbued with a passion for mathematics and a love for the digital world. During my formative years, I found solace in the complexities of mathematical equations, and my fascination with the boundless potential of technology only grew stronger.
<br />
And so, I made the decision to embark on a journey as a Computer Science and Engineering student, where I discovered my true calling as a coder. Every day is an adventure, where I delve into the depths of problem-solving, striving to turn intricate algorithms into seamless solutions.
<br />
But, as much as I relish in the thrill of conquering a challenge, I am equally enamored with the creative process of crafting something new, of venturing into uncharted territories. At times, I find myself playing the role of both problem solver and creator, where I am both fixing a bug and generating one.
<br />
In a world where technology is the driving force, I am proud to be a part of this ever-evolving industry and to continue to cultivate my passion for coding. I invite you to join me on this journey, as I navigate the boundless opportunities that lie ahead."
<br />
                    </p>
                </div>
            </div >
        </ScrollAnimation>
    );
};

export default AboutMe;