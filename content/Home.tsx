import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Carousel, Row, Col, Card, ListGroup } from 'react-bootstrap';

const Home: NextPage = () => {

  return (
    <>
      <Head>
          <title> หน้าหลัก - S.S.S. </title>
      </Head>
      <Row>
        <Col xs={8}>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Home_Carousel/home_carousel (1).jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Home_Carousel/home_carousel (2).jpg"
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Home_Carousel/home_carousel (3).jpg"
                alt="Third slide"
              />
      
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </Col>
        <Col xs={4}>

          <Card>
            <Card.Header className="text-center">
              เมนูด่วน
            </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item><Link href="#" passHref>Cras justo odio</Link></ListGroup.Item>
                <ListGroup.Item><Link href="#" passHref>Dapibus ac facilisis in</Link></ListGroup.Item>
                <ListGroup.Item><Link href="#" passHref>Morbi leo risus</Link></ListGroup.Item>
                <ListGroup.Item><Link href="#" passHref>Porta ac consectetur ac</Link></ListGroup.Item>
                <ListGroup.Item><Link href="#" passHref>Cras justo odio</Link></ListGroup.Item>
                <ListGroup.Item><Link href="#" passHref>Dapibus ac facilisis in</Link></ListGroup.Item>
                <ListGroup.Item><Link href="#" passHref>Morbi leo risus</Link></ListGroup.Item>
                <ListGroup.Item><Link href="#" passHref>Porta ac consectetur ac</Link></ListGroup.Item>
              </ListGroup>
            
          </Card>

        </Col>
      </Row>
        
    </>
  )
}

export default Home

