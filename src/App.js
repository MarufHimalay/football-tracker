import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import NoMatch from "./components/NoMatch/NoMatch";
import TeamDetails from './components/TeamDetail/TeamDetails';
import Teams from './components/Teams/Teams';

function App() {
  const style={
    backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2014/10/14/20/24/soccer-488700_1280.jpg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <div style={style}>
    
      <Router>
      
       <Switch>
         <Route exact path="/">
         <Header></Header>
           <Teams></Teams>
         </Route>
         <Route path="/team/:id">
            <TeamDetails></TeamDetails>
         </Route>
         <Route path="*">
          <NoMatch></NoMatch>
         </Route>
       </Switch>
     </Router> 
     </div>
  );
}

export default App;
