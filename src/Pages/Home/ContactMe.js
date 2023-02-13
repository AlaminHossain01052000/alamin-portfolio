import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './ContactMe.css';
import ScrollAnimation from 'react-animate-on-scroll';
import codeforceslogo from '../../Images/codeforces-sponsored-by-ton.png';
import codecheflogo from '../../Images/cc-logo.svg';
const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const info = { name: name, email: email, body: body };

    const sendEmail = (e) => {
        console.log(e.target);
        e.preventDefault();

        emailjs.send('service_uh2zv5a', 'template_b2rktgb', info, 'user_w3QS5wDF5ah9qOFntDTzw')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <ScrollAnimation animateIn='fadeIn'>
            <div className="contact-me pt-4 pb-3" id="contactme">
                <h1 className="m-auto" style={{ color: "#fff" }}>Contact Me</h1>
                <hr className="w-25 mb-5 mx-auto glow-line" style={{ border: "1px solid #341f97" }} />
                <Container style={{ backgroundColor: "#443C68" }} className="p-4">
                    <div className="d-lg-flex justify-content-around">

                        <form className="w-75 mx-3" onSubmit={sendEmail}>
                            <div class="mb-3">

                                <input type="text" name="user_name" onBlur={(e) => setName(e.target.value)} className="form-control w-lg-75 w-sm-100" placeholder="Your Name" style={{ background: '#181823', color: 'whitesmoke' }} />
                            </div>
                            <div class="mb-3">

                                <input type="email" name="user_email" onBlur={(e) => setEmail(e.target.value)} className="form-control w-lg-75 w-sm-100"
                                    style={{ background: '#181823', color: 'whitesmoke' }}
                                    placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">

                                <textarea name="body" onBlur={(e) => setBody(e.target.value)} className="form-control w-lg-75 w-sm-100" rows="3" placeholder="Any Questions,Enquries,Feedbacks..."
                                    style={{ background: '#181823', color: 'whitesmoke' }}
                                ></textarea>
                            </div>
                            <div class="mb-3">

                                <input className="btn-contact mt-5" type="submit" value="submit" />
                            </div>
                        </form>
                        <div className="w-75">
                            <div className="d-flex align-items-center">
                                <a rel={'noreferrer'} className="fab fa-linkedin contact-icon"
                                    style={{ color: "#0287C1" }}
                                    target="_blank"
                                    href={"https://www.linkedin.com/in/alamin2000"} >

                                </a>
                                <h6 style={{ color: "white", marginTop: '8px' }}>LinkedIn</h6>
                            </div>
                            <div className="d-flex align-items-center">
                                <a rel={'noreferrer'} className="fab fa-github contact-icon"
                                    style={{ color: "black" }}
                                    target="_blank"
                                    href={"https://github.com/AlaminHossain01052000"} >
                                </a>
                                <h6 style={{ color: "white", marginTop: '8px' }}>Github</h6>
                            </div>
                            <div className="d-flex align-items-center">
                                <a rel={'noreferrer'} className="fab fa-facebook contact-icon"
                                    style={{ color: "#3F62A9" }}
                                    target="_blank" href={"https://www.facebook.com/people/Alamin-Hossain/100008600078834/"} >

                                </a>
                                <h6 style={{ color: "white", marginTop: '8px' }}>Facebook</h6>
                            </div>

                            <div className="d-lg-flex align-items-center">
                                <i className="fas fa-envelope contact-icon"
                                    style={{ color: "#DE4032" }}
                                >

                                </i>
                                <h6 style={{ color: "white", marginTop: '8px' }}>Email</h6>

                            </div>
                            <div className="d-lg-flex align-items-center">
                                <a rel={'noreferrer'}

                                    target="_blank" href={"https://codeforces.com/profile/Alamin2000"} >
                                    <img className="contact-icon-img" alt="codeforces-logo" src={codeforceslogo}
                                    />
                                </a>



                                <h6 style={{ color: "white", marginTop: '8px' }}>Codeforces</h6>

                            </div>
                            <div className="d-lg-flex align-items-center">
                                <a rel={'noreferrer'}

                                    target="_blank" href={"https://www.codechef.com/users/alamin_2000"} >
                                    <img className="contact-icon-img" alt="codechef-logo" src={codecheflogo}
                                    />
                                </a>



                                <h6 style={{ color: "white", marginTop: '8px' }}>Codechef</h6>

                            </div>




                        </div>
                    </div>
                </Container >
            </div >
        </ScrollAnimation>

    );
};

export default ContactMe;