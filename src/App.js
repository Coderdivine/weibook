import logo from './logo.svg';
import './App.css';
import Email from './Email';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header role="banner" class="ui-section-header">
      <div class="ui-layout-container">
        <div class="ui-section-header__layout ui-layout-flex">
          <a href="#" role="link" aria-label="#">
          Weibooks
            <svg viewBox="0 0 18 18" height="18" width="18" role="img" aria-label="#">
              <path fill="#353535" d="M16 0h4.5v9a4.5 4.5 0 109 0V6H18v3A9 9 0 110 9V0zm18 4.5V0h-4.5v4.5H18z"/>
            </svg>
          </a>
          <a href="https://www.twitter.com/Chimdi.xo/" role="link" aria-label="#">
            <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="#353535" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" role="img" aria-label="#">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
    <Router>
      <Switch>
        <Route path="/:names" component={Email}/>
        <Route exact  path='/' component={Home}/>
        
      </Switch>
    </Router>
    <footer role="contentinfo" class="ui-section-footer">
      <div class="ui-layout-container">
        <div class="ui-section-footer__layout ui-layout-flex">
          
          <p class="ui-section-footer--copyright ui-text-note"><small>&copy; Copyright - 2022 We book</small></p>
          
          <a href="https://www.facebook.com/roydnxcy" role="link" aria-label="#" class="ui-text-note"><small>Facebook</small></a>
          <a href="https://www.pdfdrive.com" role="link" aria-label="#" class="ui-text-note"><small>Drive</small></a>
        </div>
      </div>
    </footer>

    </div>
  );
}

export default App;
