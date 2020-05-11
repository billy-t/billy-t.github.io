import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Other() {
  return (
    <>
      <h2 className="pageTitle">
        other
      </h2>
      <Container>
        <Row>
          <Col className="col-vid">
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/360861743" frameBorder="0" allowFullScreen></iframe>
          </Col>
          <Col className="col-description">
            <div>
              <h5>better world: scholarships @ MIT</h5>
              <p>
                this was a cool <a className="link" href="https://betterworld.mit.edu/scholarships-at-mit-billy-torres-19-is-inspired-by-inclusivity/" target="_blank" rel="noopener noreferrer">campaign</a> I had the privilege of participating in, highlighting the importance of scholarships in my journey as well family support
              </p>
            </div>
          </Col>
        </Row>

        <div className="divider" />

        <Row>
          <Col className="col-vid">
          <iframe src="https://www.youtube.com/embed/jMq7bI-MxYc" title="mexico trip" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Col>
          <Col className="col-description">
            <div>
              <h5>adventures in Mexico</h5>
              <p>
                in my senior winter term (2019), i helped teach two computer science classes to high school students in Prepa Tec, CDMX. while there i had some fun traveling around, documented briefly here
              </p>
            </div>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default Other;
