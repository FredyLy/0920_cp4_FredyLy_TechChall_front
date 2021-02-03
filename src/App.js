import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

import './App.css';

function App () {
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
