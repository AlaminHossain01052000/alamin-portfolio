import React from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Footer from './Footer';
import HomeBanner from './HomeBanner';
import HomeProjects from './HomeProjects';
import Navigation from './Navigation';
const Home = () => {

    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <HomeProjects></HomeProjects>
            <AboutMe />
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;