import React, { Component } from 'react'

// import '../App.css'



import Button from 'react-bootstrap/Button'



export default class FifthQuestion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userAnswer : null,
            disabled : true  ,
           
            
        }
 }



    touchAnswer = answer =>{
        this.setState({
            userAnswer : answer,
            disabled : false,
            
        })
    }

    


    render() {
        const{userAnswer} = this.state

       
       

        return (
                        <div>
                     <h1 className={`maibeer`}>mAIBeer</h1>
                     <Button variant="outline-secondary" href="/" className={`exit-btn`}>x</Button>
                <h2 className={`tit`}>5/6</h2>
                <h2 className={`heading`}>{this.props.Data.questions[4].question}</h2>
                <h2 className={`heading`}>{this.props.Data.questions[4].question_hint}</h2>
               
                <div className={`ans-ant`}>{
                            this.props.Data.questions[4].answers.map(a =>
                                
                                <span
                                    key={a.id}
                                   
                                    className={`options ${userAnswer===a?"selected":null}`}
                                    onClick={()=>this.touchAnswer(a)}
                                >
                                    {a.answer}
                                </span>
                               
                                   )
                            } </div>
                            
                             <div>
                               
                                <div className={`btn-divone`}>
                                        <Button
                                        onClick={this.props.navigation.previous} 
                                        variant="secondary"
                                        className={`btn-btn`}
                                        >
                                        Previuos
                                        </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Button 
                                        onClick={this.props.navigation.next} 
                                        disabled={this.state.disabled} 
                                        variant="warning"
                                        className={`btn-btn`}
                                        >
                                            Next
                                        </Button>
                                </div>
                             </div>
                               
                                

                                <div style={bg}>
           
                                    <div style={mystyle}>
                                        <h3>Why do you need to answer this?</h3>
                                        <p>{this.props.Data.questions[4].why_answer}</p>
                                    
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
