import React from 'react';
import './App.css';
import Navpanel from "./components/Navpanel";
import {Col, Row} from "react-bootstrap";
import CalendarMain from "./components/Calendar";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
    return (
        <div className="App">
            <Navpanel/>
            <Row id='main_window'>
                <Col id='calendar_events' md={3} className='justify-content-end'>
                    <CalendarMain className='col-md-12'/>

                </Col>
                <Col md={9} id='content_window'>
                    <Row>
                        <Main className='col-md-12 row'/>
                        <Footer className='col-md-12'/>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default App;
