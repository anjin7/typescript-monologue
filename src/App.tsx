import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Todo from './Routes/Todo';
import Projects from './Routes/Projects';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/project">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>       
      </Switch>
    </Router>
  );
}

export default App;