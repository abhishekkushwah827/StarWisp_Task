import Notepad from "./Notepad";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideMenu from "./SideMenu";
import Home from "./Home";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SideMenu />
            <Home />
          </Route>
          <Route exact path="/lorem">
            <h1>Lorem page</h1>
            <SideMenu />
          </Route>
          <Route exact path="/ipsum">
            <h1>ipsum page</h1>
            <SideMenu />
          </Route>
          <Route path="/notepad">
            <SideMenu />
            <Notepad />
          </Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
