import React,{Component} from 'react';
import Honey from '../../assets/images.png'
import Coffee from '../../assets/coffee.jpg'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import Button from 'react-bootstrap/Button'



const useStyles = makeStyles((theme) => ({
  root: {
      marginLeft:400,
      marginTop:-150,
    width: 600 + theme.spacing(3) * 2,
  },
 
}));







const PrettoSlider = withStyles({
  root: {
    color: 'gray',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: 'white',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const text = {
    marginTop : 30,
    color : 'orange'
}



 function SliderFunc() {

    
  const classes = useStyles();

  return (

    
            <div className={classes.root}>
                <PrettoSlider valueLabelDisplay="auto"  defaultValue={0} />
            </div>
            
       
    
    
  );
}



export default class SecondQuestion extends Component {
    constructor(props) {
        super(props)

        this.state = {
                  
     

        }

       
    }

    
    render() {

      
   
        return (
            
             
    <div>
        <div>
        <h2 className={`maibeer`}>mAIBeer</h2>
        <Button variant="outline-secondary" href="/" className={`exit-btn`}>x</Button>
        </div>
        <div className={`flex`}>
        <h2 className={`tit`}>2/6</h2>
            <div className={`heading`}>
        <h2>{this.props.Data.questions[1].question}</h2>
            </div>
            <div className={`imgtwo`}>
            <img src={Honey}  alt="bbb" width='70' />
            <h3 style={text} >Low</h3>
        <p>{this.props.Data.questions[1].left_description}</p>
            </div>
           <SliderFunc />
            <div className={`coffee`}>
            <img src={Coffee}  alt="ccc" width='70' />
            <h3 style={text}>High</h3>
            <p>{this.props.Data.questions[1].right_description}</p>
            </div>
        </div>
        <div className={`btn-div`}>
        <Button
        onClick={this.props.navigation.previous} 
        variant="secondary"
        className={`btn-btn`}
        >
        Previuos
        </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button 
        onClick={this.props.navigation.next} 
        variant="warning"
        className={`btn-btn`}
        >
            Next
        </Button>
        </div>
        <div style={bg}>
           
                    <div style={mystyle}>
                    <h3>Why do you need to answer this?</h3>
                    <p>{this.props.Data.questions[1].why_answer}</p>
                   
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


