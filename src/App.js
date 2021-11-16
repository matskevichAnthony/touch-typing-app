import React from "react";
//import components
import Navigation from './components/Navigation/';
//import pages
import Home from './pages/Home'
import Training from './pages/Training'
//import modules
import { Switch, Route, useLocation } from 'react-router-dom';
import GlobalStyle from "./components/GlobalStyle";

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/training" exact>
          <Training />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
