import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div>
      <Router>
        <Header>

        </Header>
        <Switch>
          <Route></Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
