import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home'
import QuestionsList from './components/Questions/QuestionsList'
import Result from './components/Result/Result'

function App() {
  return (
   <BrowserRouter>
     <Switch>
       <Route exact path ='/' component={Home} />
       <Route path='/question-list' component={QuestionsList}/>
       <Route path='/result' component={Result}/>
     </Switch>
   </BrowserRouter>
  );
}

export default App;
