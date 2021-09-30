import type { NextPage } from 'next';
import Head from 'next/head';
import {Row, Col, Card, Button, Image as BSImage } from 'react-bootstrap';
import { useRouter } from 'next/router';

const News: NextPage = (props) => {
  
  const router = useRouter();
  const news = router.query.news;

  if (news == 'ita' || news == '' || news == undefined) {
    
  }

  return (
    <>
      <Head>
        <title> ประชาสัมพันธ์ - S.S.S. </title>
      </Head>
      <h1> ประชาสัมพันธ์ </h1>
      <Row>
        <Col xs={8}>
            <Row>
              <Col xs={4}>
                <BSImage src="/Home_Carousel/home_carousel (3).jpg" fluid /> 
              </Col>
              <Col xs={8}>
                <h3> ทดสอบ </h3>
                <p>fssekfnsdkbkfcmlkcjs8whfksbusefaklcahf fwoefjwiofhfncosefhweoi  fwfsnvksefbwefawfewiohmfwfnjiweg vkjsegnlpcmsjigh jgkfnwe jfbwpafjoieh</p>
              </Col>
            </Row><hr/>
            <Row>
              <Col xs={4}>
                <BSImage src="/Home_Carousel/home_carousel (3).jpg" fluid /> 
              </Col>
              <Col xs={8}>
                <h3> ทดสอบ </h3>
                <p>fssekfnsdkbkfcmlkcjs8whfksbusefaklcahf fwoefjwiofhfncosefhweoi  fwfsnvksefbwefawfewiohmfwfnjiweg vkjsegnlpcmsjigh jgkfnwe jfbwpafjoieh</p>
              </Col>
            </Row><hr/>
            <Row>
              <Col xs={4}>
                <BSImage src="/Home_Carousel/home_carousel (3).jpg" fluid /> 
              </Col>
              <Col xs={8}>
                <h3> ทดสอบ </h3>
                <p>fssekfnsdkbkfcmlkcjs8whfksbusefaklcahf fwoefjwiofhfncosefhweoi  fwfsnvksefbwefawfewiohmfwfnjiweg vkjsegnlpcmsjigh jgkfnwe jfbwpafjoieh</p>
              </Col>
            </Row><hr/>
        </Col>
        <Col xs={4}>
        <Card>
          <Card.Header> แท็ก </Card.Header>
          <Card.Body>
            <Button variant="outline-primary" size="sm" style={{margin: '1px'}}> กยศ. </Button>
            <Button variant="outline-primary" size="sm" style={{margin: '1px'}}> COVID-19 </Button>
            <Button variant="outline-primary" size="sm" style={{margin: '1px'}}> Primary </Button>
            <Button variant="outline-primary" size="sm" style={{margin: '1px'}}> Primary </Button>
            <Button variant="outline-primary" size="sm" style={{margin: '1px'}}> Primary </Button>
          </Card.Body>
        </Card>
        
        </Col>
      </Row>
    </>
  )
}

export default News