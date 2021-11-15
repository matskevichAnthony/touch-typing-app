import React from "react";
//import components

import Navigation from './components/Navigation/';

//import pages
import Home from './pages/Home'
import Training from './pages/Training'

//import modules
import { useSelector, useDispatch } from 'react-redux';
import { Router, Switch, Route, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import GlobalStyle from "./components/GlobalStyle";

function App() {

  // const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const location = useLocation();
  let { topicId } = useParams();
  let { path, url } = useRouteMatch();

  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Training" exact>
          <Training />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
