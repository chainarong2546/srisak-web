import type { NextPage } from 'next';
import Head from 'next/head';
import { Image as BSImage, Container, Button } from 'react-bootstrap';
import Link from 'next/link';


const Welcome: NextPage = () => {
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title> ยินดีต้อนรับ - S.S.S. </title>
      </Head>

      <Container fluid="lg" style={{textAlign:'center'}}>
        <BSImage src="/Index_page/Welcome_01.jpg" fluid /> 
        <br/><br/>
        <Link href="/web" passHref replace>
          <Button variant="success" size="lg"> เข้าสู่เว็บไซต์ </Button>
        </Link>
      </Container>
    </>
  )
}

export default Welcome
