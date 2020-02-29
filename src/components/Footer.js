import React from "react";
import {Col, Image, Row} from "react-bootstrap";


class Footer extends React.Component{

    render() {
        return (
<div className={'col-md-12 row'}>
    <Col md={3}>
        <Image src={require('../images/logo_col.svg')}/>
    </Col>
    <Col md={3} >
        <p>Berlin City Hall</p>
        <p>Freudstrasse 69, 10117 Berlin</p>
        <p>Tel.: 030 2223344</p>
    </Col>
    <Col md={2}/>
    <Col md={1}/>
    <Col md={3}>
<p>Fax: 030 2223355</p>
<p>E-Mail: info@bch.de</p>
        <Row>
            <a href='#'><Image className='icons'
                               src={require('../images/icon/icons8-youtube-100.png')}/></a>
            <Image className='icons' src={require('../images/icon/icons8-facebook-100.png')}/>
            <Image className='icons' src={require('../images/icon/icons8-twitte100.png')}/>
            <Image className='icons' src={require('../images/icon/icons8-instagram-100.png')}/>
            <Image className='icons' src={require('../images/icon/icons8-100.png')}/>
            <Image className='icons' src={require('../images/icon/icons8-rss-100.png')}/>
        </Row>
    </Col>
</div>


        )
    }

}





export default Footer;