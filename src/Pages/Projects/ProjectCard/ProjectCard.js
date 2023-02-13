import React from 'react';
import './ProjectCard.css';
const ProjectCard = ({ project }) => {
    return (
        <div className="my-5">
            <h1 className="m-auto" style={{ color: "#ff6b6b" }}>{project.id}.{project.name}</h1>
            <hr className="w-25 mx-auto my-5 shadow" style={{ border: "1px solid #341f97" }} />
            <div className="d-lg-flex justify-content-between align-items-center">
                <div>
                    <img class="webiste-image" src={project.image1} alt="" width="200px" height="300px" />
                </div>
                <div>
                    <img class="webiste-image" src={project.image2} alt="" width="200px" height="400px" />
                </div>
                <div>
                    <img class="webiste-image" src={project.image3} alt="" width="200px" height="400px" />
                </div>
                <div>
                    <img class="webiste-image" src={project.image4} alt="" width="200px" height="400px" />
                </div>
                <div>
                    <img class="webiste-image" src={project.image5} alt="" width="200px" height="400px" />
                </div>

            </div>

            <div className="mt-5">
                <h4 className="text-start">{project.description}</h4>
                <li className="website-details-list">{project.list1}</li>
                <li className="website-details-list">{project.list2}</li>
                <li className="website-details-list">{project.list3}</li>
                <li className="website-details-list">{project.list4}</li>
            </div>
            <h3 className="mt-3">Technologies</h3><span className="website-details-list mt-4">{project.technologies}</span>
            <div className="d-flex align-items-center">
                <div className="icon-container">
                    <a rel={'noreferrer'} className="fas fa-globe me-3 icon"
                        target="_blank" href={project.livesiteLink} >

                    </a>

                </div>
                <div className="icon-container">
                    <a rel={'noreferrer'} className="fab fa-github me-3 icon"
                        target="_blank" href={project.githubLink1} >

                    </a>

                </div>
                <div className="icon-container">
                    <a rel={'noreferrer'} className="fab fa-github me-3 icon"
                        target="_blank" href={project.githubLink2} >*

                    </a>

                </div>
            </div>
        </div>
    );
};

export default ProjectCard;