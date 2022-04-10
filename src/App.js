import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import Header from "./Components/Shared/Header/Header";
import StickyNav from "./Components/Shared/Navbar/StickyNav";

import TopMarquee from "./Components/Shared/TopMarquee/TopMarquee";

function App() {
  return (
    <div>
      <Router>

        <StickyNav></StickyNav>
        <Switch>
          <Route path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
