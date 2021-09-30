import React, { ReactElement } from 'react'
import { Image as BSImage } from 'react-bootstrap';

interface Props {
    
}

export default function My_HeaderImage({}: Props): ReactElement {
    return (
    <>
        <BSImage className="header-img" src="/Header_Img/header_img.jpg" fluid />
    </>
    )
}
