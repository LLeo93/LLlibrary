import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <h1>LLeostaurant</h1>
            <h2>Le paste! come tu le voi!</h2>
            <Carousel>
              <Carousel.Item>
                <img
                  src=" https://baconmockup.com/300/200"
                  text="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src=" https://baconmockup.com/300/200"
                  text="Second slide "
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src=" https://baconmockup.com/300/200"
                  text="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
