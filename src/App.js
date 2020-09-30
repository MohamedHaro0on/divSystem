import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ClassNames from './App.module.scss';
import Header from './Components/Header/Header';
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <Router>
      <Header />
      <main className  = {ClassNames.Main}>
        <Route path="/" exact component={HomePage} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;