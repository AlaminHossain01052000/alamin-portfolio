import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../../Home/Navigation';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {

    const projects = [

        {
            id: 1,
            name: "Sedan Mela",
            image1: "https://i.ibb.co/4FsJfYY/Screenshot-2021-11-29-202807.png",
            image2: "https://i.ibb.co/0MPK2Dv/sedan4.png",
            image3: "https://i.ibb.co/zNMy31Q/sedan2.png",
            image4: "https://i.ibb.co/b3qfWMS/sedan3.png",
            image5: "https://i.ibb.co/SBvpv5n/sedan5.png",
            technologies: "ReactJs, MongoDB, ExpressJs, Firebase, Material UI",
            type: "Full Stack",
            description: `It is a niche product website. It is a virtual store of a company named 'Sedan Mela'`,
            list1: `An Un-Registered User can see all the products(sedan cars) ,testimonial of Home page only`,
            list2: `Registered User can parchase a product by giving utile informations`,
            list3: `In the dashboard an admin can make another user admin, Manage all orders(approve and delete), Add a product, Manage All Products`,
            list4: `An user can see his orders, make payment of a purchase, add a review which shows in the home page testimonial section in the dashboard`,

            livesiteLink: "https://sedanmela.web.app/",
            githubLink1: "https://github.com/AlaminHossain01052000/sedan_mela",
            githubLink2: "https://github.com/AlaminHossain01052000/sedan_mela_server",

        },
        {
            id: 2,
            name: "Trip Tuck",
            image1: "https://i.ibb.co/xhBLdGq/Screenshot-2021-11-29-203555.png",
            image2: "https://i.ibb.co/8NFL1Zy/trip2.png",
            image3: "https://i.ibb.co/N3X7BTS/trip3.png",
            image4: "https://i.ibb.co/S5CqX2S/trip4.png",
            image5: "https://i.ibb.co/k20QXFZ/trip5.png",
            technologies: "ReactJs, MongoDB, ExpressJs, Firebase, React Bootstrap",
            type: "Full Stack",
            description: "It is a website of a trip organizer company. They provide many trip in Bangladesh and it is a website for them to make their client book or manage trips smoothly",
            list1: `An Un-Registered User can visit the homepage only.`,
            list2: `Registered User can book a trip`,
            list3: `In the my-booking button of navigation bar a visitor can see all his bookings only`,
            list4: `There are also two button in the navigation bar for manage all bookings and add an offer`,
            livesiteLink: "https://trip-tuck.web.app/",
            githubLink1: "https://github.com/AlaminHossain01052000/trip_tuck_client",
            githubLink2: "https://github.com/AlaminHossain01052000/trip-tuck-server"

        },
        {
            id: 3,
            name: "Al Health Care",
            image1: "https://i.ibb.co/Yd5LjD3/Screenshot-2021-11-29-203030.png",
            image2: "https://i.ibb.co/tD67Y6b/health2.png",
            image3: "https://i.ibb.co/pRMFgJs/health3.png",
            image4: "https://i.ibb.co/n8X8VVD/health4.png",
            image5: "https://i.ibb.co/fptGV55/health5.png",
            technologies: "ReactJs, Firebase, React Bootstrap",
            type: "Frontend",
            description: "In this website the services of a health care is represented. What type of services they provide, what type of specialists and their introduction is also shown",
            list1: `It is a frontend dynamic website`,
            list2: `Our Services and Our Specialists is a protected route`,
            list3: `A user can register using email-password or his google account`,
            list4: `In the our specialists section all the specialists name, img and their field is represented`,

            livesiteLink: "https://al-health-care.web.app/",
            githubLink1: "https://github.com/AlaminHossain01052000/al-health-care-client",
            githubLink2: "null"

        }


    ]
    return (
        <div>
            <Navigation />
            <Container>

                {
                    projects.map(project => <ProjectCard project={project}></ProjectCard>)
                }

            </Container>
        </div>
    );
};

export default Projects;