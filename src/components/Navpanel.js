import React from "react";
import {Col, Container, Image, Navbar, Row} from "react-bootstrap";

class Navpanel extends React.Component {

    render() {
        return (

            <Navbar id='mb' expand='lg'>
                <Navbar.Brand id='brand' href='#'>
                    <div id='logo_col'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main_navbar"/>
                <Container>
                    <Row className='col-md-12'>
                        <Col md={12} className='row justify-content-between'>
                            <p className='col-md-6'>Berlin City Hall | Events and Tickets</p>
                            <Col md={6} className='row justify-content-end'>
                                <a href='#'><Image className='icons'
                                                   src={require('../images/icon/icons8-youtube-100.png')}/></a>
                                <Image className='icons' src={require('../images/icon/icons8-facebook-100.png')}/>
                                <Image className='icons' src={require('../images/icon/icons8-twitte100.png')}/>
                                <Image className='icons' src={require('../images/icon/icons8-instagram-100.png')}/>
                                <Image className='icons' src={require('../images/icon/icons8-100.png')}/>
                                <Image className='icons' src={require('../images/icon/icons8-rss-100.png')}/>
                            </Col>
                        </Col>
                        <Col md={12} className='row justify-content-between'>
                            <Col md={6} className='row'>
                                <p className='col-md-2'>Login</p>
                                <p className='col-md-1'>DE</p>
                                <p className='col-md-1'>EN</p>
                            </Col>
                            <Col md={6} className='row justify-content-end'><Image className='icons'
                                                                                   src={require('../images/icon/icons8-menu-48.png')}/></Col>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        )
    }

}


export default Navpanel;