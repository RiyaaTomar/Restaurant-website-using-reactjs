import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element ={<Home/>}/>
          <Route path="/Menu" exact element ={<Menu/>}/>
          <Route path="/About" exact element ={<About/>}/>
          <Route path="/Contact" exact element ={<Contact/>}/>
          <Route path="/Cart "  exact element ={<Cart/>}/>
          
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
