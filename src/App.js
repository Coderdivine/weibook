import logo from './logo.svg';
import './App.css';
import Email from './Email';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/:names" component={Email}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
