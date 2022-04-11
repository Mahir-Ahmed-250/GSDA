import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import StickyNav from "./Components/Shared/Navbar/StickyNav";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div>
      <ScrollToTop smooth viewBox="0 0 12 7" svgPath="M5.95.03c-.267 0-.523.106-.712.294L.355 5.198c-.395.394-.395 1.03 0 1.424.394.393 1.032.393 1.426 0L5.95 2.46l4.172 4.162c.394.393 1.032.393 1.426 0 .394-.393.394-1.03 0-1.424L6.665.324C6.475.136 6.22.03 5.95.03z" />
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
