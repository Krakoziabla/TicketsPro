import React from 'react';
import './App.css';
import Navpanel from "./components/Navpanel";
import {Col, Row} from "react-bootstrap";
import CalendarMain from "./components/Calendar";


function App() {
    return (
        <div className="App">
            <Navpanel/>
            <Row id='main_window'>
                <Col id='calendar_events' md={3} className='justify-content-end'>
                    <CalendarMain className='col-md-12'/>

                </Col>
                <Col md={9} id='content_window'>
                </Col>
            </Row>
        </div>
    );
}

export default App;
