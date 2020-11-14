import React from 'react'
import {Button} from 'react-bootstrap'
import HomeBottom from './HomeBottom'


function Footer() {
    return (

        <div className ={`bgg`}>
        <div >
            <h3>Thanks for taking the time with us.<br/>Please give us your feedback to improve!</h3>
           <Button  variant="secondary">Feedback</Button>
           </div>
           <div className={`bottom`}>
           <HomeBottom/>
           </div>
        
        </div>
    )
}





export default Footer

