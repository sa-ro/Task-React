import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from '../../assets/urn_aaid_sc_US_178c0676-bcca-49a6-b318-2cfbec7e9d9b.png'
import GetStartedButton from './HomeButton'

function HomeMiddle() {
    return (
        <div style={bg}>
            <Container>
                <Row>
                    <Col style={img}>
                    <img src={Image} alt="img" width="200"/>
                    </Col>
                    <Col style={mystyle}>
                    <h3>Find the Beer you’ll love.</h3>
                    <p>We combine our beer expertise with your taste preference to suggest the best beer for you.</p>
                    <GetStartedButton />
                    </Col>
                </Row>
 
            </Container>
        </div>
    )
}

const bg={
    top: '534px',
    left: '0px',
    width: '100%',
    height: '320px',
    background: '#F7F2E8 0% 0% no-repeat padding-box',
    opacity: '1',
    marginTop :'200px'
}

 const img = {
    marginTop : '-50px'
 }
 
const mystyle = {
    marginTop :'50px',
    marginRight :'400px'
  };


export default HomeMiddle
