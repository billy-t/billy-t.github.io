import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import './styles/App.css';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
