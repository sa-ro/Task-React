import React,{Component} from 'react';
import Button from 'react-bootstrap/Button'



export default class FouthQuestion extends Component {
    constructor(props) {
        super(props)

        this.state = {
                  
         currentIndex : 0,
         count : 1,
          

        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
 }

    increment() {
        this.setState({
          count: this.state.count + 1
        });
      };
      
      decrement() {
        this.setState({
          count: this.state.count - 1,
         
        });
      };

    

    
    render() {
   
        return (
            
         <div>    
    <div>
        <div>
        <h2 className={`maibeer`}>mAIBeer</h2>
        <Button variant="outline-secondary" href="/" className={`exit-btn`}>x</Button>
        </div>

        <div className={`flex`}>
        <h2 className={`tit`}>4/6</h2>
            <div className={`heading`}>
                <h2>{this.props.Data.questions[3].question}</h2>
            </div>
        </div>

        <div className ={`counter`}>
            <button className={`counter-btn`} onClick={this.decrement}>-</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {this.state.count}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className={'counter-btn'} onClick={this.increment}>+</button>
       </div>
       <div className={`btn-two`}>
        <Button
         onClick={this.props.navigation.previous} 
        variant="secondary"
        className={`cov`}
        >
        Previuos
        </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button 
        onClick={this.props.navigation.next} 
        variant="warning"
        className={`cov`}
        >
            Next
        </Button>
        </div>
        </div >
        <div style={bg}>
           
                    <div style={mystyle}>
                        <h3>Why do you need to answer this?</h3>
                        <p>{this.props.Data.questions[3].why_answer}</p>
                   </div>
        </div>
    </div>

            
        )
    }
}
const bg={
    top: '534px',
    left: '0px',
    width: '100%',
    height: '320px',
    background: '#F7F2E8 0% 0% no-repeat padding-box',
    opacity: '1',
    marginTop :'100px'
}


 
const mystyle = {
    // marginTop :'150px',
    paddingTop : '100px',
    marginLeft:'180px'
  };


