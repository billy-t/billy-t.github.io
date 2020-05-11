import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import profilePic from '../images/profile_pic.png';

function About() {
  return (
    <div>
      <h3 className="pageTitle">
        about me
      </h3>
      <Container>
        <Row>
          <Col className="col-pic">
            <img src={profilePic} className="picture" alt="billy" />
          </Col>
          <Col className="col-bio">
            <div>
              <p>
                heyo! i'm billy. i graduated with a computer science degree from MIT in 2019.
                since then i've worked at airbnb doing frontend work on Maps and Guidebooks.
                currently seeking the next opportunity 👨🏽‍💻
              </p>
              <p>
                things i care about include but are not limited to: education, civil rights, poverty alleviation, music
              </p>
              <p>let's connect :)</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
