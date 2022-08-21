import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Todo from './Routes/Todo';
import Note from './Routes/Note';

function App({ isLoggedIn }) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        {isLoggedIn ? (
          <>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/note">
              <Note />
            </Route>            
          </>
        ) : (
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        )}        
      </Switch>
    </Router>
  );
}

export default App;