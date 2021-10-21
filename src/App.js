import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Personaje from './pages/personajes';
import About from './pages/aboutMe';
import Navbar from './components/Navbar';
import NotFound from "./404";

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
        {
          //componentes estaticos
        }
          <Navbar/>


       {
         //Enrutamiento dinamico
       }
      <Switch>
        <Route exact path= '/' component= {Home}/>
        <Route exact path= '/personaje/:id' component= {Personaje}/>
        <Route exact path= '/about' component= {About}/>
        <Route component = {NotFound}/>
        
        

      </Switch>
    
    </Router>
  );
}

export default App;
