import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {
  return (
    <>
      <h2 className="pageTitle">
        projects
      </h2>
      <Container>
        <Row>
          <Col className="col-vid">
          <iframe src="https://www.youtube.com/embed/1AXU74BcN4k" title="6.835 demo" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
          </Col>
          <Col className="col-description">
            <div>
              <h5>intelligent multimodal user interfaces</h5>
              <p>
                6.835 is a class i took junior spring (2018).
                in my final project, i set out to improve the online reading experience by introducing new modalities to it:
                <b> voice commands, hand gestures, and emotion tracking</b>
              </p>
            </div>
          </Col>
        </Row>

        <div className="divider" />

        <Row>
          <Col className="col-vid">
          <iframe src="https://www.youtube.com/embed/D_lgJQHPwGM" title="6.810 demo" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Col>
          <Col className="col-description">
            <div>
              <h5>engineering interactive technologies</h5>
              <p>
                6.810 is a class i took senior fall (2018).
                in our final project, my partner and i set out to improve cornhole by making the game adaptive using
                <b> sensors, motors, and computer vision</b>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
