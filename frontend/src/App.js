import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
//Components
import Navbar from './Navbar'
import Home from './Home'
import ProductScreen from './ProductScreen'
import Footer from './Footer'
import NoMatch from './NoMatch'
//Style
import './app.scss';

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/product/:id' component={ProductScreen}/>
            <Home />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
