import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import './components/Body.css';
import SlideShow from './components/SlideShow';
import { Slides } from './components/Slides';


function App(){
  return (
    <>
    <Router> 
        <NavBar />
        <Switch>
                <Route path='/' exact />
            </Switch>
        </Router>
        <section>
        <SlideShow slides={Slides} />
        </section>

    
    </>
  );
}

export default App;
