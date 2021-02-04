import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import RoyalFamily from './components/RoyalFamily/RoyalFamily';
import Assets from './components/Assets/Assets';
import Footer from './components/Footer/Footer';
import QuoteContext from './context/QuoteContext';
import CharacterContext from './context/CharacterContext';
import AssetsContext from './context/AssetsContext';

import './App.css';

function App () {
  const [quote, setQuote] = useState([]);
  const [character, setCharacter] = useState([]);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
		const url = 'http://localhost:5000/quotes';
		axios
		.get(url)
		.then((res) => setQuote(res.data))
		.catch((err) => console.log(err))
  }, []);

  useEffect(() => {
		const url = 'http://localhost:5000/characters';
		axios
		.get(url)
		.then((res) => setCharacter(res.data))
		.catch((err) => console.log(err))
  }, []);

  useEffect(() => {
		const url = 'http://localhost:5000/assets';
		axios
		.get(url)
		.then((res) => setAssets(res.data))
		.catch((err) => console.log(err))
  }, []);

  return (
    <QuoteContext.Provider value={quote}>
        <CharacterContext.Provider value={character}>
          <AssetsContext.Provider value={assets}>
            <div className="App">
              <Header />
              <div className="bloc-page">
                <Switch >
                  <Route exact path='/' component={Home} />
                  <Route exact path='/royal-family' component={RoyalFamily} />
                  <Route exact path='/assets' component={Assets} />
                </Switch>
              </div>
              <Footer />
            </div>
          </AssetsContext.Provider>
        </CharacterContext.Provider>
    </QuoteContext.Provider>
  );
}

export default App;
