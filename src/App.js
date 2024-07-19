import Nav from './components/Navigation/Nav';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';


function App() {
  return (
    <Router>
      <div className='app-container'>
        {/* <Nav /> */}
        <Switch>
          <Route path="/about">
            about
          </Route>
          <Route path="/news">
            news
          </Route>
          <Route path="/contact">
            contact
          </Route>
          <Route path="/" exact>
            home
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            404 not found
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
