import React, { ReactElement } from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import Link from 'next/link';

interface Props {
    
}

export default function My_Navbar({}: Props): ReactElement {

    return (
    <>
        <Navbar className="bg-nav" variant="dark">
            <Container fluid="lg">

                <Link href="/../" passHref>
                    <Navbar.Brand><b> SRISAK </b></Navbar.Brand>
                </Link>

                <Nav className="me-auto">

                    <Link href="?page=home" passHref>
                        <Nav.Link className="active"> หน้าหลัก </Nav.Link>
                    </Link>

                    <NavDropdown title="เกี่ยวกับโรงเรียน" className="" id="basic-nav-dropdown">
                        <Link href="?page=info&info=basic_information" passHref>
                            <NavDropdown.Item> ข้อมูลพื้นฐาน </NavDropdown.Item>
                        </Link>
                        <Link href="?page=info&info=history" passHref>
                            <NavDropdown.Item> ประวัติโรงเรียน </NavDropdown.Item>
                        </Link>
                        <Link href="?page=info&info=vision" passHref>
                            <NavDropdown.Item> วิสัยทัศน์ </NavDropdown.Item>
                        </Link>
                        <Link href="?page=info&info=mission" passHref>
                            <NavDropdown.Item> พันธกิจ/เป้าประสงค์ </NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />
                        <Link href="?page=ita" passHref>
                            <NavDropdown.Item> ITA </NavDropdown.Item>
                        </Link>
                    </NavDropdown>

                    <NavDropdown title="บุคลากร" className="" id="basic-nav-dropdown">
                        <Link href="?page=personnel&personel=1" passHref>
                            <NavDropdown.Item> ผู้บริหาร </NavDropdown.Item>
                        </Link>
                        <Link href="?page=personnel&personel=2" passHref>
                            <NavDropdown.Item> หมวดฯ ภาษาไทย </NavDropdown.Item>
                        </Link>
                        <Link href="?page=personnel&personel=3" passHref>
                            <NavDropdown.Item> หมวดฯ คณิตศาสตร์ </NavDropdown.Item>
                        </Link>
                        <Link href="?page=personnel&personel=4" passHref>
                            <NavDropdown.Item> หมวดฯ ภาษาต่างประเทศ </NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />
                        <Link href="?page=personnel&personel=other" passHref>
                            <NavDropdown.Item> บุคลากร อื่นๆ </NavDropdown.Item>
                        </Link>
                    </NavDropdown>

                    <Link href="?page=news" passHref>
                        <Nav.Link> ข่าวสาร </Nav.Link>
                    </Link>

                    <Link href="?page=contact" passHref>
                        <Nav.Link> ติดต่อ </Nav.Link>
                    </Link>
                    
                </Nav>
            </Container>
        </Navbar>
    </>
    )
}
