import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchInput from './components/Search/SearchInput';
import TopCities from './components/TopCities/TopCities';

function App() {
  return (
    <div className="App">
      <Header />
      <TopCities />
      <SearchInput />
    </div>
  );
}

export default App;
