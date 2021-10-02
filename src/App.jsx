import React, {useState} from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import SideBarToggleBtn from './components/SideBarToggleBtn/SideBarToggleBtn';



function App() {

  return (
    <div className="App">
      <Sidebar />
      <SideBarToggleBtn />

      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogPost} />
        <Route path="/admin" component={Admin} /> */}
      </Switch>
    </div>
  )
}

export default App
