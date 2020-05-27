import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard';
import Nav from './components/nav';
import Admin from './components/admin';

import Home from './components/home';

import ProductDetail from './components/productDetail';



function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Nav/>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/admin" component={Admin}/>
    <Route path="/:productId" component={ProductDetail}/>
    </Switch>
    
</BrowserRouter>

    </div>
  );
}

export default App;
