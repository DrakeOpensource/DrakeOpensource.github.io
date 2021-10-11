import React from 'react';
import Badges from '../components/badges';

import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';

const Skills = () => {

    // renders projects from list tp badges
    const renderBadge = (badge, index) => {
            return(
                <div className='image-box'>
                    <Image
                        key={index}
                        width='50px'
                        src={`${process.env.PUBLIC_URL}${badge.img}`}
                    >
                    </Image>
                    <div className='reveal-text'>
                        {badge.title}
                    </div>
                </div>
            );
    };

    const badgeTopics = ['Languages', 'Data', 'Web', 'Programs', 'OS']

    const buildSection = (topic) => {

        var filtered = Badges.filter(function(tempObj) {
            return tempObj.topic === topic.toLowerCase();
        });

        return(
            <Row>
                <h4>{topic}</h4>
                <Col>
                    <div className='badges'>
                        {filtered.map(renderBadge)}
                    </div>
                </Col>
            </Row>
        );
    };

    const mapSections = () => {
        return(
            <>
                {badgeTopics.map(buildSection)}
            </>
        );
    };

    return(
        <div className='skills' id='skills'>
            <Container>
                <Row>
                    <Col lg={12} className='skill-info'>
                        <Row>
                            <div className='skill-text'>
                                <h2>Skillset</h2>
                                <p>Below is a sampling of the languages, frameworks, and programs I am most experienced with.</p>
                            </div>
                        </Row>
                        <Row>
                        <div className='badges'>
                            {mapSections()}
                        </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;