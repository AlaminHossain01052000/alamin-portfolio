import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import resume from '../../Files/alamin_resume_web_developer (1).pdf';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const Navigation = () => {
    const [showLinks, setShowLinks] = useState(false);
    const showMenuLinks = () => {
        if (showLinks) {
            document.getElementById('nav-link').style.display = "none";
            setShowLinks(false);
        }
        else {
            document.getElementById('nav-link').style.display = "block";
            setShowLinks(true);
        }

    }


    return (
        <Navbar style={{ backgroundColor: '#635985' }}>
            <Container>
                <div>
                    <button className="fas fa-bars btn nav-bar" onClick={showMenuLinks} style={{ color: 'white' }}></button>
                </div>
                <Nav id="nav-link" className="me-auto">

                    <Nav.Link as={Link} to="/home" className="nav-routes">Home</Nav.Link>
                    <Nav.Link as={Link} to="/projects" className="nav-routes">Projects</Nav.Link>
                    <Nav.Link as={HashLink} smooth to="/home#aboutme" className="nav-routes">About Me</Nav.Link>
                    <Nav.Link as={HashLink} smooth to="/home#contactme" className="nav-routes">Contact Me</Nav.Link>

                    <Nav.Link as={Link} to="/blogs" className="nav-routes">Blogs</Nav.Link>
                    <Nav.Link className="btn-shine" href={resume} download>Download Resume</Nav.Link>
                </Nav>
            </Container>
        </Navbar >
    );
};

export default Navigation;