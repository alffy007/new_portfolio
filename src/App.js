import React from "react";
import "./App.css";
import Contacts from "./components/Contacts/contacts";
import Projects from "./components/Projects/projects";
import About from "./components/About/about";
import Banner from "./components/Banner/banner";
import Navbar from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";
function App() {

 
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Contacts />
      <Footer/>
    </div>
  );
}

export default App;
