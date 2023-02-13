import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './HomeProjectCard.css';
const HomeProjectCard = ({ project }) => {
    const navigate = useNavigate();
    const seeProjectDetails = () => {
        console.log(project.id);
        navigate(`/projectDetails/${project.id}`)
    }

    return (
        <Col>
            <Card style={{ width: '18rem' }} className="p-2 project-card mb-3">
                <Card.Img variant="top" style={{borderRadius:'30px',height:'120px'}} src={project.image1} className='mb-3'/>
                <Card.Body style={{ background: '#18122B' }}>
                    <Card.Title className="fs-5" style={{color:'white'}}>{project.name}</Card.Title>
                    <Card.Text className="text-start fs-6 my-3" style={{color:'white',height:'120px'}}>
                        {project.description}
                    </Card.Text>
                    <div className="d-flex mb-3" style={{marginLeft:'35%'}}>
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


                    </div>
                    <Button className="btn-details" onClick={seeProjectDetails}>Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default HomeProjectCard;