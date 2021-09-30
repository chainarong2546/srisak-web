import type { NextPage } from 'next';
import Head from 'next/head';
import {Row, Col, Card, Accordion } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Ita: NextPage = () => {

  const router = useRouter();
  const ita = router.query.ita;

  if (ita == 'ita' || ita == '' || ita == undefined) {
    
  }
  return (
    <>
      <Head>
        <title> ITA - S.S.S. </title>
      </Head>
      <h1> ITA </h1>

      <Row>
        <Col xs={8}>
          <Card>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header> [01] เปิดเผยข้อมูลที่ 01 </Accordion.Header>
                <Accordion.Body>
                  <iframe src="https://drive.google.com/file/d/1TnDFzlsp2gcXCFRbJCaRFHUKl5FMlIyK/preview" height="480px" width="100%" allow="autoplay" />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header> [02] เปิดเผยข้อมูลที่ 02 </Accordion.Header>
                <Accordion.Body>
                  <iframe src="https://drive.google.com/file/d/1TnDFzlsp2gcXCFRbJCaRFHUKl5FMlIyK/preview" height="480px" width="100%" allow="autoplay" />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            
            
          </Card>
        </Col>
        <Col xs={4}>
          <Card>
            <Card.Header className="text-center"> ITA (OIT) </Card.Header>
            <Card.Body>
              <Link href="?page=ita&ita=ita" passHref> การประเมินคุณธรรมและความโปร่งใส </Link><br/>
              <Link href="?page=ita&ita=o01" passHref> [01] เปิดเผยข้อมูลที่ 01 </Link><br/>
              <Link href="?page=ita&ita=o02" passHref> [02] เปิดเผยข้อมูลที่ 02 </Link><br/>
              <Link href="?page=ita&ita=o03" passHref> [03] เปิดเผยข้อมูลที่ 03 </Link><br/>
              <Link href="?page=ita&ita=o04" passHref> [04] เปิดเผยข้อมูลที่ 04 </Link><br/>
              <Link href="?page=ita&ita=o05" passHref> [05] เปิดเผยข้อมูลที่ 05 </Link><br/>
              <Link href="?page=ita&ita=o06" passHref> [06] เปิดเผยข้อมูลที่ 06 </Link><br/>
              <Link href="?page=ita&ita=o07" passHref> [07] เปิดเผยข้อมูลที่ 07 </Link><br/>
              <Link href="?page=ita&ita=o08" passHref> [08] เปิดเผยข้อมูลที่ 08 </Link><br/>
              <Link href="?page=ita&ita=o09" passHref> [09] เปิดเผยข้อมูลที่ 09 </Link><br/>
              <Link href="?page=ita&ita=o10" passHref> [10] เปิดเผยข้อมูลที่ 10 </Link><br/>
              <Link href="?page=ita&ita=o11" passHref> [11] เปิดเผยข้อมูลที่ 11 </Link><br/>
              <Link href="?page=ita&ita=o12" passHref> [12] เปิดเผยข้อมูลที่ 12 </Link><br/>
              <Link href="?page=ita&ita=o13" passHref> [13] เปิดเผยข้อมูลที่ 13 </Link><br/>
              <Link href="?page=ita&ita=o14" passHref> [14] เปิดเผยข้อมูลที่ 14 </Link><br/>
              <Link href="?page=ita&ita=o15" passHref> [15] เปิดเผยข้อมูลที่ 15 </Link><br/>
              <Link href="?page=ita&ita=o16" passHref> [16] เปิดเผยข้อมูลที่ 16 </Link><br/>
              <Link href="?page=ita&ita=o17" passHref> [17] เปิดเผยข้อมูลที่ 17 </Link><br/>
              <Link href="?page=ita&ita=o18" passHref> [18] เปิดเผยข้อมูลที่ 18 </Link><br/>
              <Link href="?page=ita&ita=o19" passHref> [19] เปิดเผยข้อมูลที่ 19 </Link><br/>
              <Link href="?page=ita&ita=o20" passHref> [20] เปิดเผยข้อมูลที่ 20 </Link><br/>
              <Link href="?page=ita&ita=o21" passHref> [21] เปิดเผยข้อมูลที่ 21 </Link><br/>
              <Link href="?page=ita&ita=o22" passHref> [22] เปิดเผยข้อมูลที่ 22 </Link><br/>
              <Link href="?page=ita&ita=o23" passHref> [23] เปิดเผยข้อมูลที่ 23 </Link><br/>
              <Link href="?page=ita&ita=o24" passHref> [24] เปิดเผยข้อมูลที่ 24 </Link><br/>
              <Link href="?page=ita&ita=o25" passHref> [25] เปิดเผยข้อมูลที่ 25 </Link><br/>
              <Link href="?page=ita&ita=o26" passHref> [26] เปิดเผยข้อมูลที่ 26 </Link><br/>
              <Link href="?page=ita&ita=o27" passHref> [27] เปิดเผยข้อมูลที่ 27 </Link><br/>
              <Link href="?page=ita&ita=o28" passHref> [28] เปิดเผยข้อมูลที่ 28 </Link><br/>
              <Link href="?page=ita&ita=o29" passHref> [29] เปิดเผยข้อมูลที่ 29 </Link><br/>
              <Link href="?page=ita&ita=o30" passHref> [30] เปิดเผยข้อมูลที่ 30 </Link><br/>
              <Link href="?page=ita&ita=o31" passHref> [31] เปิดเผยข้อมูลที่ 31 </Link><br/>
              <Link href="?page=ita&ita=o32" passHref> [32] เปิดเผยข้อมูลที่ 32 </Link><br/>
              <Link href="?page=ita&ita=o33" passHref> [33] เปิดเผยข้อมูลที่ 33 </Link><br/>
              <Link href="?page=ita&ita=o34" passHref> [34] เปิดเผยข้อมูลที่ 34 </Link><br/>
              <Link href="?page=ita&ita=o35" passHref> [35] เปิดเผยข้อมูลที่ 35 </Link><br/>
              <Link href="?page=ita&ita=o36" passHref> [36] เปิดเผยข้อมูลที่ 36 </Link><br/>
              <Link href="?page=ita&ita=o37" passHref> [37] เปิดเผยข้อมูลที่ 37 </Link><br/>
              <Link href="?page=ita&ita=o38" passHref> [38] เปิดเผยข้อมูลที่ 38 </Link><br/>
              <Link href="?page=ita&ita=o39" passHref> [39] เปิดเผยข้อมูลที่ 39 </Link><br/>
              <Link href="?page=ita&ita=o40" passHref> [40] เปิดเผยข้อมูลที่ 40 </Link><br/>
              <Link href="?page=ita&ita=o41" passHref> [41] เปิดเผยข้อมูลที่ 41 </Link><br/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Ita



