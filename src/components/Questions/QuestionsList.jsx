import React from 'react'
import {useForm,useStep} from 'react-hooks-helper'
import FirstQuestion from './FirstQuestion'
import SecondQuestion from  './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import FourthQuestion from './FourthQuestion'
import FifthQuestion from './FifthQuestion'
import SixthQuestion from './SixthQuestion'
import Questions from '../Questions'

        

const steps = [
    {id : 'one'},
    {id : 'two'},
    {id : 'three'},
    {id : 'four'},
    {id : 'five'},
    {id : 'six'}
]


 const QuestionsList = () => {
     const [Data,setData] = useForm(Questions)
    
     const {step,navigation} = useStep({
         steps,
         initialStep:0
     })

     const props = {Data,setData,navigation}
     

    switch(step.id){
        case "one" : 
        return <FirstQuestion {...props} />
        case "two" : 
        return <SecondQuestion {...props} />
        case "three" : 
        return <ThirdQuestion  {...props}/>
        case "four" : 
        return <FourthQuestion  {...props} />
        case "five" : 
        return <FifthQuestion  {...props}/>
        case "six" : 
        return <SixthQuestion  {...props} />
        default :
        return
    }


}
export default QuestionsList