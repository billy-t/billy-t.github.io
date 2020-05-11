import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import './styles/App.css';
import Container from 'react-bootstrap/Container';

import About from './components/About';
import Other from './components/Other';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';


function App() {
  return (
    <HashRouter basename='/'>
      <Header />
      <Container className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/other" component={Other} />
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
