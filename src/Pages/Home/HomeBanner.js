import React from 'react';
import profileImage from '../../Images/my-image-2.png';
import './HomeBanner.css';
import resume from '../../Files/alamin_resume_web_developer (1).pdf'
import Typewriter from "typewriter-effect";
const HomeBanner = () => {

    return (
        <div>
            <div className='lightDarkbg'>
                <div className='container d-flex justify-content-between'>
                <div>
                    <h1 className='homebanner-description pt-5'>"My name is Alamin, and I am a driven third-year student of Computer Science and Engineering at Ranada Prasad Shaha University. My passion for coding is evidenced by my active participation in renowned competitive programming sites such as Codeforces, Codechef, and Hackerrank, where I enjoy solving problems using diverse algorithms.
                    <br />
                    <br />

For the past two years, I have been honing my skills in web development and have a strong desire to continuously learn and stay updated with the latest technologies. I am a fast learner with an insatiable thirst for knowledge and am always eager to take on new challenges and explore new frontiers in the world of technology.
<br />
<br />
As a dedicated and passionate coder, I am confident in my ability to bring innovation and creativity to any project. I am eager to showcase my skills and experience to potential employers and am dedicated to making a positive impact in the field of computer science and engineering"</h1>
                </div>
                <div>
                
                    <img className="" src={profileImage} alt="profile-pic" />
                

                {/* <h1 className="text-white mt-4">
                    <Typewriter

                        onInit={(typewriter) => {

                            typewriter
                                .start()
                                .typeString("Welcome!!!")

                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("I'm a Web Developer")
                            // .pauseFor(1000)
                            // .deleteAll()

                        }}
                    />
                </h1> */}
                </div>
                </div>
                

                
            </div>
        </div>
    );
};

export default HomeBanner;