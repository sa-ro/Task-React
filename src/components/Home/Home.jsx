import React from 'react';
import MiddleLayer from '../Home/HomeMiddle'
import Footer from '../Home/Footer'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
 
const Home = () => {
    return (
       <div>
          <div>
     <div >
        <Container>
          <Row>
              <Col>
                 <h4>mAIBeer</h4>
              </Col>
          </Row>
        </Container>
     </div>
    <h1 className={`homeheader`}>Explore and discover new beers</h1>
    <MiddleLayer/>
    <Footer/>
   </div>
         
       </div>
    );
}
 
export default Home;
