import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'


 
  class FirstQuestion extends Component {
     constructor(props) {
         super(props)
 
         this.state = {
            userAnswer : '', 
            disabled : true ,
            selectans : ''  
         }
 
        
     }
 
     touchAnswer = answer => {
        this.setState({
           userAnswer : answer,
           selectans : this.props.setOne,
            disabled : false,
            
        })
    }
 
 
     render() {
        
         const{userAnswer} = this.state
         
         return (
             
                 <div>
                    <h1  className={`maibeer`} >mAIBeer </h1>
                    <h2 className={`heading`}>1/6</h2>
                    <h2 className={`heading`} > {this.props.Data.questions[0].question} </h2>
                   <div className={`ans-ant`}>
                    {this.props.Data.questions[0].answers.map((a)=>
                     
                    <span 
                    key={a.answer}
                    className={`options ${userAnswer===a?"selected":null}`}
                                    onClick={()=>this.touchAnswer(a)}
                    >
                        {a.answer}
                    </span>
                     
                    )
                    }</div><br/>

                     <Button 
                        onClick={this.props.navigation.next} 
                        className={`onebutton`}
                        variant="warning"
                        disabled={this.state.disabled}
                    >
                       Next
                     </Button>

                    <div style={bg}>
           
                        <div style={mystyle}>
                            <h3>Why do you need to answer this?</h3>
                            <p>{this.props.Data.questions[0].why_answer}</p>
                        
                        </div>
                     </div>
                
                     </div>
         )
     }
 }
  

 const mystyle = {
    // marginTop :'150px',
    paddingTop : '100px',
    marginLeft:'180px'
  };
  const bg={
    top: '534px',
    left: '0px',
    width: '100%',
    height: '320px',
    background: '#F7F2E8 0% 0% no-repeat padding-box',
    opacity: '1',
    marginTop :'100px'
}

export default FirstQuestion