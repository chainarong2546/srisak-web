import React, { ReactElement } from 'react'
import Marquee from "react-fast-marquee";
import Script from 'next/script';

interface Props {
    
}

export default function My_Alert({}: Props): ReactElement {
    return (
        <>
        
        <Marquee speed={50} gradient={false} pauseOnHover={true} style={{ color: 'red' }}>
            <div className="my-alert" style={{display:'block'}}  />
        </Marquee>
        
        <Script strategy="lazyOnload">
            {`  
                var x = ("zaza");
                document.getElementsByClassName('my-alert')[0].innerHTML = x;
                document.getElementsByClassName('my-alert')[1].innerHTML = x;
            `}
        </Script>
    </>
    )
}
