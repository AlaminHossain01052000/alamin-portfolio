import React from 'react';
import './ProjectCard.css';
const ProjectCard = ({ project }) => {
    return (
        <div className="mb-5">
            <h3 className="m-auto" style={{ color: "#E9F8F9" }}>{project.name}</h3>
            <hr className="w-25 mx-auto shadow" style={{ border: "1px solid #341f97" }} />
            <div className="d-lg-flex justify-content-between align-items-center">
                

            </div>

            <div className="my-3 mb-5">
                <h4 className="text-start mb-4" style={{color:'#C0EEF2'}}>{project.description}</h4>
                <li className="website-details-list">{project.list1}</li>
                <li className="website-details-list">{project.list2}</li>
                <li className="website-details-list">{project.list3}</li>
                <li className="website-details-list">{project.list4}</li>
            </div>
            <h3 className="mt-3" style={{color:"#332C39"}}>Technologies</h3><span className="website-details-list mt-4">{project.technologies}</span>
            <div className="d-flex mt-3" style={{marginLeft:'44%'}}>
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