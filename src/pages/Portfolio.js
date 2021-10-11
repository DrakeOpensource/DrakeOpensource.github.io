import React from 'react';
import { Card, Button } from 'react-bootstrap';
// Assets
import projectList from '../components/projectList';


const Portfolio = () => {
  // renders projects from list to cards
  const renderCard = (card, index) => {
    return(
      <Card
        key={index}
        className='project-box'>
        <div className='overlay'>
          <div className='overlay-text'>
            {card.description}
          </div>
          <Button
            variant='light'
            href={card.link}
            target='_blank'>
            View More
          </Button>
          
        </div>
        <Card.Img
          fluid
          variant='top'
          src={`${process.env.PUBLIC_URL}${card.img}`} />

        <Card.Body>
          <Card.Title style={{color: '#69b3a2'}}>
            {card.title}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  };
  
  return(
    <div className='projects' id='portfolio'>
      <div className='projects-container'>
        <div className='projects-welcome'>
          <h1>Portfolio</h1>
          <p>A Few of the Projects I've Been Working on Lately</p>
        </div>
        <div className='grid project-container'>
          {projectList.map(renderCard)}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;